'use strict';

var gulp = require('gulp');
var run = require('gulp-run');
var cachebust = require('gulp-cache-bust');

gulp.task('validate', function() {
  return run('swagger validate swagger-spec/swagger.yaml').exec()
  .on('error', log);
});

gulp.task('bundle', ['validate'], function() {
  return run('swagger bundle -r -o swagger.json swagger-spec/swagger.yaml').exec();
});

gulp.task('connect', ['cachebust'], function() {
  return run('http-server -p 8080').exec();
});

gulp.task('livereload', ['cachebust'], function() {
  return run('watch-http-server -p 8080').exec();
});

gulp.task('cachebust', ['bundle'], function() {
  gulp
    .src('./')
    .pipe(cachebust({type:'timestamp'}))
    .pipe(gulp.dest('./'))
});

function log(error) {
  console.error(error.toString && error.toString());
}

gulp.task('default', ['cachebust']);
gulp.task('watch', ['livereload']);
gulp.task('serve', ['connect']);
