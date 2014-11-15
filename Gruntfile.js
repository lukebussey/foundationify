'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var config = {
        app: '.',
        dist: 'dist'
    };

    grunt.initConfig({
        config: config,
        watch: {
            compass: {
                files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:live']
            },
            css: {
                files: ['.tmp/styles/*.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['<%= config.app %>/scripts/*.js'],
                tasks: ['concat:live']
            },
            update: {
                files: ['<%= config.app %>/{layout,snippets,templates}/*.liquid'],
                tasks: ['sync']
            },
            config: {
                files: ['<%= config.app %>/config/*.{html,json}'],
                tasks: ['sync']
            }
        },
        clean: {
            dist: [
                '.tmp',
                '<%= config.dist %>/*'
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/{,*/}*.js'
            ]
        },
        compass: {
            options: {
                sassDir: '<%= config.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= config.app %>/assets',
                javascriptsDir: '<%= config.app %>/scripts',
                fontsDir: '<%= config.app %>/assets',
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
                    '<%= config.dist %>/assets/custom.modernizr.js': [
                        '<%= config.app %>/components/foundation/js/vendor/custom.modernizr.js'
                    ],
                    '<%= config.dist %>/assets/main.js': [
                        '<%= config.app %>/components/foundation/js/vendor/jquery.js',
                        '<%= config.app %>/components/foundation/js/foundation/foundation.js',
                        '<%= config.app %>/components/foundation/js/foundation/foundation.*.js',
                        '<%= config.app %>/scripts/{,*/}*.js'
                    ],
                }
            },
        },
        concat: {
            live: {
                files: {
                    '<%= config.dist %>/assets/custom.modernizr.js': [
                        '<%= config.app %>/components/foundation/js/vendor/custom.modernizr.js'
                    ],
                    '<%= config.dist %>/assets/main.js': [
                        '<%= config.app %>/components/foundation/js/vendor/jquery.js',
                        '<%= config.app %>/components/foundation/js/foundation/foundation.js',
                        '<%= config.app %>/components/foundation/js/foundation/foundation.*.js',
                        '<%= config.app %>/scripts/{,*/}*.js'
                    ],
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/assets',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>/assets'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= config.dist %>/assets/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= config.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        sync: {
            main: {
                files: [{
                    cwd: '<%= config.app %>',
                    src: [
                        'assets/*',
                        'config/*',
                        'layout/*',
                        'snippets/*',
                        'templates/*',
                    ],
                    dest: '<%= config.dist %>',
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        'assets/*',
                        'config/*',
                        'layout/*',
                        'snippets/*',
                        'templates/*',
                    ]
                },{
                    expand: true,
                    cwd: '<%= config.app %>/components/font-awesome/font',
                    dest: '<%= config.dist %>/assets',
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
