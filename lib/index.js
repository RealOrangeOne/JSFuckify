var transformTools = require('browserify-transform-tools');
var transformer = require('./transformer');

const OPTIONS = {
  excludeExtensions: ['.json']
};

module.exports = transformTools.makeStringTransform('jsfuckify', OPTIONS, function (content, transformOptions, done) {
  const newContent = transformer(content, transformOptions.config);
  done(null, newContent);
});
