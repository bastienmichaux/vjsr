var gulp = require('gulp');
var babel = require("gulp-babel");
var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src('build/**/*')
    .pipe(babel())
    .pipe(gulp.dest('./bundle'));
    /*
    gulp.src([
      'build/constants/*.js',
      'build/lib/*.js',
      'build/services/*.js',
      'build/views/*.js',
      'build/main/*.js'
    ])
    */
    //.pipe(concat('bundle.js'))
});
