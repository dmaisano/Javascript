var animals = [
    { name: 'Gabe', species: 'dog'     },
    { name: 'Moroes', species: 'cat'   },
    { name: 'Ursoc', species: 'bear'   },
    { name: 'Charles', species: 'fish' },
    { name: 'Shiba', species: 'dog'    },
    { name: 'Bastion', species: 'bird' },
];

/* an array of dogs is created using by filtering via an inline arrow function
this syntax is much shorter and easier to work with than the more obtrusive method commented out below! */
var dogs = animals
    .filter(animal => animal.species === 'dog')
    .map(animal => animal.name);

/* short syntax for an inline loop to iterate over the dogs array
and log to the console the name of each dog */
dogs.forEach(dog => console.log("Dog Name: ", dog));

/* (works but is too bulky)
var dog = []; // empty array to contain the dogs from 'animals'
for(let i = 0; i < animals.length; i++) { // for loop pushes the dogs from the animals array
    if(animals[i].species === 'doggo')
        dog.push(animals[i]);
}
*/
