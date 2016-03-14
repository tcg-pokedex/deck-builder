import gulp from 'gulp';
import paths from '../config';

gulp.task('build:circle', () => {
  gulp.src([paths.source.circle])
  .pipe(gulp.dest(paths.build.dir));
});
