var gulp = require('gulp'),
	sass = require('gulp-sass');
	
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});

//Watch task
gulp.task('default', function() {
    gulp.watch('sass/**/*.scss',['styles']);
});