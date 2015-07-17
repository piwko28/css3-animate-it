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
		watch : {
			less : {
				files : [
					'less/**/*.less'
				],
				tasks : ['watch_less']
			}
		}
	});

	/* LOAD EXTERNAL TASKS (PLUGINS) */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	/* TASKS */
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('watch_less', ['less:main', 'cssmin:main']);
};