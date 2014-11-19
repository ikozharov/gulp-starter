var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;

gulp.task('sass', ['images'], function () {
  return gulp.src(config.src)
    .pipe(sass({
      bundleExec: true,
      // style: 'compressed',
      sourcemapPath: '../scss'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
