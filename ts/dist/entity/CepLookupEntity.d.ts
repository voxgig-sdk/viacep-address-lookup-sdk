import { ViacepAddressLookupEntityBase } from '../ViacepAddressLookupEntityBase';
import type { ViacepAddressLookupSDK } from '../ViacepAddressLookupSDK';
import type { Control } from '../types';
import type { CepLookup, CepLookupLoadMatch } from '../ViacepAddressLookupTypes';
declare class CepLookupEntity extends ViacepAddressLookupEntityBase<CepLookup> {
    constructor(client: ViacepAddressLookupSDK, entopts: any);
    make(this: CepLookupEntity): CepLookupEntity;
    load(this: any, reqmatch?: CepLookupLoadMatch, ctrl?: Control): Promise<CepLookupEntity>;
}
export { CepLookupEntity };
