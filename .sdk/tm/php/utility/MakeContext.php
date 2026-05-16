<?php
declare(strict_types=1);

// ViacepAddressLookup SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ViacepAddressLookupMakeContext
{
    public static function call(array $ctxmap, ?ViacepAddressLookupContext $basectx): ViacepAddressLookupContext
    {
        return new ViacepAddressLookupContext($ctxmap, $basectx);
    }
}
