// Currying is when a function only takes an initial argument, then returns another function, which gets called with the second argument, a repeating process

const _ = require('lodash');

// Dragon is written to be curryable from the start
let dragon =
  name =>
    size =>
      elem =>
        name + ' is a ' +
        size  + ' dragon that breathes ' +
        elem + '!'


let x = dragon('Ricardo');
let y = x('huge');
let z = y('ice');


console.log(z);

let standUsers = [
  { name: 'Joseph', stand: 'Hermit Purple'   },
  { name: 'Jotaro', stand: 'Star Platinum'   },
  { name: 'Josuke', stand: 'Crazy Damond'    },
  { name: 'Giorno', stand: 'Gold Experience' }
];

// Simple method of currying a function using lodash.curry
let hasStand = _.curry((stand, obj) => obj.stand === stand);

let jotaro = standUsers.find(hasStand('Star Platinum'));

console.log(jotaro);


/* Implemenation of finding a standUser object with a desired stand (not-curried)
let hasStand = (stand, obj) => obj.stand === stand;

let jotaro = standUsers.filter(user => hasStand('Star Platinum', user));

console.log(jotaro);
*/
