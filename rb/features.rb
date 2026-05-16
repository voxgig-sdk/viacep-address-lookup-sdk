# ViacepAddressLookup SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ViacepAddressLookupFeatures
  def self.make_feature(name)
    case name
    when "base"
      ViacepAddressLookupBaseFeature.new
    when "test"
      ViacepAddressLookupTestFeature.new
    else
      ViacepAddressLookupBaseFeature.new
    end
  end
end
