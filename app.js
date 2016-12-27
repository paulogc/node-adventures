console.log('Starting app.');

const fs = require('fs');
const yargs = require('yargs')
const notes = require('./notes');

const _ = require('lodash');

const argv = yargs.argv;
var command = process.argv[2];

if (command === 'add') {
  var note = notes.add(argv.title, argv.body);
  if (note) {
    console.log('Note created successfully!');
  } else {
    console.log('Note already exists!');
  }
} else if (command === 'list') {
  var foundNotes = notes.getAll();
  if (foundNotes.length > 0){
    foundNotes.map((note) => {
      console.log(note);
    });
  } else {
    console.log('There is no notes to show!')
  }
} else if (command === 'find') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log(`Title: ${note.title} Body: ${note.body}`);
  } else {
    console.log('Note not found!');
  }
}else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  if (noteRemoved) {
    console.log(`Note "${noteRemoved.title}" deleted successfully`)
  } else {
    console.log('Note not found!');
  }
} else {
  console.log('Command not found');
}