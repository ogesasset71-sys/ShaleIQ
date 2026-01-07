<?php

use App\Models\ContactFormSubmission;
use App\Models\NewsletterSubscription;
use App\Services\FileStorageService;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require __DIR__ . '/../vendor/autoload.php';

// Initialize file storage service
$dataDir = '/var/www/scaleiq/api/data';
$storage = new FileStorageService($dataDir);

// Create Slim 3 app
$app = new \Slim\App();

// Get container
$container = $app->getContainer();
$container['settings']['displayErrorDetails'] = true;
// JSON error handler
$container['errorHandler'] = function ($container) {
    return function ($request, $response, $exception) {
        $data = [
            'error' => $exception->getMessage(),
            'file' => $exception->getFile(),
            'line' => $exception->getLine(),
            'trace' => $exception->getTraceAsString(),
        ];
        return $response
            ->withStatus(500)
            ->withHeader('Content-Type', 'application/json')
            ->write(json_encode($data, JSON_PRETTY_PRINT));
    };
};

// Helper function for JSON responses
function jsonResponse($response, $data, $status = 200) {
    return $response->withStatus($status)
                    ->withHeader('Content-Type', 'application/json')
                    ->write(json_encode($data));
}

// Routes

$app->get('/', function ($request, $response) {
    return jsonResponse($response, ['message' => 'Hello World']);
});

// Contact endpoints
$app->group('/contact', function () use ($storage) {

    $this->post('', function ($request, $response) use ($storage) {
        $body = $request->getParsedBody() ?: json_decode($request->getBody()->getContents(), true);

        if (!$body) {
            return jsonResponse($response, ['error' => 'Invalid JSON data'], 400);
        }

        $submission = new ContactFormSubmission($body);
        $errors = $submission->validate();

        if (!empty($errors)) {
            return jsonResponse($response, ['errors' => $errors], 400);
        }

        if (!$storage->save('contact_submissions', $submission->toArray())) {
            return jsonResponse($response, ['error' => 'Failed to save submission'], 500);
        }

        return jsonResponse($response, $submission->toArray(), 201);
    });

    $this->get('', function ($request, $response) use ($storage) {
        $submissions = $storage->findAll('contact_submissions');
        return jsonResponse($response, $submissions);
    });
});

// Newsletter endpoints
$app->group('/newsletter', function () use ($storage) {

    $this->post('', function ($request, $response) use ($storage) {
        $body = $request->getParsedBody() ?: json_decode($request->getBody()->getContents(), true);

        if (!$body) {
            return jsonResponse($response, ['error' => 'Invalid JSON data'], 400);
        }

        $existing = $storage->findByEmail('newsletter_subscriptions', $body['email'] ?? '');
        if ($existing) {
            return jsonResponse($response, $existing);
        }

        $subscription = new NewsletterSubscription($body);
        $errors = $subscription->validate();

        if (!empty($errors)) {
            return jsonResponse($response, ['errors' => $errors], 400);
        }

        if (!$storage->save('newsletter_subscriptions', $subscription->toArray())) {
            return jsonResponse($response, ['error' => 'Failed to save subscription'], 500);
        }

        return jsonResponse($response, $subscription->toArray(), 201);
    });

    $this->get('', function ($request, $response) use ($storage) {
        $subscriptions = $storage->findAll('newsletter_subscriptions');
        return jsonResponse($response, $subscriptions);
    });
});

// Run app
$app->run();
