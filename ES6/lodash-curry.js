const _ = require('lodash');

let food =  (name, quantity, food, mealType) => {
  return `${name} had ${quantity} ${food} for ${mealType}`;
}

// lodash function that intelligently curries our existing function
food = _.curry(food);

let a = food('Jimmy');
let b = a('6');
let c = b('waffles');
let d = c('breakfast');

console.log(d);
