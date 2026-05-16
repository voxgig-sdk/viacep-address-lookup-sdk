<?php
declare(strict_types=1);

// ViacepAddressLookup SDK exists test

require_once __DIR__ . '/../viacepaddresslookup_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ViacepAddressLookupSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
