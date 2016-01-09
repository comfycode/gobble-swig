# gobble-swig

Compile [swig](http://paularmstrong.github.io/swig/) templates with gobble.

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-swig
```

## Usage

**gobblefile.js**

```js
var gobble = require('gobble')
module.exports = gobble('templates').transform('swig', {cache: false})
```

See the [swig options](http://paularmstrong.github.io/swig/docs/api/#SwigOpts) for details.

## License

MIT
