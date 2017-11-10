let list = [2, 3, 4, 5];

/* iterates and returns a sum of all the values of the array
iteration 0: 2 + 3 = 5
iteration 1: 5 + 4 = 9
iteration 2: 9 + 5 = 11 */
function sum(arr) {
    arr = arr.reduce( (x, y) => { return x + y } );

    return arr;
}

list = sum(list);


console.log(list);
