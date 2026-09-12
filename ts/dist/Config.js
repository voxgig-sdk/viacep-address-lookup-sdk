"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'ViacepAddressLookup',
        slug: "viacep-address-lookup",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://viacep.com.br/ws",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            cep_lookup: {},
        }
    };
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
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map