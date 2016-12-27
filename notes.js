console.log('statrting notes');

const fs = require('fs');

const fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.js');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.js', JSON.stringify(notes));
}

const findNote = (title) => {
  var notes = fetchNotes();
  var foundNote = notes.filter((note) => note.title === title);
  if (notes.length > 0) {
    return foundNote;
  } else {
    return [];
  }
}

const add = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body,
  };

  var duplacateNotes = notes.filter((note) => note.title === title);
  
  if (duplacateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  var notes = fetchNotes();

  return notes;
}

const getNote = (title) => {
  var notes = findNote(title);

  if (notes.length > 0) {
    return notes[0];
  }
}

const removeNote = (title) => {
  var notes = fetchNotes();
  var deletedNote = findNote(title);
  var notesToSave = notes.filter((note) => note.title !== title);
  
  if (notesToSave.length > 0) {
    saveNotes(notesToSave);
    return deletedNote[0];
  }
}

module.exports = {
  add,
  getAll,
  getNote,
  removeNote,
};