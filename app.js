console.log('Starting app.');

const fs = require('fs');
const yargs = require('yargs')
const notes = require('./notes');

const _ = require('lodash');

const argv = yargs.argv;
var command = process.argv[2];

if (command === 'add') {
  console.log('Adding new note');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.body);
}else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not found');
}