// const fs = require('fs');
// const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
let data = notes.fetchNotes();

const argv = yargs.argv;
let command = argv._[0];

if(command === 'add') {
  let note = notes.addNote(argv.title, argv.body)

  if(note) {
    console.log('Created new note!')
    notes.logNote(note);
  } else
      console.log('Something went horribly wrong');
}

else if(command === 'read') {
  let note = notes.getNote(argv.title);

  if(note != undefined) {
    console.log('Note found');
    notes.logNote(note);
  } else
      console.log(`Couldn't find note with title: ${argv.title}`)
}

else if(command === 'remove') {
  data.find(note => {
    if(note.title === argv.title) {
        notes.removeNote(argv.title);
        console.log(`Removed note with title: ${argv.title}`);
    }

    else
      console.log(`Couldn't find note with title: ${argv.title}`);
  });
}


else if(command === 'list')
  notes.getAll();

else
  console.log(`${command} not recognized`);
