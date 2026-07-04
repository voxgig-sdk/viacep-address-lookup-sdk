// Typed models for the ViacepAddressLookup SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface CepLookup {
  bairro?: string
  cep?: string
  complemento?: string
  ddd?: string
  gia?: string
  ibge?: string
  localidade?: string
  logradouro?: string
  siafi?: string
  uf?: string
}

export interface CepLookupLoadMatch {
  cep: string
}

