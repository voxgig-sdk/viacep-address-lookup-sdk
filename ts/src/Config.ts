
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ViacepAddressLookup',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://viacep.com.br/ws",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      cep_lookup: {
      },

    }
  }


  entity = {
    "cep_lookup": {
      "fields": [
        {
          "name": "bairro",
          "type": "`$STRING`"
        },
        {
          "name": "cep",
          "type": "`$STRING`"
        },
        {
          "name": "complemento",
          "type": "`$STRING`"
        },
        {
          "name": "ddd",
          "type": "`$STRING`"
        },
        {
          "name": "gia",
          "type": "`$STRING`"
        },
        {
          "name": "ibge",
          "type": "`$STRING`"
        },
        {
          "name": "localidade",
          "type": "`$STRING`"
        },
        {
          "name": "logradouro",
          "type": "`$STRING`"
        },
        {
          "name": "siafi",
          "type": "`$STRING`"
        },
        {
          "name": "uf",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{cep}/json",
              "parts": [
                "{cep}",
                "json"
              ],
              "select": {
                "exist": [
                  "cep"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {
                "params": [
                  {
                    "example": "01310100",
                    "kind": "param",
                    "name": "cep",
                    "orig": "cep",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{cep}/xml",
              "parts": [
                "{cep}",
                "xml"
              ],
              "select": {
                "exist": [
                  "cep"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

