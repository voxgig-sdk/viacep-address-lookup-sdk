-- ViacepAddressLookup SDK exists test

local sdk = require("viacep-address-lookup_sdk")

describe("ViacepAddressLookupSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
