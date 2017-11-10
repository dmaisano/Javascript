let fs = require('fs');

/* removeBreak(x) iterates through the array of text generated below 
and removes any linebreaks found in each element */
function removeBreak(arr) {
    for(let i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].replace('\r',"")
    }

    return arr;
}

let data = removeBreak(fs.readFileSync('data.txt', 'utf8').trim().split('\n'))
    .map( line => line.split('\t'))
    .reduce( (customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            'order-name': line[1],
            price: line[2],
            quantity: line[3]
        })

        return customers
    }, {});
    

console.log(JSON.stringify(data, null, 2));