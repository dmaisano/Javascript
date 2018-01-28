const stats = require('stats-lite');
const variance = require('compute-variance');

const data = [18, 15, 13, 10, 13, 8, 18, 8];+

// let sampleMean = (values) => {
//   total = 0;

//   for(value of values)
//     total += value;

//   return total / values.length;
// };

console.log("mean:", stats.mean(data));

console.log("range:", stats.range)

console.log("variance:", variance(data));

console.log("stdev:", stats.stdev(data));
