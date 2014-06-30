var changed    = require('gulp-changed');
var gulp       = require('gulp');

gulp.task('html', function() {

    var dest = './www';

    // This one does nothing except moving the html file from src to www
	return gulp.src('./src/index.html')
		.pipe(changed(dest))
		.pipe(gulp.dest(dest));
});
