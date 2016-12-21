console.log('statrting notes');

const addNote = (title, body) => {
  console.log('Adding note', title, body);
};

const getAll = () => {
  console.log('Getting all notes');
}

const getNote = (body) => {
  console.log('Readding', body);
}

const removeNote = (title) => {
  console.log('Removing', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
};