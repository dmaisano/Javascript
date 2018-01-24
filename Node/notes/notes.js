const fs = require('fs');

// removes duplicate notes with same titles
// returns an array of objects
let unique = (notes) => {
  return [...new Set(notes.map(elem => JSON.stringify(elem)))]
    .map(elem => JSON.parse(elem));
}


let fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch(err) {
    console.log(`Couldn't find file: 'notes-data.json'`);
    return [];
  }
}


let saveNotes = (fileName, data) => {
  fs.writeFileSync(fileName, JSON.stringify(data));
}


let addNote = (title, body) => {
  let notes = fetchNotes('notes-data.json');
  let note = {
    title,
    body
  };

  notes.push(note);
  notes = unique(notes);
  saveNotes('notes-data.json', notes);
  return note;
};


let getAll = () => {
  return fetchNotes('notes-data.json');
};


let getNote = (title) => {
  let note = fetchNotes('notes-data.json').filter(note => note.title === title);

  return note[0] ? note[0] : undefined;
};


let removeNote = (title) => {
  let notes = fetchNotes('notes-data.json').filter(note => note.title !== title);

  saveNotes('notes-data.json', notes);
};


let logNote = (note) => {
  console.log(`\nTitle: ${note.title}\nBody: ${note.body}`)
};


module.exports = {
  addNote,
  fetchNotes,
  getAll,
  getNote,
  removeNote,
  logNote
};
