<?php
declare(strict_types=1);

// ViacepAddressLookup SDK utility: feature_add

class ViacepAddressLookupFeatureAdd
{
    public static function call(ViacepAddressLookupContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
