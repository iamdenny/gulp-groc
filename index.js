var through = require("through2"),
	gutil = require("gulp-util"),
    _    = require('lodash');

module.exports = function (param) {
	"use strict";

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function groc(file, enc, cb) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {
			this.emit("error",
				new gutil.PluginError("gulp-groc", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {
            var groc = require('groc').CLI;
            groc(mergeArgs(file.path, param), function(err) {
                if(err) {
                    this.emit('error', new gutil.PluginError('gulp-<%= pluginName %>', err));
                }
                this.push(file);
                cb();
            }.bind(this));

		}

	}

    /**
     * merge Args
     * @param filePath
     * @param parameter
     * @returns {*}
     */
    function mergeArgs (filePath, parameter) {
        return _.flatten([filePath].concat(parseOption(parameter)));
    }

    /**
     * parseOption
     * @param options
     * @returns {Array}
     */
    function parseOption (options) {
        var args = [];
        _.each(options, function(value, key) {
            // Convert the key to a switch
            var sw = (key.length > 1 ? '--' : '-') + key;
            // Add the switch and its value
            // If the value is an array, add all array elements to the array.
            if(!_.isArray(value)) {
                value = [value];
            }

            _.each(value, function(value) {
                args.push([sw, value.toString()]);
            });
        });
        return args;
    }

	return through.obj(groc);
};
