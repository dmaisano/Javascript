var orders = [
    { name: "pizza", amount: 250 },
    { name: "chips", amount: 400 },
    { name: "tacos", amount: 100 },
    { name: "rice", amount: 325 },
];

// 71 characters :)
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
// reduce iterates over the orders.amount and gets a lump sum value for each 'order(s).amount'

/*
93 characters :|
var totalAmount = orders.reduce(function(sum, order) {
    return sum + order.amount
}, 0);
*/

/*
104 characters :(
var totalAmount = 0;
for(let i = 0; i < orders.length; i++) {
     totalAmount += orders[i].amount;
}
*/

console.log(`Total amount spent on orders: ${totalAmount}`);