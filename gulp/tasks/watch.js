var gulp 			= require('gulp');
var watch 			= require('gulp-watch');

var browserSync		= require('browser-sync').create();


gulp.task('watch', function(){

	browserSync.init({
		server: {
			baseDir: "app"
		}
	});

	// FIRST WATCH TASK

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	// SECOND WATCH TASK
		// ** any other folders
		// *.css any files with a css extension
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function () {
		gulp.start('scriptsRefresh');
	});
});


gulp.task('cssInject', ['styles'], function(){
	// point to stylesheet
	return gulp.src('./app/temp/styles/styles.css')
		// we want to pipe it into browserSync
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});





