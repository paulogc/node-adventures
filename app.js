console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('true'));

var filterArray = _.uniq([1, 2, 3, 2 ,1, 4, 4, 4, 'Paulo', 'Paulo']);
console.log(filterArray)

// console.log('Result', notes.sum(4, 5));

// let user = os.userInfo();

// fs.appendFile('new.txt', `Hello ${user.username} You are ${notes.age}.`);