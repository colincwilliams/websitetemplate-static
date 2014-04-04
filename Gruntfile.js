module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
	jekyll: {
		options: {
			src: './_src',
			config: './_config.yml',
			layouts: './_src/_layouts',
			drafts: './_src/_drafts'
		},
		prod: {
			options: {
				dest: './_public'
			}
		},
		dev: {
			options: {
				dest: './_dev',
				drafts: true,
				future: true
			}
		}
	},
	
	concat: {
	  options: {
	    separator: ';'
	  },
	  prod: {
	    src: ['_src/js/**/*.js'],
	    dest: '_public/js/<%= pkg.name %>.js'
	  },
      dev: {
  	    src: ['_src/js/**/*.js'],
  	    dest: '_dev/js/<%= pkg.name %>.js'
      },
      test: {
  	    src: ['_src/js/**/*.js'],
  	    dest: 'libs/latest.js'
      }
	},
	
	uglify: {
	  options: {
	    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
	  },
	  prod: {
	    files: {
	      '_public/js/<%= pkg.name %>.min.js': ['<%= concat.prod.dest %>']
	    }
	  },
	  dev: {
	    files: {
	      '_dev/js/<%= pkg.name %>.min.js': ['<%= concat.dev.dest %>']
	    }
	  },
	  test: {
	    files: {
	      'libs/latest.min.js': ['<%= concat.test.dest %>']
	    }
	  }
	},
	
	qunit: {
	  files: ['test/**/*.html']
	},
	
	jshint: {
	  files: ['Gruntfile.js', '_src/**/*.js', 'test/**/*.js'],
	  options: {
	    // options here to override JSHint defaults
	    globals: {
	      jQuery: true,
	      console: true,
	      module: true,
	      document: true
	    }
	  }
	},

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss'],
		imagePath: '/images',
      },
      prod: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          './_public/css/app.css': './_src/scss/app.scss'
        }        
      },
	  dev: {
		  options: {
			  outputStyle: 'nested',
			  sourceComments: 'normal'
		  },
		  files: {
			  './_dev/css/app.css': './_src/scss/app.scss'
		  }
	  },
	  test: {
		  options: {
			  outputStyle: 'nested',
			  sourceComments: 'normal'
		  },
		  files: {
			  './libs/latest/latest.css': './_src/scss/app.scss'
		  }
	  }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint','concat:test','uglify:test','sass:test','qunit']);
  grunt.registerTask('publish', ['test','jekyll:prod','concat:prod','uglify:prod','sass:prod']);
  grunt.registerTask('build', ['test','jekyll:dev','concat:dev','uglify:dev','sass:dev']);
  grunt.registerTask('serve', ['build','watch']);
  grunt.registerTask('default', ['build']);
};