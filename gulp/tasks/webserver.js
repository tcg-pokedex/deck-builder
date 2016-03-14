import gulp from 'gulp';
import webserver from 'gulp-webserver';
import paths from '../config';

gulp.task('default', ['watch'], () => {
  gulp.src(paths.build.dir)
    .pipe(webserver({
      livereload: true,
    }));
});
