module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
                main: {
                    expand: true,
                    src: 'app/*.html',
                    dest: 'production/',
                    flatten: true
                }
            },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'production/css/style.css': 'app/scss/style.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['app/*.html'],
                tasks: ['copy:main']
            },
            style: {
                files: ['app/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load the plugins that provides the tasks.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks.
    grunt.registerTask('default', ['copy', 'sass']);
};