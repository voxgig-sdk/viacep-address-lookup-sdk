# ViacepAddressLookup SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "ViacepAddressLookup",
            "slug": "viacep-address-lookup",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://viacep.com.br/ws",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "cep_lookup": {},
            },
        },
        "entity": {
      "cep_lookup": {
        "fields": [
          {
            "name": "bairro",
            "title": "Bairro",
            "type": "`$STRING`",
            "short": "Neighborhood",
          },
          {
            "name": "cep",
            "title": "Cep",
            "type": "`$STRING`",
            "short": "Postal code (CEP) in formatted style",
          },
          {
            "name": "complemento",
            "title": "Complemento",
            "type": "`$STRING`",
            "short": "Additional address information",
          },
          {
            "name": "ddd",
            "title": "Ddd",
            "type": "`$STRING`",
            "short": "Area code (DDD)",
          },
          {
            "name": "gia",
            "title": "Gia",
            "type": "`$STRING`",
            "short": "GIA code (São Paulo state)",
          },
          {
            "name": "ibge",
            "title": "Ibge",
            "type": "`$STRING`",
            "short": "IBGE city code",
          },
          {
            "name": "localidade",
            "title": "Localidade",
            "type": "`$STRING`",
            "short": "City name",
          },
          {
            "name": "logradouro",
            "title": "Logradouro",
            "type": "`$STRING`",
            "short": "Street name",
          },
          {
            "name": "siafi",
            "title": "Siafi",
            "type": "`$STRING`",
            "short": "SIAFI code",
          },
          {
            "name": "uf",
            "title": "Uf",
            "type": "`$STRING`",
            "short": "State abbreviation",
          },
        ],
        "name": "cep_lookup",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/{cep}/json",
                "segments": [
                  {
                    "var": "cep",
                  },
                  {
                    "lit": "json",
                  },
                ],
                "parts": [
                  "{cep}",
                  "json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "cep",
                      "orig": "cep",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "01310100",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "cep",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/{cep}/xml",
                "segments": [
                  {
                    "var": "cep",
                  },
                  {
                    "lit": "xml",
                  },
                ],
                "parts": [
                  "{cep}",
                  "xml",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "cep",
                      "orig": "cep",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "01310100",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "cep",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
