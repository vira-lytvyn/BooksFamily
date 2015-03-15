
'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);


  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    booksFamily: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= booksFamily.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:custom', 'concat', 'uglify'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      style: {
        files: ['<%= booksFamily.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['newer:copy:styles', 'sass']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= booksFamily.app %>/{,*/}*.html',
          '<%= booksFamily.dist %>/styles/{,*/}*.css',
          '<%= booksFamily.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= booksFamily.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= booksFamily.app %>/scripts/{,*/}*.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= booksFamily.dist %>/{,*/}*',
            '!<%= booksFamily.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= booksFamily.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['<%= booksFamily.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS 
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          '<%= booksFamily.dist %>/styles': '<%= booksFamily.app %>/styles'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          '<%= booksFamily.dist %>/scripts/scripts.js': [
            '<%= booksFamily.dist %>/scripts/scripts.js'
          ]
        }
      }
    },
    
    concat: {
      dist: {}
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= booksFamily.app %>',
          dest: '<%= booksFamily.dist %>',
          src: [
            '*.{ico,png,txt}',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/{,*/}*.*'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= booksFamily.app %>/styles',
        dest: '<%= booksFamily.dist %>/styles/',
        src: '{,*/}*.css'
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'copy',
      'sass',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'sass',
    'concat',
    'copy:dist',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'build'
  ]);
};
