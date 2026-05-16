<?php
declare(strict_types=1);

// ViacepAddressLookup SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ViacepAddressLookupFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ViacepAddressLookupBaseFeature();
            case "test":
                return new ViacepAddressLookupTestFeature();
            default:
                return new ViacepAddressLookupBaseFeature();
        }
    }
}
