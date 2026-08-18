package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ViacepAddressLookup",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://viacep.com.br/ws",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"cep_lookup": map[string]any{},
			},
		},
		"entity": map[string]any{
			"cep_lookup": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bairro",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cep",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "complemento",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ddd",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gia",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ibge",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "localidade",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logradouro",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "siafi",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uf",
						"type": "`$STRING`",
					},
				},
				"name": "cep_lookup",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "01310100",
											"kind": "param",
											"name": "cep",
											"orig": "cep",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{cep}/json",
								"parts": []any{
									"{cep}",
									"json",
								},
								"select": map[string]any{
									"exist": []any{
										"cep",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "01310100",
											"kind": "param",
											"name": "cep",
											"orig": "cep",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{cep}/xml",
								"parts": []any{
									"{cep}",
									"xml",
								},
								"select": map[string]any{
									"exist": []any{
										"cep",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
