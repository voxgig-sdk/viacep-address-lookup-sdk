# ViacepAddressLookup SDK utility: make_context
require_relative '../core/context'
module ViacepAddressLookupUtilities
  MakeContext = ->(ctxmap, basectx) {
    ViacepAddressLookupContext.new(ctxmap, basectx)
  }
end
