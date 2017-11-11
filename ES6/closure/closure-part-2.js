// In a closure the inner function displayName() has access to the name in the outer function foo() which is outside of it's scope

let foo = () => {
  let name = 'Ricardo';

  let displayName = () => {
    return name;
  }

  return displayName;
}

let x = foo();

console.log(x());
