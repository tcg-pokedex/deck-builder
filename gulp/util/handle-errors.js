import notify from 'gulp-notify';

export default function handleErrors(...args) {

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.plugin %>: <%= error.message %>',
  })(...args);

  // Keep gulp from hanging on this task
  this.emit('end'); // eslint-disable-line no-invalid-this
}
