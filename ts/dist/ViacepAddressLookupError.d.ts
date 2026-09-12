import { Context } from './Context';
declare class ViacepAddressLookupError extends Error {
    isViacepAddressLookupError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ViacepAddressLookupError };
