var gulp = require('gulp');
var recess = require('gulp-recess');
var less = require('gulp-less');
var handleErrors = require('../util/handleErrors');


gulp.task('styles', function () {

    return gulp.src('./src/css/app.less')
        .pipe(recess())
        .on('error', handleErrors) // TODO maybe we should still compile less files even if Recess is not happy
        .pipe(less())
        .on('error', handleErrors)
        .pipe(gulp.dest('./www'));

});