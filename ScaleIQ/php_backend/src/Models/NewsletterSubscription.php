<?php

namespace App\Models;

use DateTime;
use Ramsey\Uuid\Uuid;

class NewsletterSubscription
{
    public  $id;
    public  $email;
    public  $timestamp;
    public  $status;

    public function __construct(array $data = [])
    {
        $this->id = $data['id'] ?? Uuid::uuid4()->toString();
        $this->email = $data['email'] ?? '';
        $this->timestamp = $data['timestamp'] ?? (new DateTime())->format('Y-m-d\TH:i:s\Z');
        $this->status = $data['status'] ?? 'active';
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'timestamp' => $this->timestamp,
            'status' => $this->status
        ];
    }

    public function validate(): array
    {
        $errors = [];

        if (empty($this->email)) {
            $errors[] = 'Email is required';
        } elseif (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Invalid email format';
        }

        return $errors;
    }
}