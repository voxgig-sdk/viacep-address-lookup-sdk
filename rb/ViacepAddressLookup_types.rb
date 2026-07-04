# frozen_string_literal: true

# Typed models for the ViacepAddressLookup SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# CepLookup entity data model.
#
# @!attribute [rw] bairro
#   @return [String, nil]
#
# @!attribute [rw] cep
#   @return [String, nil]
#
# @!attribute [rw] complemento
#   @return [String, nil]
#
# @!attribute [rw] ddd
#   @return [String, nil]
#
# @!attribute [rw] gia
#   @return [String, nil]
#
# @!attribute [rw] ibge
#   @return [String, nil]
#
# @!attribute [rw] localidade
#   @return [String, nil]
#
# @!attribute [rw] logradouro
#   @return [String, nil]
#
# @!attribute [rw] siafi
#   @return [String, nil]
#
# @!attribute [rw] uf
#   @return [String, nil]
CepLookup = Struct.new(
  :bairro,
  :cep,
  :complemento,
  :ddd,
  :gia,
  :ibge,
  :localidade,
  :logradouro,
  :siafi,
  :uf,
  keyword_init: true
)

# Request payload for CepLookup#load.
#
# @!attribute [rw] cep
#   @return [String]
CepLookupLoadMatch = Struct.new(
  :cep,
  keyword_init: true
)

