'use strict';

var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('validate', function() {
  return run('swagger validate swagger-spec/swagger.yaml').exec()
  .on('error', log);
});

gulp.task('bundle', ['validate'], function() {
  return run('swagger bundle -r -o swagger.json swagger-spec/swagger.yaml').exec();
});

gulp.task('connect', ['bundle'], function() {
  return run('http-server -p 8080').exec();
});

function log(error) {
  console.error(error.toString && error.toString());
}

gulp.task('default', ['bundle']);
gulp.task('serve', ['connect']);
