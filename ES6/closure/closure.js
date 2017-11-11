function Person(name) {
  let _name = name; // '_name' is limited to the scope of this function

  // a method of the person function that returns '_name' outside the scope
  this.getName = () => { 
    return _name;
  }
}

let ricardo = new Person('Ricardo');

console.log(ricardo.getName());
