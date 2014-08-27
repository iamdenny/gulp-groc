# gulp-groc
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]](https://coveralls.io/r/iamdenny/gulp-groc?branch=master) [![Dependency Status][depstat-image]][depstat-url]
[![Livereload downloads](http://img.shields.io/npm/dm/gulp-groc.svg?style=flat)](https://www.npmjs.org/package/gulp-groc) [![MIT Licensed](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](#license)

> groc plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-groc` as a development dependency:

```shell
npm install --save-dev gulp-groc
```

Then, add it to your `gulpfile.js`:

```javascript
var groc = require("gulp-groc");

gulp.src("./src/*.ext")
	.pipe(groc({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### groc(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-groc
[npm-image]: https://badge.fury.io/js/gulp-groc.png

[travis-url]: http://travis-ci.org/iamdenny/gulp-groc
[travis-image]: https://secure.travis-ci.org/iamdenny/gulp-groc.png?branch=master

[coveralls-url]: https://coveralls.io/r/iamdenny/gulp-groc
[coveralls-image]: https://coveralls.io/repos/iamdenny/gulp-groc/badge.png

[depstat-url]: https://david-dm.org/iamdenny/gulp-groc
[depstat-image]: https://david-dm.org/iamdenny/gulp-groc.png
