//array
//types of declaring the arrays

const myArray = [1, 2, 3, 4, 5, 6, 7]
const hero = ["shaktiman", "antman"]
const myarr = new Array(1, 2, 3, 4, 5, 6)

//array stores the multiple values of same types or different in js


console.log(myArray[0]);

//array methods

myArray.push(8)  // used to push values in array in last position
myArray.push(9)
myArray.pop() // it removes the last element in array

myArray.unshift(0)  // it add the inserted value in the start of the array and shift all the ellements by one 
                    //its ok with array of small element but if there is array of more than 10000 elements then load on pc increases 
myArray.shift()  // shift() removes the first element from start

console.log(myArray.includes(5)); //tells the given value is inn array or not
console.log(myArray.indexOf(5)); //tells the given values is in which index (position)


const newArr = myArray.join()
console.log(myArray);
console.log(newArr);
console.log(typeof newArr);


slice , splice

console.log("A ", myArray);

const new1 = myArray.slice(1, 4) //slice does not show the range value in output and does not affect pr manipulate the array
console.log(new1);
console.log("B ", myArray);

const new2 = myArray.splice(1, 4)  // splice manipulate the value of arrays it shows the range value but also it takes out 
                                   // that values out of arrays and array will remain with remainning values  
console.log(new2)
console.log("C ", myArray);