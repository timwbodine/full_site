module.exports = function(grunt) { 
  grunt.initConfig({
    watch: {
      sass: {
        files: '**/*.sass',
        tasks: ['sass'],
        options: {
        livereload: 35729
        }
      },
      bake: {
        files: ["**/includes/*.html"],
        tasks: "bake:build"
      },
			      all: { files: ['**/*.html'], options: { livereload: true } }

    },
		
    sass: { dev: { files: { 'css/main.css':'sass/main.sass' } } },

    bake: {
      build: {
        files: {
        "index.html" : "html/base.html"
        }
      }
    }

  });
	grunt.loadNpmTasks('grunt-bake')
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
