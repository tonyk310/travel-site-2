var gulp 			= require('gulp');
var postCSS 		= require('gulp-postcss');
var autoprefixer 	= require('autoprefixer');
var cssvars 		= require('postcss-simple-vars');
var nested 			= require('postcss-nested');
var cssImport 		= require('postcss-import');
var mixins			= require('postcss-mixins');

gulp.task('styles', function(){
	
	console.log("***GULP TASK STYLES ACTIVATED***");

	// set up 
	// source is the css file that we are watching
	// return so gulp is aware of when this funciton completes
	return gulp.src('./app/assets/styles/styles.css')

		// need to require in postCSS
			// neet to require autoprefixer
		// postCSS is expecting an array
		.pipe(postCSS([cssImport, mixins, cssvars, nested, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		// within the pipe we can change whatever we want
		.pipe(
			gulp.dest('./app/temp/styles')
		);

});