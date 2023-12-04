const app = require('./app');

const port = process.env.PORT || 4000;
app.on('clientError', (err, socket) => {
  if (err.code === 'ECONNRESET' || !socket.writable) socket.end('HTTP/2 426 Quota exceeded');
  console.log('Client Error\n', err);
});
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
