var gulp = require('gulp');

var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var shell = require('gulp-shell');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');

var paths = {
  scripts: 'src/js/**/*.js',
  stylesheets: 'src/stylesheets/**/*.css',
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

gulp.task('browserify', function() {
  browserify('./src/js/pokemon.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('html', function(){
  gulp.src(paths.html)
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
  watch(paths.scripts, function(files, cb){
    gulp.start('browserify', cb);
  });
  watch(paths.stylesheets, function(files, cb){
    gulp.start('stylesheets', cb);
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

gulp.task('build', ['browserify', 'stylesheets', 'html']);
gulp.task('default', ['build', 'webserver', 'watch']);
gulp.task('deploy', ['build', 'ghPages']);
