
import { Context } from './Context'


class ViacepAddressLookupError extends Error {

  isViacepAddressLookupError = true

  sdk = 'ViacepAddressLookup'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ViacepAddressLookupError
}

