# ViacepAddressLookup SDK configuration


def make_config():
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
            "active": True,
            "name": "bairro",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "cep",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "complemento",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "ddd",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "gia",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "ibge",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "localidade",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "logradouro",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "siafi",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "uf",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "cep_lookup",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01310100",
                      "kind": "param",
                      "name": "cep",
                      "orig": "cep",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01310100",
                      "kind": "param",
                      "name": "cep",
                      "orig": "cep",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
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
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
