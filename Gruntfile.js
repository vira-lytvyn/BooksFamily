'use strict';

module.exports = function (grunt) {
  var localConfig;
  try {
    localConfig = require('./server/config/local.env');
  } catch(e) {
    localConfig = {};
  }

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    pkg: grunt.file.readJSON('package.json'),
    booksFamily: {
      // configurable paths
      client: require('./bower.json').appPath || 'client',
      dist: 'dist'
    },
  });

  grunt.registerTask('default', []);
};
