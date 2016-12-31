console.log('starting app');

setTimeout(() => {
  console.log('inside call back');
}, 2000);

setTimeout(() => {
  console.log('inside call back 2');
});

console.log('finishing app');