<?php

namespace App\Models;

use DateTime;
use Ramsey\Uuid\Uuid;

class ContactFormSubmission
{
    public  $id;
    public  $full_name;
    public  $email;
    public  $company;
    public  $position;
    public  $phone;
    public  $project_type;
    public  $budget;
    public  $timeline;
    public  $message;
    public  $timestamp;
    public  $status;

    public function __construct(array $data = [])
    {
        $this->id = $data['id'] ?? Uuid::uuid4()->toString();
        $this->full_name = $data['full_name'] ?? '';
        $this->email = $data['email'] ?? '';
        $this->company = $data['company'] ?? '';
        $this->position = $data['position'] ?? '';
        $this->phone = $data['phone'] ?? null;
        $this->project_type = $data['project_type'] ?? '';
        $this->budget = $data['budget'] ?? null;
        $this->timeline = $data['timeline'] ?? '';
        $this->message = $data['message'] ?? '';
        $this->timestamp = $data['timestamp'] ?? (new DateTime())->format('Y-m-d\TH:i:s\Z');
        $this->status = $data['status'] ?? 'new';
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'full_name' => $this->full_name,
            'email' => $this->email,
            'company' => $this->company,
            'position' => $this->position,
            'phone' => $this->phone,
            'project_type' => $this->project_type,
            'budget' => $this->budget,
            'timeline' => $this->timeline,
            'message' => $this->message,
            'timestamp' => $this->timestamp,
            'status' => $this->status
        ];
    }

    public function validate(): array
    {
        $errors = [];

        if (empty($this->full_name)) {
            $errors[] = 'Full name is required';
        }

        if (empty($this->email)) {
            $errors[] = 'Email is required';
        } elseif (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Invalid email format';
        }

        if (empty($this->company)) {
            $errors[] = 'Company is required';
        }

        if (empty($this->position)) {
            $errors[] = 'Position is required';
        }

        if (empty($this->project_type)) {
            $errors[] = 'Project type is required';
        }

        if (empty($this->timeline)) {
            $errors[] = 'Timeline is required';
        }

        if (empty($this->message)) {
            $errors[] = 'Message is required';
        }

        return $errors;
    }
}