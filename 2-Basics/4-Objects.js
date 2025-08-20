//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Harshal Khade"
tinderUser.isLoggedIn = false


console.log(tinderUser);

const regularUser = {
    email: "hk@google.com",
    fullname: {
        userfullname: {
            firstname: "Harshal",
            lastname: "Khade" 
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser["fullname"]["userfullname"]["firstname"]);


//combine two objects
const obj1 = {
    1: "a",
    2: "b",
    3: "c",
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f",
}
const obj5 = {
    7: "g",
    8: "h",
    9: "i",
}
const obj6 = {
    10: "j",
    11: "k",
    12: "l",
}

// const obj3 = { obj1, obj2}               // wrpong way to combine objects
const obj3 = Object.assign(obj1, obj2)      //both the ways are same
// const obj4 = Object.assign({}, obj1, obj2, obj5, obj6) // but this will garenteed that it will create a new object and combine them into {}
                                            //  // 2nd one is good practice
                                            //we can assign objects to another ojects by using assign() operator

console.log(obj3);                       // output of both obj3 and obj4 will be same

const obj4 = {...obj1, ...obj2, ...obj5, ...obj6} // this is also a good way to combine objects (good practice)
console.log(obj4);


const users = [
    {
        id: 1,
        email: "harshal@gmail.com"
    },
    {
        id: 2,
        email: "harshal@gmail.com"
    },
    {
        id: 3,
        email: "harshal@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged')); // it will check if the property is present in the object or not
