// Primitive datatypes

// 7 types
// String , Number , Boolean , Undefined , Null , Symbol , BigInt


const Score = 100 
const ScoreValue = 100.5
const isLoggedIn = true
const outsideTemp = null
let userEmail;
let userEmail2 = undefined;
const id = Symbol('123')
const otherId = Symbol('123') //symbols are used to define unique value for variables

// console.log(id === otherId); // false (symbols are unique)

const bigNumber = 9827683427923659279n // BigInt for large integers


// Reference Type (Non Primitive)

// Arrays , Objects ,Functions 

const heros = ["Shaktiman", "Spiderman", "Batman", "Superman"]


let myObj =  {
    name: "Harshal Khade",
    age: 21,
    isLoggedIn: true,
}


const MyFunction = function(){
    console.log("Hello from MyFunction");
}

// console.log(typeof id)