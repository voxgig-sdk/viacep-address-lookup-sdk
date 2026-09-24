
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ViacepAddressLookupSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ViacepAddressLookupSDK.test()
    equal(testsdk instanceof ViacepAddressLookupSDK, true,
      'ViacepAddressLookupSDK.test() must return a client synchronously')
  })

})
