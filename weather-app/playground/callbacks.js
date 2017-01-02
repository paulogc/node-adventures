var getUser = (id, callback) => {
  var user = {
    id,
    name: 'guedes',
  };
  setTimeout(() => {
    callback(user);
  }, 2000);
};

getUser(1, (userObject) => {
  console.log(userObject);
});