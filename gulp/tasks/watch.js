import gulp from 'gulp';
import watch from 'gulp-watch';
import paths from  '../config';

gulp.task('watch', ['build'], () => {
  watch(paths.source.scripts, (files, cb) => gulp.start('build:scripts', cb));
  watch(paths.source.stylesheets, (files, cb) => gulp.start('build:stylesheets', cb));
  watch(paths.source.html, (files, cb) => gulp.start('build:html', cb));
});
