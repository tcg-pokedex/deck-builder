var gulp = require('gulp');

var del = require('del');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var deploy = require('gulp-gh-pages');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var browserify = require('browserify');
var reactify = require('reactify');
var stylus = require('gulp-stylus');

var paths = {
  scripts: './src/js/**/*.@(js|jsx)',
  js_main: './src/js/app.jsx',
  stylesheets: './src/stylesheets/main.styl',
  html: './src/**/*.html',
  build: './build/**/*'
};

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('build:stylesheets', function(){
  gulp.src(paths.stylesheets)
    .pipe(stylus())
    .pipe(gulp.dest('build/css'));
});

gulp.task('build:scripts', function(){
  var b = browserify({
    extensions: ['.jsx'],
    debug: true
  });
  b.transform(reactify); // use the reactify transform
  b.add(paths.js_main);
  return b.bundle()
    .pipe(source('js/main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('build:html', function(){
  gulp.src(paths.html)
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
  watch(paths.scripts, function(files, cb){
    gulp.start('build:scripts', cb);
  });
  watch(paths.stylesheets, function(files, cb){
    gulp.start('build:stylesheets', cb);
  });
  watch(paths.html, function(files, cb) {
    gulp.start('build:html', cb);
  });
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true
    }));
});

var deploy = require('gulp-gh-pages');

gulp.task('ghPages', function () {
  return gulp.src(paths.build)
    .pipe(deploy());
});

gulp.task('build', ['build:scripts', 'build:stylesheets', 'build:html']);
gulp.task('default', ['build', 'webserver', 'watch']);
gulp.task('deploy', ['build', 'ghPages']);
