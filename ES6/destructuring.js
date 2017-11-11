makeSound({
  weight: 23,
  sound: 'woof'
});

function makeSound(options) {
  options.species = options.species || 'animal';

  console.log(`The ${options.species} says ${options.sound}`);
}
