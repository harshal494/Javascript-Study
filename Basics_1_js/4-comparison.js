// To run this file, use the command: node 4-comparison.js
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log(2 != 1); // true


console.log("2" > 1); // true (string "2" is converted to number 2)
console.log("02" == 2); // true (string "02" is converted to number 2)
console.log(true == 1); // true (boolean true is converted to number 1)
console.log(false == 0); // true (boolean false is converted to number 0)
console.log(null == undefined); // true (both are considered equal in loose equality)
console.log(null === undefined); // false (strict equality checks type and value)
console.log(true == 0) //false (true converted into 1 and 1 is not equal to 0)

console.log(null >= 0); //true 
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null <= 0); //true

console.log(undefined >= 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined <= 0); //false
console.log(undefined == null); // true (loose equality)

// === // strict equality checks both type and value

console.log("2" === 2); // false (string "2" is not strictly equal to number 2)
console.log("2" !== 2); // true (string "2" is not strictly equal to number 2)
console.log(true === 1); // false (boolean true is not strictly equal to number 1)
console.log(false === 0); // false (boolean false is not strictly equal to number 0)
console.log(null === undefined); // false (strict equality checks type and value)
console.log(null !== undefined); // true (strict inequality checks type and value)
