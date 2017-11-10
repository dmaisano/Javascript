const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

var person = {
  name: '',
  sayings: [] // array of 'sayings'
}

rl.question('Enter the name of a person: ', function(answer) {

  person.name = answer;

  rl.setPrompt(`What would ${person.name} say?: `); // ES6 template literal string

  rl.prompt(); // gets input from the user

  rl.on('line', function(saying) { // anonymous function that executes when the user is prompted a question

    person.sayings.push(saying.trim());
    // pushing the 'saying' from the user input to the person.sayings[] array 
    // trim removes whitespace from the string

    if(saying.toLowerCase().trim() === 'exit') { // if the user input === 'exit' close readline
      rl.close();
    }
    else { // else prompt another question
      rl.setPrompt(`What else would ${person.name} say?: ('exit' to leave): `) ;
      rl.prompt();
    }
  });
});

rl.on('close', function() { // function that executes once the readline stream is closed
  console.log("%s is a person that says %j", person.name, person.sayings);
  // '%s' placeholder for a string, replaced by the first argument 'person.name'
  // '%j' placeholder for javascript object (json string), replaced by the second argument 'person.sayings'
  process.exit();
});
