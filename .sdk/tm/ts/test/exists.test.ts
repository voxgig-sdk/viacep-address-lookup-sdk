
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ViacepAddressLookupSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ViacepAddressLookupSDK.test()
    equal(null !== testsdk, true)
  })

})
