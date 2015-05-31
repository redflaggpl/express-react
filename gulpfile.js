/* jshint camelcase: false */

'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    clean = require('gulp-clean'),
    nodemon = require('gulp-nodemon'),
    taskListing = require('gulp-task-listing');

var paths = {
  stylesDist: './assets/less/app.less',
  stylesDest: './public/stylesheets'
};

gulp.task('clean:css', function () {
  return gulp.src(paths.stylesDest + '/*.css')
    .pipe(clean({force: true}));
});

gulp.task('clean', ['clean:css']);

gulp.task('less', function () {
  return gulp.src(paths.stylesDist)
    .pipe(less())
    .pipe(gulp.dest(paths.stylesDest));
});

gulp.task('watch', ['clean', 'less']);

gulp.task('server', function () {
  nodemon({
    script: './bin/www',
    env: { 'DEBUG': 'reconsole-webclient' },
    watch: __dirname,
    ignore: ['./bower_components/*', './node_modules/*', './public/*'],
    ext: 'js jsx html less',
    tasks: ['watch']
  })
  .on('restart', function(){
    console.log("Fuck!!");
  })
  .on('config:update', function () {
    // Delay before server listens on port
    setTimeout(function() {
      require('open')('http://localhost:3000');
    }, 2000);
  });
});

gulp.task('default', ['watch', 'server']);

gulp.task('help', taskListing);
