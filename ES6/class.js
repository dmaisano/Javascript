class Animal {
  constructor(species) {
    this.species = species;
  }

  describe() {
    return `${species} is an animal`;
  }
}

class Dog extends Animal {
  constructor(species, name, sound) {
    super(); // references the parent class 'Animal';
    this.species = species;
    this.name = name;
    this.sound = sound;
  }
  

  describe() {
    return `${this.name} is a ${this.species} and he likes to ${this.sound}`;
  }
}


let marley = new Dog('dog', 'Marley', 'bork');

console.log(marley.describe());
