let categories = [
  { id: 'animals',    parent: null      },
  { id: 'mammals',    parent: 'animals' },
  { id: 'cats',       parent: 'mammals' },
  { id: 'dogs',       parent: 'mammals' },
  { id: 'chihuahua',  parent: 'dogs'    },
  { id: 'labrador',   parent: 'dogs'    },
  { id: 'persian',    parent: 'cats'    },
  { id: 'siamese',    parent: 'cats'    },
];

let makeTree = (categories, parent) => {
  let node = {};

  categories.filter(c => c.parent === parent)
     .forEach(c => node[c.id] = makeTree(categories, c.id));

  return node;
}

let dogs = makeTree(categories, null);

console.log(
 JSON.stringify(dogs, null, null, 2)
)
