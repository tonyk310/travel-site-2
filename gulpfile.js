require('./gulp/tasks/styles.js');
require('./gulp/tasks/watch.js');
require('./gulp/tasks/scripts.js');
require('./gulp/tasks/build.js');

// var gulp 			= require('gulp');
// var watch 			= require('gulp-watch');
// var postCSS 		= require('gulp-postcss');
// var autoprefixer 	= require('autoprefixer');
// var cssvars 		= require('postcss-simple-vars');
// var nested 			= require('postcss-nested');
// var cssImport 		= require('postcss-import');
// var browserSync		= require('browser-sync').create();

// gulp.task('default', function(){
// 	console.log("GULP TASK ACTIVATED!");
// });

// gulp.task('html', function(){
// 	console.log("********HTML!!!!!!!");
// });

// gulp.task('styles', function(){
	
// 	console.log("***GULP TASK STYLES ACTIVATED***");

// 	// set up 
// 	// source is the css file that we are watching
// 	// return so gulp is aware of when this funciton completes
// 	return gulp.src('./app/assets/styles/styles.css')

// 		// need to require in postCSS
// 			// neet to require autoprefixer
// 		// postCSS is expecting an array
// 		.pipe(postCSS([cssImport, cssvars, nested, autoprefixer]))
// 		// within the pipe we can change whatever we want
// 		.pipe(
// 			gulp.dest('./app/temp/styles')
// 		);

// });


// ==========GULP WATCH=================

// gulp.task('watch', function(){

// 	browserSync.init({
// 		server: {
// 			baseDir: "app"
// 		}
// 	});

// 	// FIRST WATCH TASK

// 	watch('./app/index.html', function(){
// 		browserSync.reload();
// 	});

// 	// SECOND WATCH TASK
// 		// ** any other folders
// 		// *.css any files with a css extension
// 	watch('./app/assets/styles/**/*.css', function(){
// 		gulp.start('cssInject');
// 	});
// });

// gulp.task('cssInject', ['styles'], function(){
// 	// point to stylesheet
// 	return gulp.src('./app/temp/styles/styles.css')
// 		// we want to pipe it into browserSync
// 		.pipe(browserSync.stream());
// });








