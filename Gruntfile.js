/*
 * grunt-fileslist
 * https://github.com/omryn/grunt-fileslist
 *
 * Copyright (c) 2013 Omry Nachman
 * Licensed under the MIT license.
 */

'use strict';
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'test/javascript/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc.json'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['target']
        },

        // Configuration to be run (and then tested).
        fileslist: {
            test: {
                dest: 'target/result.xml',
                includes: ['**/*.js', '!**/~*'],
                base: 'test/resources',
                itemTemplate: '\t\t<entry>' +
                    '\n\t\t\t<key>skin.<%= Class %></key>' +
                    '\n\t\t\t<value><%= Package %>.<%= Class %></value>' +
                    '\n\t\t</entry>',
                itemSeparator: '\n',
                listTemplate: '<hashtableWrapper>' +
                    '\n\t<hashtable>\n<%= items %>\n\t</hashtable>' +
                    '\n</hashtableWrapper>'
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');


    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'clean', 'fileslist']);

};
