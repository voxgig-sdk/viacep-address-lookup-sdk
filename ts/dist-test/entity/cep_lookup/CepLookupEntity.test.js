"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CepLookupEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VIACEP_ADDRESS_LOOKUP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VIACEP_ADDRESS_LOOKUP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ViacepAddressLookupSDK.test();
        const ent = testsdk.CepLookup();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VIACEP_ADDRESS_LOOKUP_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cep_lookup.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "bairro": { "a": true, "h": "Bairro", "n": "bairro", "r": false, "sh": "Neighborhood", "t": "`$STRING`", "key$": "bairro", "index$": 0 }, "cep": { "a": true, "h": "Cep", "n": "cep", "r": false, "sh": "Postal code (CEP) in formatted style", "t": "`$STRING`", "key$": "cep", "index$": 1 }, "complemento": { "a": true, "h": "Complemento", "n": "complemento", "r": false, "sh": "Additional address information", "t": "`$STRING`", "key$": "complemento", "index$": 2 }, "ddd": { "a": true, "h": "Ddd", "n": "ddd", "r": false, "sh": "Area code (DDD)", "t": "`$STRING`", "key$": "ddd", "index$": 3 }, "gia": { "a": true, "h": "Gia", "n": "gia", "r": false, "sh": "GIA code (São Paulo state)", "t": "`$STRING`", "key$": "gia", "index$": 4 }, "ibge": { "a": true, "h": "Ibge", "n": "ibge", "r": false, "sh": "IBGE city code", "t": "`$STRING`", "key$": "ibge", "index$": 5 }, "localidade": { "a": true, "h": "Localidade", "n": "localidade", "r": false, "sh": "City name", "t": "`$STRING`", "key$": "localidade", "index$": 6 }, "logradouro": { "a": true, "h": "Logradouro", "n": "logradouro", "r": false, "sh": "Street name", "t": "`$STRING`", "key$": "logradouro", "index$": 7 }, "siafi": { "a": true, "h": "Siafi", "n": "siafi", "r": false, "sh": "SIAFI code", "t": "`$STRING`", "key$": "siafi", "index$": 8 }, "uf": { "a": true, "h": "Uf", "n": "uf", "r": false, "sh": "State abbreviation", "t": "`$STRING`", "key$": "uf", "index$": 9 } }, "name": "cep_lookup", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /{cep}/json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01310100", "k": "param", "n": "cep", "or": "cep", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/{cep}/json", "q": { "exist": ["cep"] }, "r": {}, "s": [{ "var": "cep" }, { "lit": "json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /{cep}/xml", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01310100", "k": "param", "n": "cep", "or": "cep", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/{cep}/xml", "q": { "exist": ["cep"] }, "r": {}, "s": [{ "var": "cep" }, { "lit": "xml" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "cep_lookup", "name__orig": "cep_lookup", "Name": "CepLookup", "name_": "cep_lookup", "name-": "cep-lookup", "NAME": "CEP_LOOKUP", "index$": 0 }, { "active": true, "entity": "cep_lookup", "key$": "BasicCepLookupFlow", "kind": "basic", "name": "BasicCepLookupFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "cep_lookup_ref01", "srcdatavar": "cep_lookup_ref01_data", "suffix": "_dt0" }, "m": { "id": "cep_lookup01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-cep_lookup_ref01" } }], "index$": 0 }] }, 'CepLookup', { "GET /{cep}/json": { "protocol": "http", "operationId": "getCepJson", "responses": { "200": { "description": "Successful response with address information", "content": { "application/json": { "schema": { "type": "object", "properties": { "cep": { "description": "Postal code (CEP) in formatted style", "example": "01310-100", "key$": "cep", "type": "string" }, "logradouro": { "description": "Street name", "example": "Avenida Paulista", "key$": "logradouro", "type": "string" }, "complemento": { "description": "Additional address information", "example": "de 612 a 1510 - lado par", "key$": "complemento", "type": "string" }, "bairro": { "description": "Neighborhood", "example": "Bela Vista", "key$": "bairro", "type": "string" }, "localidade": { "description": "City name", "example": "São Paulo", "key$": "localidade", "type": "string" }, "uf": { "description": "State abbreviation", "example": "SP", "key$": "uf", "type": "string" }, "ibge": { "description": "IBGE city code", "example": "3550308", "key$": "ibge", "type": "string" }, "gia": { "description": "GIA code (São Paulo state)", "example": "1004", "key$": "gia", "type": "string" }, "ddd": { "description": "Area code (DDD)", "example": "11", "key$": "ddd", "type": "string" }, "siafi": { "description": "SIAFI code", "example": "7107", "key$": "siafi", "type": "string" } }, "index$": 0 }, "examples": { "validCep": { "summary": "Valid CEP response", "value": { "cep": "01310-100", "logradouro": "Avenida Paulista", "complemento": "de 612 a 1510 - lado par", "bairro": "Bela Vista", "localidade": "São Paulo", "uf": "SP", "ibge": "3550308", "gia": "1004", "ddd": "11", "siafi": "7107" } }, "invalidCep": { "summary": "Invalid CEP response", "value": { "erro": true } } } } } }, "400": { "description": "Bad request - Invalid CEP format" } }, "parameters": [{ "name": "cep", "in": "path", "description": "Brazilian postal code (CEP) - 8 digits with or without hyphen (e.g., 01310-100 or 01310100)", "required": true, "schema": { "type": "string", "pattern": "^[0-9]{8}$|^[0-9]{5}-[0-9]{3}$", "example": "01310100" }, "index$": 0 }], "securitySource": "unspecified" }, "GET /{cep}/xml": { "protocol": "http", "operationId": "getCepXml", "responses": { "200": { "description": "Successful response with address information in XML format", "content": { "application/xml": { "schema": { "type": "object", "xml": { "name": "xmlcep" } } } } }, "400": { "description": "Bad request - Invalid CEP format" } }, "parameters": [{ "name": "cep", "in": "path", "description": "Brazilian postal code (CEP) - 8 digits with or without hyphen (e.g., 01310-100 or 01310100)", "required": true, "schema": { "type": "string", "pattern": "^[0-9]{8}$|^[0-9]{5}-[0-9]{3}$", "example": "01310100" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let cep_lookup_ref01_data = Object.values(setup.data.existing.cep_lookup)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const cep_lookup_ref01_ent = client.CepLookup();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cep_lookup/CepLookupTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ViacepAddressLookupSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cep_lookup01', 'cep_lookup02', 'cep_lookup03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VIACEP_ADDRESS_LOOKUP_TEST_CEP_LOOKUP_ENTID': idmap,
        'VIACEP_ADDRESS_LOOKUP_TEST_LIVE': 'FALSE',
        'VIACEP_ADDRESS_LOOKUP_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['VIACEP_ADDRESS_LOOKUP_TEST_CEP_LOOKUP_ENTID'];
    const live = 'TRUE' === env.VIACEP_ADDRESS_LOOKUP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VIACEP_ADDRESS_LOOKUP_TEST_CEP_LOOKUP_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ViacepAddressLookupSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.VIACEP_ADDRESS_LOOKUP_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CepLookupEntity.test.js.map