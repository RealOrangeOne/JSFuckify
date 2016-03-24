var jscrewit = require('jscrewit');
var DEFAULT_OPTIONS = require('./default-options');

module.exports = function transformer(content, options) {
  options = options || DEFAULT_OPTIONS;
  return jscrewit.encode(content, options);
};
