const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

const distFiles = './lib';

/*
* SASS
* */
const sassFiles = './src/**/*.scss';
gulp.task('sass', () => {
  return gulp.src(sassFiles)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(distFiles));
});

gulp.task('sass:watch', ['sass'], () => {
  gulp.watch(sassFiles, ['sass']);
});

/*
* BABEL
* */
const babelFiles = ['./src/**/*.js', './src/**/*.jsx'];
gulp.task('babel', () => {
  return gulp.src(babelFiles)
    .pipe(babel())
    .pipe(gulp.dest(distFiles));
});

gulp.task('babel:watch', ['babel'], () => {
  gulp.watch([babelFiles], ['babel']);
});

gulp.task('default', ['sass:watch', 'babel:watch']);