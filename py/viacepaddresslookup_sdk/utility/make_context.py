# ViacepAddressLookup SDK utility: make_context

from viacepaddresslookup_sdk.core.context import ViacepAddressLookupContext


def make_context_util(ctxmap, basectx):
    return ViacepAddressLookupContext(ctxmap, basectx)
