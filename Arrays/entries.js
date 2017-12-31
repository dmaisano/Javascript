let arr = [2, 3, 5, 7, 11, 13]

let iterator = arr.entries();

// iterator.next()
// iterator.next().value
// iterator.next().done

for(let iter of iterator)
  console.log(iter);
