-- Typed models for the ViacepAddressLookup SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class CepLookup
---@field bairro? string
---@field cep? string
---@field complemento? string
---@field ddd? string
---@field gia? string
---@field ibge? string
---@field localidade? string
---@field logradouro? string
---@field siafi? string
---@field uf? string

---@class CepLookupLoadMatch
---@field cep string

local M = {}

return M
