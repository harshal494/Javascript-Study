const userEmail = []

if (userEmail) {
    console.log("Got the email");
} else {
    console.log("Dont have user email ")
}


// falsy values 

// false , 0, -0, BigInt 0n, "" , null, undefined, NaN 


// truthy values

// true, "0", 'false', " " , [] , {} , function(){} empty function ,


if (userEmail.length === 0) {
    console.log("Arraya is empty")
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nulish Coelescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 =5 ?? undefined
val1 = null ?? undefined ?? 10 ?? 50

console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTea = 100

iceTea <= 80 ?  console.log("less than 80") : console.log("more than 80");