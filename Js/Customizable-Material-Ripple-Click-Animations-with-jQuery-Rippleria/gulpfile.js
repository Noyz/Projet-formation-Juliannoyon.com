var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

gulp.task('mincss', function() {
  return gulp.src(['jquery.rippleria.css'])
    .pipe(minifycss())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minjs', function() {
  return gulp.src(['jquery.rippleria.js'])
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src(['dist/**/.*'], {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean', 'mincss', 'minjs'], function() {

});
