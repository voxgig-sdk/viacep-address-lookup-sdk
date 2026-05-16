# ProjectName SDK exists test

import pytest
from viacepaddresslookup_sdk import ViacepAddressLookupSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ViacepAddressLookupSDK.test(None, None)
        assert testsdk is not None
