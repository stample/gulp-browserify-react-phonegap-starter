var gulp = require('gulp');
var recess = require('gulp-recess');
var less = require('gulp-less');

gulp.task('styles', function () {
    return gulp.src('./src/css/app.less')
        // .pipe(recess())
        .pipe(less())
        .pipe(gulp.dest('./www'));
});