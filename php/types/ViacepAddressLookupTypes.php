<?php
declare(strict_types=1);

// Typed models for the ViacepAddressLookup SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** CepLookup entity data model. */
class CepLookup
{
    public ?string $bairro = null;
    public ?string $cep = null;
    public ?string $complemento = null;
    public ?string $ddd = null;
    public ?string $gia = null;
    public ?string $ibge = null;
    public ?string $localidade = null;
    public ?string $logradouro = null;
    public ?string $siafi = null;
    public ?string $uf = null;
}

/** Request payload for CepLookup#load. */
class CepLookupLoadMatch
{
    public string $cep;
}

