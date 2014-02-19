/*

*/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

/*
gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  gulp.src(['client/js/** /*.js', '!client/js/vendor/**']) //NOTE I've added a space to the glob for commenting purposes
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));

  // Copy vendor files
  gulp.src('client/js/vendor/**')
    .pipe(gulp.dest('build/js/vendor'));
});

// Copy all static assets
gulp.task('copy', function() {
  gulp.src('client/img/**')
    .pipe(gulp.dest('build/img'));

  gulp.src('client/css/**')
    .pipe(gulp.dest('build/css'));

  gulp.src('client/*.html')
    .pipe(gulp.dest('build'));
});
s
*/

// Compile sass files
gulp.task('sass', function () {
    gulp.src('_/sass/_main.scss')
      .pipe(sass({ includePaths : ['_/sass/'] }))
      .pipe(gulp.dest(''));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  //gulp.run('scripts', 'copy');
  gulp.run('sass');

  // Watch files and run tasks if they change

  gulp.watch(['./_/sass/_main.scss'], function() {
    gulp.run('sass');
  })
});