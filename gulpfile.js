const { series, parallel} = require('gulp');

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    del = require('del'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-sass')(require('sass')),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    flatten = require('gulp-flatten'),
    pug = require('gulp-pug'),
    vfs = require('vinyl-fs');
    watch_pug = require('gulp-watch-pug')

    pugInheritance = require('gulp-pug-inheritance');
    changed = require('gulp-changed');
    cached = require('gulp-cached');
    gulpif = require('gulp-if');
    filter = require('gulp-filter');

gulp.task('pug', () => {
  return vfs.src('src/pug/**/*.pug')
    .pipe(changed('html', {extension: '.html'}))

    .pipe(gulpif(global.isWatching, cached('src/pug')))

    .pipe(pugInheritance({basedir: 'src/pug', skip: 'node_modules'}).on('error', gutil.log))
    .pipe(filter(function (file) {
      return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }))
    
    .pipe(pug({pretty: true}).on('error', gutil.log))
    .pipe(flatten().on('error', gutil.log))

    .pipe(vfs.dest('dist'))
    .pipe(browserSync.stream());
});

function styles() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(browserSync.stream());
};

exports.styles = styles;
gulp.task ('watcher', () => {
  gulp.watch('./src/scss/**/*.scss', (done) => {series([styles])(done)});

  gulp.watch(['src/pug/**/parts/*.pug'], series(['pug']))
  gulp.watch(['src/pug/**/*.pug', '!src/pug/**/parts/*.pug'], series(['pug']))
});

gulp.task('server', () => {
  browserSync.init({
    startPath: '/dist/index.html',
    notify: true,
    open: false,
    server: {
      baseDir: './',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
});

exports.default = series(
  [
    styles,
    'pug',
    parallel('server', 'watcher'),
  ]
);
