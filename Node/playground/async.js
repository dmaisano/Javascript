console.log('starting app');

setTimeout(() => {
  console.log('first timeout');
}, 5000);

setTimeout(() => {
  console.log('second timeout');
}, 0);

console.log('Finished running app');
