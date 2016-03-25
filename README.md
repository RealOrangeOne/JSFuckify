# JSFuckify [![Circle CI](https://circleci.com/gh/RealOrangeOne/JSFuckify.svg?style=svg)](https://circleci.com/gh/RealOrangeOne/JSFuckify)

Browserify transformer and CLI to convert normal JS into JSFuck

## Installation
Installation can be done using [npm](https://www.npmjs.com/package/jsfuckify).

    npm install jsfuckify --save


## Usage
#### With Browserify

    browserify <input> -o <output> -t jsfuckify

#### CLI
CLI Support coming soon!

## How it works
This transform uses the [jscrewit](https://github.com/fasttime/JScrewIt) module to do the conversion, and adds minimal overhead to keep the build time fast!

## What is JSFuck?
JSFuck is an esoteric and educational programming style based on the atomic parts of JavaScript. It uses only six different characters to write and execute code. It does not depend on a browser, so you can even run it on Node.js.

More info can be found [here](http://www.jsfuck.com/).
