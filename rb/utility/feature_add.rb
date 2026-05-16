# ViacepAddressLookup SDK utility: feature_add
module ViacepAddressLookupUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
