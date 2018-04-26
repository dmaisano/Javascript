let isAlpha = (str) => {
  let re = /^[A-Z]+/i
  if(str.match(re))
    return true;
  return false;
};

let isDigit = (str) => {
  let re = /^[0-9]+/i
  if(str.match(re))
    return true;
  return false;
};

console.log(isDigit("1")); // true

console.log(isAlpha("I like pie")); // true
