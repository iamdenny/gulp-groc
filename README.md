# gulp-groc
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][overalls-image]][overalls-url] [![Dependency Status][depstat-image]][depstat-url]
[![Livereload downloads][npm-download-image]][npm-download-url] [![MIT Licensed][license-image]](#license)

> groc plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-groc` as a development dependency:

```shell
npm install --save-dev gulp-groc
```

Then, add it to your `gulpfile.js`:

```javascript
var gulp = require('gulp'),
    groc = require("gulp-groc"),
    clean = require('gulp-clean');

// clean doc
gulp.task('cleanDoc', function () {
    return gulp
        .src([ 'jsdoc' ], {
            read: false
        })
        .pipe(clean());
});

gulp.task('doc', [ 'cleanDoc' ], function () {
    return gulp
        .src("./src/scripts/**/*.js")
        .pipe(groc({
            out: 'jsdoc'
        }))
        .pipe(notify({
            message: 'groc task complte'
        }));
});
```

## API

### groc(options)

#### options
Type: `Object`
Default: `{}`

There are [options](http://nevir.github.com/groc/cli.html#cli-options) supported by
groc, if you are interested.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-groc
[npm-image]: https://badge.fury.io/js/gulp-groc.png

[travis-url]: http://travis-ci.org/iamdenny/gulp-groc
[travis-image]: https://secure.travis-ci.org/iamdenny/gulp-groc.png?branch=master

[coveralls-url]: https://coveralls.io/r/iamdenny/gulp-groc?branch=master
[coveralls-image]: https://img.shields.io/coveralls/iamdenny/gulp-groc.svg

[depstat-url]: https://david-dm.org/iamdenny/gulp-groc
[depstat-image]: https://david-dm.org/iamdenny/gulp-groc.png

[npm-download-url]: https://www.npmjs.org/package/gulp-groc
[npm-download-image]: http://img.shields.io/npm/dm/gulp-groc.svg?style=flat

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat