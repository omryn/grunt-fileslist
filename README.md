# grunt-fileslist

> Grunt plugin for files list creation using dot-lo templates, So you can create a custom VM,XML,JSON or whatever format you like, populated by the included files

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fileslist --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fileslist');
```

## The "fileslist" task

### Usage Examples
In your project's Gruntfile, add a section named `fileslist` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    fileslist: {
        myFilesList: {
                   dest: 'target/result.xml',
                   includes: ['**/*.js', '!**/~*'],
                   base: 'test/resources',
                   itemTemplate: '\t<entry>' +
                       '\n\t\t<file><%= File %></file>' +
                       '\n\t\t<class><%= Class %></class>' +
                       '\n\t\t<package><%= Package %>/package>' +
                       '\n\t</entry>',
                   itemSeparator: '\n',
                   listTemplate: '<filesList>' +
                       '\n\t<%= items %>\n' +
                       '\n</filesList>'
               }
  },
})
```
## Release History
_(Nothing yet)_
