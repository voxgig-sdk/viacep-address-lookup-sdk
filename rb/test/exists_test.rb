# ViacepAddressLookup SDK exists test

require "minitest/autorun"
require_relative "../ViacepAddressLookup_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ViacepAddressLookupSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
