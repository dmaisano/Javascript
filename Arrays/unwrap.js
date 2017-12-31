// I honestly have nothing better to with my life...

class Nugget {
  constructor() {
    this.name = 'nugget';
    this.data = [[[[[[[[['biscuit']]]]]]]]];
  }
}

const unwrap = (arr, count = 0) => Array.isArray(arr) ? unwrap(arr[0], ++count) : [arr, count]

let nugget = new Nugget();
let res = unwrap(nugget.data);
let phrase = `There was a ${nugget.name} found in a ${res[0]} nested inside ${res[1]} arrays`;

console.log(phrase);
