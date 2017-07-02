var gulp = require('gulp'),
        uglify = require('gulp-uglify');
        gulp.task('jsmin', function () {
        gulp.src('task1.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
        });