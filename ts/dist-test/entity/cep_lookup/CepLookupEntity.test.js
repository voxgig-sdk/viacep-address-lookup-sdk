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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "bairro", "req": false, "short": "Neighborhood", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "cep", "req": false, "short": "Postal code (CEP) in formatted style", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "complemento", "req": false, "short": "Additional address information", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "ddd", "req": false, "short": "Area code (DDD)", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "gia", "req": false, "short": "GIA code (São Paulo state)", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "ibge", "req": false, "short": "IBGE city code", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "localidade", "req": false, "short": "City name", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "logradouro", "req": false, "short": "Street name", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "siafi", "req": false, "short": "SIAFI code", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "uf", "req": false, "short": "State abbreviation", "type": "`$STRING`", "index$": 9 }], "name": "cep_lookup", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "01310100", "kind": "param", "name": "cep", "orig": "cep", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /{cep}/json", "json": "{\"operationId\":\"getCepJson\",\"parameters\":[{\"description\":\"Brazilian postal code (CEP) - 8 digits with or without hyphen (e.g., 01310-100 or 01310100)\",\"in\":\"path\",\"name\":\"cep\",\"required\":true,\"schema\":{\"example\":\"01310100\",\"pattern\":\"^[0-9]{8}$|^[0-9]{5}-[0-9]{3}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"invalidCep\":{\"summary\":\"Invalid CEP response\",\"value\":{\"erro\":true}},\"validCep\":{\"summary\":\"Valid CEP response\",\"value\":{\"bairro\":\"Bela Vista\",\"cep\":\"01310-100\",\"complemento\":\"de 612 a 1510 - lado par\",\"ddd\":\"11\",\"gia\":\"1004\",\"ibge\":\"3550308\",\"localidade\":\"São Paulo\",\"logradouro\":\"Avenida Paulista\",\"siafi\":\"7107\",\"uf\":\"SP\"}}},\"schema\":{\"properties\":{\"bairro\":{\"description\":\"Neighborhood\",\"example\":\"Bela Vista\",\"type\":\"string\"},\"cep\":{\"description\":\"Postal code (CEP) in formatted style\",\"example\":\"01310-100\",\"type\":\"string\"},\"complemento\":{\"description\":\"Additional address information\",\"example\":\"de 612 a 1510 - lado par\",\"type\":\"string\"},\"ddd\":{\"description\":\"Area code (DDD)\",\"example\":\"11\",\"type\":\"string\"},\"gia\":{\"description\":\"GIA code (São Paulo state)\",\"example\":\"1004\",\"type\":\"string\"},\"ibge\":{\"description\":\"IBGE city code\",\"example\":\"3550308\",\"type\":\"string\"},\"localidade\":{\"description\":\"City name\",\"example\":\"São Paulo\",\"type\":\"string\"},\"logradouro\":{\"description\":\"Street name\",\"example\":\"Avenida Paulista\",\"type\":\"string\"},\"siafi\":{\"description\":\"SIAFI code\",\"example\":\"7107\",\"type\":\"string\"},\"uf\":{\"description\":\"State abbreviation\",\"example\":\"SP\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with address information\"},\"400\":{\"description\":\"Bad request - Invalid CEP format\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/{cep}/json", "segments": [{ "var": "cep" }, { "lit": "json" }], "select": { "exist": ["cep"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "01310100", "kind": "param", "name": "cep", "orig": "cep", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /{cep}/xml", "json": "{\"operationId\":\"getCepXml\",\"parameters\":[{\"description\":\"Brazilian postal code (CEP) - 8 digits with or without hyphen (e.g., 01310-100 or 01310100)\",\"in\":\"path\",\"name\":\"cep\",\"required\":true,\"schema\":{\"example\":\"01310100\",\"pattern\":\"^[0-9]{8}$|^[0-9]{5}-[0-9]{3}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/xml\":{\"schema\":{\"type\":\"object\",\"xml\":{\"name\":\"xmlcep\"}}}},\"description\":\"Successful response with address information in XML format\"},\"400\":{\"description\":\"Bad request - Invalid CEP format\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/{cep}/xml", "segments": [{ "var": "cep" }, { "lit": "xml" }], "select": { "exist": ["cep"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "cep_lookup", "name__orig": "cep_lookup", "Name": "CepLookup", "name_": "cep_lookup", "name-": "cep-lookup", "NAME": "CEP_LOOKUP", "index$": 0 }, { "active": true, "entity": "cep_lookup", "key$": "BasicCepLookupFlow", "kind": "basic", "name": "BasicCepLookupFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "cep_lookup_ref01", "srcdatavar": "cep_lookup_ref01_data", "suffix": "_dt0" }, "match": { "id": "cep_lookup01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-cep_lookup_ref01" } }], "index$": 0 }] }, 'CepLookup');
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