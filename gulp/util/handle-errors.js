import notify from 'gulp-notify';

export default function handleErrors(...args) {

  // Send error to notification center with gulp-notify
  Reflect.apply(notify.onError({
    title: 'Compile Error',
    message: '<%= error.plugin %>: <%= error.message %>',
  }), null, args);

  // Keep gulp from hanging on this task
  this.emit('end'); // eslint-disable-line no-invalid-this
}
