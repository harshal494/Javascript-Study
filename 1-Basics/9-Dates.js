// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025, 7, 16)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toISOString());
console.log(myCreatedDate.toLocaleString());

//months starts from 0 as array in js

let myCreatedDate1 = new Date("2025-08-16")
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDay());

// `${newDate.getMonth()} and the time is ${newDate.getDay()}`


newDate.toLocaleString('default', {
    weekday: "long"
}) 