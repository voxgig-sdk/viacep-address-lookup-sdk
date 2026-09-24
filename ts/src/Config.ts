
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ViacepAddressLookup',
        slug: "viacep-address-lookup",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Bairro",
          "type": "`$STRING`",
          "short": "Neighborhood"
        },
        {
          "name": "cep",
          "title": "Cep",
          "type": "`$STRING`",
          "short": "Postal code (CEP) in formatted style"
        },
        {
          "name": "complemento",
          "title": "Complemento",
          "type": "`$STRING`",
          "short": "Additional address information"
        },
        {
          "name": "ddd",
          "title": "Ddd",
          "type": "`$STRING`",
          "short": "Area code (DDD)"
        },
        {
          "name": "gia",
          "title": "Gia",
          "type": "`$STRING`",
          "short": "GIA code (São Paulo state)"
        },
        {
          "name": "ibge",
          "title": "Ibge",
          "type": "`$STRING`",
          "short": "IBGE city code"
        },
        {
          "name": "localidade",
          "title": "Localidade",
          "type": "`$STRING`",
          "short": "City name"
        },
        {
          "name": "logradouro",
          "title": "Logradouro",
          "type": "`$STRING`",
          "short": "Street name"
        },
        {
          "name": "siafi",
          "title": "Siafi",
          "type": "`$STRING`",
          "short": "SIAFI code"
        },
        {
          "name": "uf",
          "title": "Uf",
          "type": "`$STRING`",
          "short": "State abbreviation"
        }
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
                  "var": "cep"
                },
                {
                  "lit": "json"
                }
              ],
              "parts": [
                "{cep}",
                "json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "cep",
                    "orig": "cep",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "01310100"
                  }
                ]
              },
              "select": {
                "exist": [
                  "cep"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/{cep}/xml",
              "segments": [
                {
                  "var": "cep"
                },
                {
                  "lit": "xml"
                }
              ],
              "parts": [
                "{cep}",
                "xml"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "cep",
                    "orig": "cep",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "01310100"
                  }
                ]
              },
              "select": {
                "exist": [
                  "cep"
                ]
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
  config,
  FEATURE_PLUGINS,
}

