
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


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
          "short": "Neighborhood",
          "type": "`$STRING`"
        },
        {
          "name": "cep",
          "short": "Postal code (CEP) in formatted style",
          "type": "`$STRING`"
        },
        {
          "name": "complemento",
          "short": "Additional address information",
          "type": "`$STRING`"
        },
        {
          "name": "ddd",
          "short": "Area code (DDD)",
          "type": "`$STRING`"
        },
        {
          "name": "gia",
          "short": "GIA code (São Paulo state)",
          "type": "`$STRING`"
        },
        {
          "name": "ibge",
          "short": "IBGE city code",
          "type": "`$STRING`"
        },
        {
          "name": "localidade",
          "short": "City name",
          "type": "`$STRING`"
        },
        {
          "name": "logradouro",
          "short": "Street name",
          "type": "`$STRING`"
        },
        {
          "name": "siafi",
          "short": "SIAFI code",
          "type": "`$STRING`"
        },
        {
          "name": "uf",
          "short": "State abbreviation",
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
              "segments": [
                {
                  "var": "cep"
                },
                {
                  "lit": "json"
                }
              ],
              "select": {
                "exist": [
                  "cep"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "{cep}",
                "json"
              ]
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
              "segments": [
                {
                  "var": "cep"
                },
                {
                  "lit": "xml"
                }
              ],
              "select": {
                "exist": [
                  "cep"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "{cep}",
                "xml"
              ]
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

