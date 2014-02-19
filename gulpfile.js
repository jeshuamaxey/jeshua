/*

*/
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// Compile sass files
gulp.task('sass', function () {
    gulp.src('_/sass/_main.scss')
      .pipe(sass({ includePaths : ['_/sass/'] }))
      .on('error', gutil.log)
      .pipe(gulp.dest(''));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  //gulp.run('scripts', 'copy');
  gulp.run('sass');

  // Watch files and run tasks if they change

  gulp.watch(['./_/sass/*'], function() {
    gulp.run('sass');
  })
});