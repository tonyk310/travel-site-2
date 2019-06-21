var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var usemin = require('gulp-usemin');
var del = require('del');

var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');

gulp.task('deleteDistFolder', function(){
	return del('./docs');
});

//copy image files and compress and move to dist folder
gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src(['./app/assets/images/**/*'])
		// compress
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		// send to destination
		.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('usemin', ['deleteDistFolder'], function(){
	return gulp.src('./app/index.html')
		.pipe(usemin({
			css: [ 
				function(){ return rev(); },
				function(){ return cssnano(); } 
			]
			// ,
			// js: [
			// 	function(){ return rev(); },
			// 	function(){ return uglify(); }
			// ]
		}))
		.pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);





