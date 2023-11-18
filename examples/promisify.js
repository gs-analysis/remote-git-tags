function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, value) => {
        if (error) {
          return reject(error);
        }
        resolve(value);
      });
    });
  };
}
function foo(arg, callback) {
  if (arg === 2) {
    return callback('error');
  }
  callback(null, 'success');
}

const bar = promisify(foo);

bar(2)
  .then((a) => console.log(a))
  .catch(console.error);
