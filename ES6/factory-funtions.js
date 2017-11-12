// factory function 'dog()'
const dog = () => {
  const sound = 'bork';
  return {
    bork: () => console.log(sound)
  }
}

const marley = dog();
marley.bork();

class Dog {
  constructor() {
  this.sound = 'woof';
  }

  woof() {
    console.log(this.sound);
  }
}

const lita = new Dog();

// the jquery code below will throw an undef error
// $('button#dog').click(lita.woof());

// bind solves the 'this' reference error
$('button#dog').click(lita.woof.bind(lita));
