import gulp from 'gulp';
import paths from '../config';

gulp.task('build:html', () => {
  gulp.src([paths.source.html])
  .pipe(gulp.dest(paths.build.dir));
});
