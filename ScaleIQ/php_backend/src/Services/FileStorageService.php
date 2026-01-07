<?php

namespace App\Services;

class FileStorageService
{
    private  $dataDir;

    public function __construct(string $dataDir)
    {
        $this->dataDir = $dataDir;
        
        // Create data directory if it doesn't exist
        if (!is_dir($this->dataDir)) {
            mkdir($this->dataDir, 0755, true);
        }
    }

    public function save(string $collection, array $data): bool
    {
        $filePath = $this->dataDir . '/' . $collection . '.json';
        
        // Read existing data
        $existingData = $this->loadCollection($collection);
        
        // Add new data
        $existingData[] = $data;
        
        // Save to file
        $jsonData = json_encode($existingData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        return file_put_contents($filePath, $jsonData) !== false;
    }

    public function findAll(string $collection): array
    {
        return $this->loadCollection($collection);
    }

    public function findByEmail(string $collection, string $email): ?array
    {
        $data = $this->loadCollection($collection);
        
        foreach ($data as $record) {
            if (isset($record['email']) && $record['email'] === $email) {
                return $record;
            }
        }
        
        return null;
    }

    private function loadCollection(string $collection): array
    {
        $filePath = $this->dataDir . '/' . $collection . '.json';
        
        if (!file_exists($filePath)) {
            return [];
        }
        
        $jsonContent = file_get_contents($filePath);
        if ($jsonContent === false) {
            return [];
        }
        
        $decoded = json_decode($jsonContent, true);
        return is_array($decoded) ? $decoded : [];
    }
}