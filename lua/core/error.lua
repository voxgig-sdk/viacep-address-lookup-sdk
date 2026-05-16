-- ViacepAddressLookup SDK error

local ViacepAddressLookupError = {}
ViacepAddressLookupError.__index = ViacepAddressLookupError


function ViacepAddressLookupError.new(code, msg, ctx)
  local self = setmetatable({}, ViacepAddressLookupError)
  self.is_sdk_error = true
  self.sdk = "ViacepAddressLookup"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ViacepAddressLookupError:error()
  return self.msg
end


function ViacepAddressLookupError:__tostring()
  return self.msg
end


return ViacepAddressLookupError
