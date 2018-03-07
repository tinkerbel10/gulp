var gulp =  require('gulp'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css')
    uglify = require('gulp-uglify')
    sass = require('gulp-sass');


gulp.task('minify-css', function(){
  gulp.src('./style/*')
  .pipe(minifyCss())
  .pipe(concat('concat.min.css'))
  .pipe(gulp.dest('./build'));
});

gulp.task('minify-js', function(){
  gulp.src('./js/*')
  .pipe(uglify())
  .pipe(concat('concat.min.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('minify-sass', function(){
  gulp.src('./sass/main.scss')
  .pipe(sass())
  .pipe(concat('main-sass.min.css'))
  .pipe(gulp.dest('./build'));
});

gulp.task('default', ['minify-css','minify-js', 'minify-sass']);

gulp.task('watch',function(){
  gulp.watch('./style/*',['minify-css'])
  gulp.watch('./js/*',['minify-js'])
  gulp.watch('./sass/**/*.scss',['minify-sass'])
});
