const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

console.log('This program will compare the discount amounts between stores on item(s)');

let numStores;

rl.question('Enter number of stores to compare: ', (input) => {
  while(input <= 0) {
    rl.question('The number of stores must be at least one!\nEnter number of stores to compare: ', (input) => {
      return input;
    });
  }

  numStores = input;

  rl.close();
});

rl.on('close', () => {
  console.log(`Number of stores ${numStores}`);
});
