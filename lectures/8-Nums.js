const score = 400 // js automatically decide it is number 

const balance = new Number(100) // we manually declare is number

console.log(score)
console.log(balance)


console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 100.00  two decimal values

const otherNumber = 134.5335

console.log(otherNumber.toPrecision(3)); // 34.5  three significant digits


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // it arrange nummber as indian standard



//****************************MATHS**************************** */

console.log(Math)
console.log(Math.abs(-4)); //it converts the negative vvalues to positive (Math.absolute)
console.log(Math.round(4.3)) // it takes the round figure value
console.log(Math.ceil(4.3)) // it round of the value to top value like 4.1 => 5
console.log(Math.floor(4.3)) // it round of the value to lowest like 4.9 => 4
console.log(Math.min(4, 8 , 9 , 1 , 3)) // it shows the smallest value in the array
console.log(Math.max(4, 8 , 9 , 1 , 3)); //it shows the highest value in the array

console.log(Math.random()) //randomly generate number between 0-1 (in points like 0.212331)
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)