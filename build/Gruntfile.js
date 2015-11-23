module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
                dynamic: {
                    files: [{
                        expand: true,
                        cwd: 'img/dev/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'img/'
                    }]
                }
            },
        watch: { 
                options: 
                        { 
                            livereload: true, 
                        },
                css: {
                    files: ['less/*.less'],
                    tasks: ['less'],
                    options: {
                        spawn: false,
                            }
                    },
                img: {
                    files: ['img/dev/*'],
                    tasks: ['imagemin'],
                    options: {
                        spawn: false,
                            }                    
                },
                html: {
                    files: ['*.html'],
                    tasks: ['watch'],
                    options: {
                        spawn: false,
                            }
                }
                },
        less: {
            dist: {

                files: {
                    'css/styles.css': 'less/global.less'
                }
            }
        }  
    });


    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less','watch']);

};