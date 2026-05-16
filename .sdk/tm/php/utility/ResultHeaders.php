<?php
declare(strict_types=1);

// ViacepAddressLookup SDK utility: result_headers

class ViacepAddressLookupResultHeaders
{
    public static function call(ViacepAddressLookupContext $ctx): ?ViacepAddressLookupResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
