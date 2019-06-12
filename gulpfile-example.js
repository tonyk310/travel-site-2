// first we watnt to import that gulp package into this file
var gulp = require('gulp');
// run gulp in cli agian 
// Task 'default' is not in your gulpfile
// everything in gulp revolves around tasks
// gulp.task();
// we are going to pass it 2 arguments
// first is the name of the task
// second is the function
gulp.task('default', function(){
	console.log("GULP TASK ACTIVATED!");
});
// to run the 'default' task just type gulp
// but you can run specific gulp tasks by typing 'gulp name'
gulp.task('html', function(){
	console.log("HTML!!!!!!!");
});

gulp.task('styles', function(){
	console.log("***GULP TASK STYLES ACTIVATED***");
});

// ==========GULP WATCH=================
var watch = require('gulp-watch');
// creat a new task and name it watch
gulp.task('watch', function(){

	// pass it 2 arguments
	// first is the file that we want it to watch
	// second it a function
	// so whenever we trigger a change/save to this file we want it to trigger
	// gulp.task 'html' by typing gulp.start

	// FIRST WATCH TASK

	watch('./app/index.html', function(){
		gulp.start('html');
	});
	// gulp 'watch' doesnt end until you stop it and runs siletly in background


	// SECOND WATCH TASK
		// ** any other folders
		// *.css any files with a css extension
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start();
	});
});