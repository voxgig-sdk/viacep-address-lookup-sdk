# ViacepAddressLookup SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "type": "`$STRING`",
          },
          {
            "name": "cep",
            "type": "`$STRING`",
          },
          {
            "name": "complemento",
            "type": "`$STRING`",
          },
          {
            "name": "ddd",
            "type": "`$STRING`",
          },
          {
            "name": "gia",
            "type": "`$STRING`",
          },
          {
            "name": "ibge",
            "type": "`$STRING`",
          },
          {
            "name": "localidade",
            "type": "`$STRING`",
          },
          {
            "name": "logradouro",
            "type": "`$STRING`",
          },
          {
            "name": "siafi",
            "type": "`$STRING`",
          },
          {
            "name": "uf",
            "type": "`$STRING`",
          },
        ],
        "name": "cep_lookup",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "01310100",
                      "kind": "param",
                      "name": "cep",
                      "orig": "cep",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{cep}/json",
                "parts": [
                  "{cep}",
                  "json",
                ],
                "select": {
                  "exist": [
                    "cep",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "01310100",
                      "kind": "param",
                      "name": "cep",
                      "orig": "cep",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{cep}/xml",
                "parts": [
                  "{cep}",
                  "xml",
                ],
                "select": {
                  "exist": [
                    "cep",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
