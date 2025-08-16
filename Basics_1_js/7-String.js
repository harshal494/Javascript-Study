const name = "Harshal";
const reCount = 20;

// console.log(name + reCount + " Repository"); // do not use this type

console.log(`hello my name is ${name} and my repo counnt is ${reCount}`);

const gameName = new String("Harshal-khade");
console.log(gameName[0]); // String { 'Harshal khade' }
console.log(gameName.__proto__);

console.log(gameName.length); // 13
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf("l"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-12, 4);
console.log(anotherString);

const newString2 = "   Harshal khade    ";
console.log(newString2);
console.log(newString2.trim()); // "Harshal khade"

const url = "https://www.harshalkhade.com/harshal%20khade";

console.log(url.replace("%20", "-"));

console.log(url.includes("khade"));
console.log(url.includes("New"));

console.log(gameName.split("-")); // ['Harshal', 'khade']
//slit on basis of '-' and return array
//if your name or phrase has space then use ' ' in split method
