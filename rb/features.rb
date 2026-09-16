# ViacepAddressLookup SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ViacepAddressLookupFeatures
  def self.make_feature(name)
    case name
    when "base"
      ViacepAddressLookupBaseFeature.new
    when "ratelimit"
      ViacepAddressLookupRatelimitFeature.new
    when "retry"
      ViacepAddressLookupRetryFeature.new
    when "test"
      ViacepAddressLookupTestFeature.new
    when "timeout"
      ViacepAddressLookupTimeoutFeature.new
    else
      ViacepAddressLookupBaseFeature.new
    end
  end
end
