const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];

console.log('\nCommand:', command);
console.log('\nYargs:', argv, "\n\n");

if(command === 'add')
  notes.addNote(argv.title, argv.body)

else if(command === 'read')
  notes.getNote(argv.title);

else if(command === 'remove')
  notes.removeNote(argv.title);

else if(command === 'list')
notes.getAll();

else
  console.log(`'${command} not recognized`);
