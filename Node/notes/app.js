const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
let data = notes.fetchNotes();

const argv = yargs.argv;
let command = argv._[0];

if(command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if(note)
    console.log(`\nCreated new note!\nTitle: ${note.title}\nBody: ${note.body}`);

  else 
    console.log('\nSomething went horribly wrong');
}

else if(command === 'read')
  notes.getNote(argv.title);

else if(command === 'remove') {
  try {
    data.find(note => {
      if(note.title === argv.title) {
          notes.removeNote(argv.title);
          console.log(`\nRemoved note with title: ${argv.title}`);
      }
    });
  } catch(err) {
    console.log(`\nCouldn't find note with title: ${argv.title}`);
  }
}
  

else if(command === 'list')
notes.getAll();

else
  console.log(`'${command} not recognized`);
