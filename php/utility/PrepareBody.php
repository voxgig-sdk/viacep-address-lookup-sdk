<?php
declare(strict_types=1);

// ViacepAddressLookup SDK utility: prepare_body

class ViacepAddressLookupPrepareBody
{
    public static function call(ViacepAddressLookupContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
