const jscrewit = require('jscrewit');
const DEFAULT_OPTIONS = require('./default-options');

module.exports = function transformer(content) {
  return jscrewit.encode(content, DEFAULT_OPTIONS);
};
