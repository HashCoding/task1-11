var gulp = require('gulp');

var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var del = require('del');


gulp.task('sass', function() {
    return gulp.src('./app/components/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('clean', function(callback) {
    del(['./build/'], callback)
});

gulp.task('default', function(){
    gulp.run('sass', 'clean');

    gulp.watch('./app/components/**/*.scss', function(){
        gulp.run('sass', 'clean');
    });
});