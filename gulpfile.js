var gulp = require('gulp');

var del = require('del');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var shell = require('gulp-shell');
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

gulp.task('ghPages', shell.task([
  'git unstage',
  'git add build',
  'git commit -m "Build ' + new Date().toISOString() + '"',
  'git push origin `git subtree split --prefix build gh-pages`:gh-pages --force',
  'git subtree push --prefix build origin gh-pages',
  'git uncommit && git unstage'
]));

gulp.task('build', ['scripts', 'stylesheets', 'html']);
gulp.task('default', ['build', 'webserver', 'watch']);
gulp.task('deploy', ['build', 'ghPages']);
