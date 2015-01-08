var gulp = require('gulp');

var del = require('del');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var deploy = require('gulp-gh-pages');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');

var paths = {
  scripts: 'src/**/*.js',
  stylesheets: 'src/**/*.css',
  html: 'src/**/*.html',
  build: 'build/**/*'
};

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('stylesheets', function(){
  gulp.src(paths.stylesheets)
    .pipe(gulp.dest('build'));
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('html', function(){
  gulp.src(paths.html)
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
  watch(paths.scripts, function(files, cb){
    gulp.start('scripts', cb);
  });
  watch(paths.stylesheets, function(files, cb){
    gulp.start('stylesheets', cb);
  });
  watch(paths.html, function(files, cb) {
    gulp.start('html', cb);
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

gulp.task('build', ['scripts', 'stylesheets', 'html']);
gulp.task('default', ['build', 'webserver', 'watch']);
gulp.task('deploy', ['build', 'ghPages']);
