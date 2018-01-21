'use strict'

const assert = require('assert')
const trimCall = require('.')

describe('trimCall()', function () {
  it('should remove undefined arguments from the end of a function call', function (done) {
    function f () {
      assert.strictEqual(arguments.length, 1)
      assert.strictEqual(arguments[0], 'test')
      done()
    }
    trimCall(f, null, 'test', undefined) // eslint-disable-line no-undefined
  })

  it('should apply no arguments to a function if all arguments are undefined', function (done) {
    function f () {
      assert.strictEqual(arguments.length, 0)
      done()
    }
    trimCall(f, null, undefined) // eslint-disable-line no-undefined
  })
})
