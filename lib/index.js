const transformTools = require('browserify-transform-tools');
const transformer = require('./transformer');

const OPTIONS = {
  excludeExtensions: ['.json']
};

module.exports = transformTools.makeStringTransform('jsfuckify', OPTIONS, function (content, transformOptions, done) {
  let newContent = transformer(content, transformOptions.config);
  done(null, newContent);
});
