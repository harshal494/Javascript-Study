const Marvel = ["thor", "ironman", "captain"]
const DC = ["superman", "batman", "flash"]

Marvel.push(DC)

console.log(Marvel);
console.log(Marvel[3][1]);


const both = Marvel.concat(DC)  //we can concatenate two arrayys using concat()  but we need 3rd array to store both values 
                                //otherwise if you try to push one array in another then it will treat 2nd array as an element
console.log(both);

const allHeros =  [...Marvel, ...DC]  //it is spread function ,when you use this it will merge the arrays 
console.log(allHeros);


// this method shows all the arrays in array in one single array
const anotherArray = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray);


//this function convert anything into array 
console.log(Array.isArray("Harshal"))
console.log(Array.from("Harshal"))
console.log(Array.from({name: "Harshal"})) //it will give it as empty array


//it makes arrays of given items
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));