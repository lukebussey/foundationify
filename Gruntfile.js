'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: '.',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:live']
            },
            css: {
                files: ['.tmp/styles/*.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['<%= yeoman.app %>/scripts/*.js'],
                tasks: ['concat:live']
            },
            update: {
                files: ['<%= yeoman.app %>/{layout,snippets,templates}/*.liquid'],
                tasks: ['sync']
            },
            config: {
                files: ['<%= yeoman.app %>/config/*.{html,json}'],
                tasks: ['sync']
            }
        },
        clean: {
            dist: [
                '.tmp',
                '<%= yeoman.dist %>/*'
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js'
            ]
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/assets',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/assets',
                importPath: 'components',
                relativeAssets: true
            },
            dist: {},
            live: {
                options: {
                    debugInfo: true
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/assets/custom.modernizr.js': [
                        '<%= yeoman.app %>/components/foundation/js/vendor/custom.modernizr.js'
                    ],
                    '<%= yeoman.dist %>/assets/main.js': [
                        '<%= yeoman.app %>/components/foundation/js/vendor/jquery.js',
                        '<%= yeoman.app %>/components/foundation/js/foundation/foundation.js',
                        '<%= yeoman.app %>/components/foundation/js/foundation/foundation.*.js',
                        '<%= yeoman.app %>/scripts/{,*/}*.js'
                    ],
                }
            },
        },
        concat: {
            live: {
                files: {
                    '<%= yeoman.dist %>/assets/custom.modernizr.js': [
                        '<%= yeoman.app %>/components/foundation/js/vendor/custom.modernizr.js'
                    ],
                    '<%= yeoman.dist %>/assets/main.js': [
                        '<%= yeoman.app %>/components/foundation/js/vendor/jquery.js',
                        '<%= yeoman.app %>/components/foundation/js/foundation/foundation.js',
                        '<%= yeoman.app %>/components/foundation/js/foundation/foundation.*.js',
                        '<%= yeoman.app %>/scripts/{,*/}*.js'
                    ],
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/assets'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/assets/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        sync: {
            main: {
                files: [{
                    cwd: '<%= yeoman.app %>',
                    src: [
                        'assets/*',
                        'config/*',
                        'layout/*',
                        'snippets/*',
                        'templates/*',
                    ],
                    dest: '<%= yeoman.dist %>',
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'assets/*',
                        'config/*',
                        'layout/*',
                        'snippets/*',
                        'templates/*',
                    ]
                },{
                    expand: true,
                    cwd: '<%= yeoman.app %>/components/font-awesome/font',
                    dest: '<%= yeoman.dist %>/assets',
                    src: [
                        '*'
                    ]
                }]
            },
        }
    });

    grunt.registerTask('live', [
        'clean:dist',
        'compass:live',
        'cssmin',
        'concat:live',
        'copy',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'compass:dist',
        'cssmin',
        'imagemin',
        'uglify',
        'copy'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'build'
    ]);
};
