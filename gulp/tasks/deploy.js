import gulp from 'gulp';
import deploy from 'gulp-gh-pages';
import paths from '../config';

gulp.task('deploy', ['build'], () => {
  gulp.src(paths.build.dir)
    .pipe(deploy());
});
