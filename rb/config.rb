# ViacepAddressLookup SDK configuration

module ViacepAddressLookupConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ViacepAddressLookup",
        "slug" => "viacep-address-lookup",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
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
              "name" => "bairro",
              "title" => "Bairro",
              "type" => "`$STRING`",
              "short" => "Neighborhood",
            },
            {
              "name" => "cep",
              "title" => "Cep",
              "type" => "`$STRING`",
              "short" => "Postal code (CEP) in formatted style",
            },
            {
              "name" => "complemento",
              "title" => "Complemento",
              "type" => "`$STRING`",
              "short" => "Additional address information",
            },
            {
              "name" => "ddd",
              "title" => "Ddd",
              "type" => "`$STRING`",
              "short" => "Area code (DDD)",
            },
            {
              "name" => "gia",
              "title" => "Gia",
              "type" => "`$STRING`",
              "short" => "GIA code (São Paulo state)",
            },
            {
              "name" => "ibge",
              "title" => "Ibge",
              "type" => "`$STRING`",
              "short" => "IBGE city code",
            },
            {
              "name" => "localidade",
              "title" => "Localidade",
              "type" => "`$STRING`",
              "short" => "City name",
            },
            {
              "name" => "logradouro",
              "title" => "Logradouro",
              "type" => "`$STRING`",
              "short" => "Street name",
            },
            {
              "name" => "siafi",
              "title" => "Siafi",
              "type" => "`$STRING`",
              "short" => "SIAFI code",
            },
            {
              "name" => "uf",
              "title" => "Uf",
              "type" => "`$STRING`",
              "short" => "State abbreviation",
            },
          ],
          "name" => "cep_lookup",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{cep}/json",
                  "segments" => [
                    {
                      "var" => "cep",
                    },
                    {
                      "lit" => "json",
                    },
                  ],
                  "parts" => [
                    "{cep}",
                    "json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "cep",
                        "orig" => "cep",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "01310100",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "cep",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{cep}/xml",
                  "segments" => [
                    {
                      "var" => "cep",
                    },
                    {
                      "lit" => "xml",
                    },
                  ],
                  "parts" => [
                    "{cep}",
                    "xml",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "cep",
                        "orig" => "cep",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "01310100",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "cep",
                    ],
                  },
                },
              ],
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
