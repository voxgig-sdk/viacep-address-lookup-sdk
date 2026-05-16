<?php
declare(strict_types=1);

// ViacepAddressLookup SDK utility: result_body

class ViacepAddressLookupResultBody
{
    public static function call(ViacepAddressLookupContext $ctx): ?ViacepAddressLookupResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
