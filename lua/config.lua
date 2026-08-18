-- ViacepAddressLookup SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "ViacepAddressLookup",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://viacep.com.br/ws",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["cep_lookup"] = {},
      },
    },
    entity = {
      ["cep_lookup"] = {
        ["fields"] = {
          {
            ["name"] = "bairro",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cep",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "complemento",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ddd",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gia",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ibge",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "localidade",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "logradouro",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "siafi",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "uf",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "cep_lookup",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "01310100",
                      ["kind"] = "param",
                      ["name"] = "cep",
                      ["orig"] = "cep",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{cep}/json",
                ["parts"] = {
                  "{cep}",
                  "json",
                },
                ["select"] = {
                  ["exist"] = {
                    "cep",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "01310100",
                      ["kind"] = "param",
                      ["name"] = "cep",
                      ["orig"] = "cep",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{cep}/xml",
                ["parts"] = {
                  "{cep}",
                  "xml",
                },
                ["select"] = {
                  ["exist"] = {
                    "cep",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
