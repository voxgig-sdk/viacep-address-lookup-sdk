# ViacepAddressLookup SDK configuration

module ViacepAddressLookupConfig
  def self.make_config
    {
      "main" => {
        "name" => "ViacepAddressLookup",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://viacep.com.br/ws",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "cep_lookup" => {},
        },
      },
      "entity" => {
        "cep_lookup" => {
          "fields" => [
            {
              "active" => true,
              "name" => "bairro",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "cep",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "complemento",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "ddd",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "gia",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "ibge",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "localidade",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "logradouro",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "siafi",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "uf",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 9,
            },
          ],
          "name" => "cep_lookup",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => "01310100",
                        "kind" => "param",
                        "name" => "cep",
                        "orig" => "cep",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/{cep}/json",
                  "parts" => [
                    "{cep}",
                    "json",
                  ],
                  "select" => {
                    "exist" => [
                      "cep",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => "01310100",
                        "kind" => "param",
                        "name" => "cep",
                        "orig" => "cep",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/{cep}/xml",
                  "parts" => [
                    "{cep}",
                    "xml",
                  ],
                  "select" => {
                    "exist" => [
                      "cep",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ViacepAddressLookupFeatures.make_feature(name)
  end
end
