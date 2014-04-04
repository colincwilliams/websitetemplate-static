module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
	jekyll: {
		options: {
			src: './_src',
			config: './_config.yml',
			layouts: './_src/_layouts',
			drafts: './_src/_drafts',
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

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('publish', ['jekyll:prod','sass:prod'])
  grunt.registerTask('build', ['jekyll:dev','sass:dev'])
  grunt.registerTask('serve', ['build','watch']);
  grunt.registerTask('default', ['build']);
}