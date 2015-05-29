/* jshint camelcase: false */

'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    clean = require('gulp-clean'),
    react = require('gulp-react'),
    nodemon = require('gulp-nodemon'),
    taskListing = require('gulp-task-listing');

var paths = {
  stylesDist: './assets/less/app.less',
  stylesDest: './public/stylesheets',
  scriptsDist: './assets/jsx/*.jsx',
  scriptsDest: './public/javascripts'
};

gulp.task('clean:js', function () {
  return gulp.src(paths.scriptsDest + '/*.js')
    .pipe(clean({force: true}));
});

gulp.task('clean:css', function () {
  return gulp.src(paths.stylesDest + '/*.css')
    .pipe(clean({force: true}));
});

gulp.task('clean', ['clean:js', 'clean:css']);

gulp.task('less', function () {
  return gulp.src(paths.stylesDist)
    .pipe(less())
    .pipe(gulp.dest(paths.stylesDest));
});

gulp.task('react', function () {
  return gulp.src(paths.scriptsDist)
    .pipe(react())
    .pipe(gulp.dest(paths.scriptsDest));
});

gulp.task('watch', ['clean', 'less', 'react']);

gulp.task('default', ['watch'], function () {
  nodemon({
    script: './bin/www',
    env: { 'DEBUG': 'reconsole-webclient' },
    watch: __dirname,
    ignore: ['./bower_components/*', './node_modules/*', './public/*'],
    ext: 'js jsx html less',
  })
  .on('restart', 'watch')
  .on('config:update', function () {
    // Delay before server listens on port
    setTimeout(function() {
      require('open')('http://localhost:3000');
    }, 2000);
  });
});

gulp.task('help', taskListing);
