let score = "33abbc"



// console.log(typeof score); // string
// console.log(typeof (score))

let valueInNUmber = Number(score);

// console.log(typeof valueInNUmber); // number
// console.log(valueInNUmber); // NaN (not a number)

//"33" => 33
//"33abbcc" => NaN
//true => 1 ; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

//1 => true; 0 => false
//"" => false
//"harshal" => true

let StringNumber = 33 ;

let StringNumberType = String(StringNumber);

// console.log(StringNumberType);
// console.log(typeof StringNumberType); // string


/************************operations********************** */


let value = 3
let negvalue = -value;
//console.log(negvalue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2); // remainder
// console.log(2**2); // exponentiation
// console.log(2**3); // 2^3 = 8
// console.log(2**3**2); // 2^(3^2) = 2^9 = 512
// console.log(2 + 2 * 3); // 8

let str1 = "hello"
let str2 = "harshal"

let str3 = str1 + " " + str2
// console.log(str3);

// console.log("1" + 2); // "12" (string concatenation)
// console.log(1 + "2"); // "12" (string concatenation)
// console.log(1 + 2 + "3"); // "33" (string concatenation)
// console.log("1" + 2 + 3); // "123" (string concatenation)

// console.log(3 + 4 * 5 / 9 ); // dont write this way its so confusing

// console.log(+true);
// console.log(+false); // 0
// console.log(+null); // 0
// console.log(+undefined); // NaN
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(++gameCounter); // 101
console.log(gameCounter++); // 101