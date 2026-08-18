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
              "name" => "bairro",
              "type" => "`$STRING`",
            },
            {
              "name" => "cep",
              "type" => "`$STRING`",
            },
            {
              "name" => "complemento",
              "type" => "`$STRING`",
            },
            {
              "name" => "ddd",
              "type" => "`$STRING`",
            },
            {
              "name" => "gia",
              "type" => "`$STRING`",
            },
            {
              "name" => "ibge",
              "type" => "`$STRING`",
            },
            {
              "name" => "localidade",
              "type" => "`$STRING`",
            },
            {
              "name" => "logradouro",
              "type" => "`$STRING`",
            },
            {
              "name" => "siafi",
              "type" => "`$STRING`",
            },
            {
              "name" => "uf",
              "type" => "`$STRING`",
            },
          ],
          "name" => "cep_lookup",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "01310100",
                        "kind" => "param",
                        "name" => "cep",
                        "orig" => "cep",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "01310100",
                        "kind" => "param",
                        "name" => "cep",
                        "orig" => "cep",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
