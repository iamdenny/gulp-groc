var through = require("through2"),
	gutil = require("gulp-util"),
    _    = require('lodash');

/**
 * module.exports
 * @param {object} param http://nevir.github.io/groc/cli.html#cli-options
 * @returns {*}
 */
module.exports = function (param) {
	"use strict";

    var filesToGroc = [];

    /**
     * groc
     * @param file
     * @param enc
     * @param callback
     * @returns {*}
     */
	function groc(file, enc, callback) {

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
            filesToGroc.push(file.path);
            this.push(file);
            callback();
		}

	}

    /**
     * merge Args
     * @param files
     * @param parameter
     * @returns {*}
     */
    function mergeArgs (files, parameter) {
        return _.flatten(files.concat(parseOption(parameter)));
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

    /**
     * end stream
     */
    function endStream () {
        if (filesToGroc) {
            var groc = require('groc').CLI;
            groc(mergeArgs(filesToGroc, param), function(err) {
                if(err) {
                    this.emit('error', new gutil.PluginError('gulp-<%= pluginName %>', err));
                }
            }.bind(this));
        }
        this.emit('end');
    }

	return through.obj(groc, endStream);
};
