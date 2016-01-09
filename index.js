var Swig = require('swig')

function swig(source, options) {
    options.filename = this.src
    return Swig.render(source, options)
}

swig.defaults = {
    accept: ['.swig', '.html'],
    ext: '.html'
}

module.exports = swig
