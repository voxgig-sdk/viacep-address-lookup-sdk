# ViacepAddressLookup SDK feature factory

from viacepaddresslookup_sdk.feature.base_feature import ViacepAddressLookupBaseFeature
from viacepaddresslookup_sdk.feature.test_feature import ViacepAddressLookupTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ViacepAddressLookupBaseFeature(),
        "test": lambda: ViacepAddressLookupTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
