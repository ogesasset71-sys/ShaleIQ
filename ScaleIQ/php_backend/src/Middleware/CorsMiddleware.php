<?php

namespace App\Middleware;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Slim\Psr7\Response as SlimResponse;

class CorsMiddleware implements MiddlewareInterface
{
    private  $allowedOrigins;

    public function __construct(array $allowedOrigins = ['*'])
    {
        $this->allowedOrigins = $allowedOrigins;
    }

    public function process(Request $request, RequestHandler $handler): Response
    {
        // Handle preflight requests
        if ($request->getMethod() === 'OPTIONS') {
            $response = new SlimResponse();
        } else {
            $response = $handler->handle($request);
        }

        // Add CORS headers
        $origin = $request->getHeaderLine('Origin');
        
        if (in_array('*', $this->allowedOrigins) || in_array($origin, $this->allowedOrigins)) {
            $response = $response->withHeader('Access-Control-Allow-Origin', $origin ?: '*');
        }

        $response = $response
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Credentials', 'true');

        return $response;
    }
}