var gulp       = require('gulp');
var gutil = require('gulp-util');

gulp.task('watch', function() {

	gulp.watch('./src/js/**', ['browserify']);
	gulp.watch('./src/img/**', ['images']);
	gulp.watch('./src/css/**', ['styles']);
	gulp.watch('./src/index.html', ['html']);

    // TODO probably need to start an emulator like Ripple or something ?
    var onJsChange = function(file) {
        gutil.log("WWW change detected:",file.path);
    };
    gulp.watch(['./www/**']).on('change', onJsChange);

});
