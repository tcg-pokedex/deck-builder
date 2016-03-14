import gulp from 'gulp';
import deploy from 'gulp-gh-pages';
import paths from '../config';

import os from 'os';

gulp.task('deploy', ['build'], () => {
  gulp.src(`${paths.build.dir}/**/*`)
    .pipe(deploy({
      cacheDir: `${os.tmpDir()}/gh-pages`,
      force: true,
    }));
});
