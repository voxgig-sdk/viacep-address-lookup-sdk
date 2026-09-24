"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViacepAddressLookupError = void 0;
class ViacepAddressLookupError extends Error {
    isViacepAddressLookupError = true;
    sdk = 'ViacepAddressLookup';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ViacepAddressLookupError = ViacepAddressLookupError;
//# sourceMappingURL=ViacepAddressLookupError.js.map