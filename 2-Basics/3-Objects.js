// // singleton 
// // Object.create

// //objects literals

const mySym = Symbol("My Symbol");

const User = {
    name: "Harshal",
    "Full Name": "Harshal Khade",
    [mySym]: "key1",
    age: 21,
    location: "Pusad",
    Email: "harshal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
    }


// accessing object properties
    console.log(User.Email);
    console.log(User["Email"]);
    console.log(User["Full Name"]);
    console.log(User[mySym]);
    console.log(typeof User[mySym]);


User.Email = "harshal@google.com"
// Object.freeze(User)
User.Email = "harshal@chatgpt.com"
console.log(User);

// Object.freeze() makes the object immutable, meaning you cannot change its properties
// Object.seal() allows you to modify existing properties but prevents adding or removing properties



//creating function
User.greeting = function() {
    console.log("Hello User");
}

User.greetingTwo = function(){
    console.log(`Hello User , ${this["Full Name"]}`); // this refers to the object like we refer here to our object User
}    // you can also use this.name or this["name"] to access the properties of the object

console.log(User.greeting());
console.log(User.greetingTwo());