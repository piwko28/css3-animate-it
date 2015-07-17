module.exports = function(grunt) {
	grunt.initConfig({
		less : {
			main : {
				options : {
					compress : false
				},
				files : {
					"css/animations.css" : "less/animations.less"
				}
			}
		},
		cssmin : {
			options : {
				shorthandCompacting: false,
    		roundingPrecision: -1,
    		advanced : false,
    		keepBreaks : true,
    		keepSpecialComments : '*'
			},
			main : {
				files : {
					'css/animations.min.css' : [
						'css/animations.css'
					]
				}
			}
		},
		concat : {
			options : {
				separator : ';'
			},
			plugin : {
				src : [
					'js/plugin/**/*.js'
				],
				dest : 'js/css3-animate-it.js'
			}
		},
		uglify : {
			plugin : {
				files : {
					'js/css3-animate-it.min.js' : ['<%= concat.plugin.dest %>']
				}
			}
		},
		jshint : {
			options : {
				globals : {
					jQuery : true,
					reporter : require('jshint-stylish')
				}
			},
			plugin : ['<%= concat.plugin.src %>']
		},
		watch : {
			less : {
				files : [
					'less/**/*.less'
				],
				tasks : ['watch_less']
			},
			plugin_js : {
				files : [
					'js/plugin/**/*.js'
				],
				tasks : ['watch_plugin_js']
			}
		}
	});

	/* LOAD EXTERNAL TASKS (PLUGINS) */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	/* TASKS */
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('watch_less', ['less:main', 'cssmin:main']);
	grunt.registerTask('watch_plugin_js', ['jshint:plugin', 'concat:plugin', 'uglify:plugin']);
};