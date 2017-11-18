let names = ['Josh', 'Fred', 'Bob'];

let people = [];

for(let i = 0; i < 3; i++) {
  let person = new Object();
  person['id'] = i+1;
  person['name'] = names[i];

  people.push(person);
}

for(p of people)
  console.log(p);
