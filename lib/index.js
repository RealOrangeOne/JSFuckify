var transformTools = require('browserify-transform-tools');
var transformer = require('./transformer');

var OPTIONS = {
  excludeExtensions: ['.json']
};

module.exports = transformTools.makeStringTransform('jsfuckify', OPTIONS, function (content, transformOptions, done) {
  var newContent = transformer(content, transformOptions.config);
  done(null, newContent);
});
