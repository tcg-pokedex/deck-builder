import gulp from 'gulp';
import stylus from 'gulp-stylus';
import paths from '../config';

gulp.task('build:stylesheets', () => {
  gulp.src(paths.source.stylesheets)
    .pipe(stylus())
    .pipe(gulp.dest(paths.build.stylesheets));
});
