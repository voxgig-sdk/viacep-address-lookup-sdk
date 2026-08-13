# ViacepAddressLookup SDK utility: make_context

from projectname_sdk.core.context import ViacepAddressLookupContext


def make_context_util(ctxmap, basectx):
    return ViacepAddressLookupContext(ctxmap, basectx)
