let fs = require('fs');

/* removeBreak(x) iterates through the array of text generated below 
and removes any linebreaks found in each element */
function removeBreak(arr) {
    for(let i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].replace('\r',"")
    }

    return arr; // returns the manipulated array which canthan be assigned
}

let file = fs.readFileSync('data.txt', 'utf8') // grab the file and converts it to a string
    .trim() // removes leading a trailing whitespaces
    .split('\n'); // splits the file text into an array every at every new line encountered

let data = removeBreak(file) // removes the '\r' break-line characters from the file
    .map( line => line.split('\t')) // creates arrays contained within a single array at every tab encountered 
    .reduce( (customers, line) => { // customers = {} initial empty object literal, line = each element contained within the large array
        customers[line[0]] = customers[line[0]] || [] // creates an empty array for the customers name if one is not already created
        customers[line[0]].push({ // push values to the array created above
            'order-name': line[1], // pushes the name of the order
            price: line[2], // pushes the price of the order
            quantity: line[3] // pushes the quantity
        })

        return customers // returns the array of customer objects orgnized in a JSON format
    }, {});

console.log(JSON.stringify(data, null, 2));