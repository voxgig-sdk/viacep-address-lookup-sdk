package = "voxgig-sdk-viacep-address-lookup"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/viacep-address-lookup-sdk.git"
}
description = {
  summary = "ViacepAddressLookup SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["viacep-address-lookup_sdk"] = "viacep-address-lookup_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
