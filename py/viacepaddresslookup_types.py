# Typed models for the ViacepAddressLookup SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class CepLookup:
    bairro: Optional[str] = None
    cep: Optional[str] = None
    complemento: Optional[str] = None
    ddd: Optional[str] = None
    gia: Optional[str] = None
    ibge: Optional[str] = None
    localidade: Optional[str] = None
    logradouro: Optional[str] = None
    siafi: Optional[str] = None
    uf: Optional[str] = None


@dataclass
class CepLookupLoadMatch:
    cep: str

