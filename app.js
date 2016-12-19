console.log('Starting app.');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

fs.appendFile('new.txt', `Menelique É um gato louco `);

fs.appendFile('new.txt', `Hello ${user.username} `);