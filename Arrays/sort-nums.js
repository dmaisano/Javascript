let data = [
  94, 90, 88, 85, 90, 93, 95, 91, 92, 87, 91, 85, 91, 90, 88, 89, 91, 91, 89, 88, 86, 92, 92, 84, 89, 89, 87, 85, 91, 86, 89, 90, 91, 89, 95, 90, 90, 90, 92, 82 
];

data = data.sort((a, b) => a - b);

let count = 0;
let exceptional = 0;

for(num of data) {
  count++;
  if(num > 90) {
    exceptional++;
    console.log(num)
  }
}

console.log(count);

console.log(exceptional);

console.log(exceptional/40)

// mean: 89.425

// median: 90

// variance: 8.404

// stdev: 2.899
