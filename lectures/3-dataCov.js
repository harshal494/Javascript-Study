let score = "33abbc"



console.log(typeof score); // string
console.log(typeof (score))

let valueInNUmber = Number(score);

console.log(typeof valueInNUmber); // number
console.log(valueInNUmber); // NaN (not a number)

//"33" => 33
//"33abbcc" => NaN
//true => 1 ; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

//1 => true; 0 => false
//"" => false
//"harshal" => true

let StringNumber = 33 ;

let StringNumberType = String(StringNumber);

console.log(StringNumberType);
console.log(typeof StringNumberType); // string