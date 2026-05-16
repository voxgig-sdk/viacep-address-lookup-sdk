# ViacepAddressLookup SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ViacepAddressLookupUtility.registrar = ->(u) {
  u.clean = ViacepAddressLookupUtilities::Clean
  u.done = ViacepAddressLookupUtilities::Done
  u.make_error = ViacepAddressLookupUtilities::MakeError
  u.feature_add = ViacepAddressLookupUtilities::FeatureAdd
  u.feature_hook = ViacepAddressLookupUtilities::FeatureHook
  u.feature_init = ViacepAddressLookupUtilities::FeatureInit
  u.fetcher = ViacepAddressLookupUtilities::Fetcher
  u.make_fetch_def = ViacepAddressLookupUtilities::MakeFetchDef
  u.make_context = ViacepAddressLookupUtilities::MakeContext
  u.make_options = ViacepAddressLookupUtilities::MakeOptions
  u.make_request = ViacepAddressLookupUtilities::MakeRequest
  u.make_response = ViacepAddressLookupUtilities::MakeResponse
  u.make_result = ViacepAddressLookupUtilities::MakeResult
  u.make_point = ViacepAddressLookupUtilities::MakePoint
  u.make_spec = ViacepAddressLookupUtilities::MakeSpec
  u.make_url = ViacepAddressLookupUtilities::MakeUrl
  u.param = ViacepAddressLookupUtilities::Param
  u.prepare_auth = ViacepAddressLookupUtilities::PrepareAuth
  u.prepare_body = ViacepAddressLookupUtilities::PrepareBody
  u.prepare_headers = ViacepAddressLookupUtilities::PrepareHeaders
  u.prepare_method = ViacepAddressLookupUtilities::PrepareMethod
  u.prepare_params = ViacepAddressLookupUtilities::PrepareParams
  u.prepare_path = ViacepAddressLookupUtilities::PreparePath
  u.prepare_query = ViacepAddressLookupUtilities::PrepareQuery
  u.result_basic = ViacepAddressLookupUtilities::ResultBasic
  u.result_body = ViacepAddressLookupUtilities::ResultBody
  u.result_headers = ViacepAddressLookupUtilities::ResultHeaders
  u.transform_request = ViacepAddressLookupUtilities::TransformRequest
  u.transform_response = ViacepAddressLookupUtilities::TransformResponse
}
