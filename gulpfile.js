/* jshint camelcase: false */

'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    clean = require('gulp-clean'),
    nodemon = require('gulp-nodemon'),
    taskListing = require('gulp-task-listing'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename');

var paths = {
  stylesDist: './assets/less/app.less',
  stylesDest: './public/stylesheets',
  scriptsDist: './reactComponents/app.jsx',
  scriptsDest: './public/javascripts/'
};

gulp.task('clean:css', function () {
  return gulp.src(paths.stylesDest + '/*.css')
    .pipe(clean({force: true}));
});

gulp.task('clean:js', function () {
  return gulp.src(paths.scriptsDest)
    .pipe(clean({force: true}));
});

gulp.task('clean', ['clean:css', 'clean:js']);

gulp.task('less', ['clean:css'], function () {
  return gulp.src(paths.stylesDist)
    .pipe(less())
    .pipe(gulp.dest(paths.stylesDest));
});

gulp.task('scripts', ['clean:js'], function() {
  gulp.src(paths.scriptsDist)
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest(paths.scriptsDest));
});

gulp.task('watch', ['less', 'scripts']);

gulp.task('server', function () {
  nodemon({
    script: './bin/www',
    env: { 'DEBUG': 'reconsole-webclient' },
    watch: __dirname,
    ignore: ['./bower_components/*', './node_modules/*', './public/*'],
    ext: 'js jsx html less'
  })
  .on('restart', 'watch')
  .on('config:update', function () {
    // Delay before server listens on port
    setTimeout(function() {
      require('open')('http://localhost:3000');
    }, 1000);
  });
});

gulp.task('default', ['watch', 'server']);

gulp.task('help', taskListing);
