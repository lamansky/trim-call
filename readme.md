# trim-call

Drops undefined arguments from the end of a function call.

Useful if you’re forwarding arguments from one function to another, but the second function has behavior which is affected by the presence of an explicit `undefined` argument.

Accepts an arguments list, just like [`Function.prototype.call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call). If you want to provide an argument array instead, use the [`trim-apply`](https://github.com/lamansky/trim-apply) module.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm install trim-call --save
```

The module exports a single function.

## Usage Example

```javascript
const trimCall = require('trim-call')

f1('test')

function f1 (a, b) {
  trimCall(f2, this, a, b)
}

function f2 () {
  arguments.length // 1
}
```

Because of `trimCall()`, the `f2()` function only receives one argument.

Here is the above example repeated _without_ `trimCall()`:

```javascript
f1('test')

function f1 (a, b) {
  f2.call(this, a, b)
}

function f2 () {
  arguments.length // 2
}
```

Without `trimCall()`, the undefined `b` argument of `f1()` becomes an explicit second argument for `f2()`.
