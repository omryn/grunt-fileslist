"use strict";
module.exports = function (grunt) {
    grunt.registerMultiTask('fileslist', function () {
            var data = this.data;

            data.listTemplate = grunt.config.getRaw(this.name + '.' + this.target + '.listTemplate');
            data.itemTemplate = grunt.config.getRaw(this.name + '.' + this.target + '.itemTemplate');
            data.itemSeparator = grunt.config.getRaw(this.name + '.' + this.target + '.itemSeparator');

            function renderFile(file, index, array) {
                var fileBreakDown = file.split('/');
                var Class = fileBreakDown.pop().replace(/.js$/i, '');
                var Package = fileBreakDown.join('.');
                print(grunt.template.process(itemTemplate, {data: {File: file, Package: Package, Class: Class}}));
                if (index !== array.length - 1) {
                    print(itemSeparator);
                }
            }

            function unixPath(path) {
                return path.replace(/\\/g, "/");
            }

            var DEFAULT_LIST_TEMPLATE = '<%= items %>';
            var RENDER_ITEMS = '<% files.sort().forEach(' + renderFile.toString() + ') %>';
            var DEFAULT_ITEM_TEMPLATE = '<%= File %>';
            var DEFAULT_ITEM_SEPARATOR = "\n";

            var expandOptions = {
                filter: 'isFile'
            };
            if (data.base) {
                expandOptions.cwd = data.base;
            }
            var model = {
                files: grunt.file.expand(expandOptions, data.includes).map(unixPath).sort(),
                listTemplate: data.listTemplate || DEFAULT_LIST_TEMPLATE,
                itemTemplate: data.itemTemplate || DEFAULT_ITEM_TEMPLATE,
                itemSeparator: data.itemSeparator || DEFAULT_ITEM_SEPARATOR,
                items: RENDER_ITEMS
            };

            var list = grunt.template.process('<%= listTemplate %>', {data: model});
            grunt.file.write(data.dest, list);
        }
    );
};