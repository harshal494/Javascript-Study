const User = {
    username: "Harshal",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to Website`);
        console.log(this);
    }
}


// User.welcomeMessage() // this will print "Harshal , welcome to Website" because this refers to the User object
// User.username = "Harsh" // User.welcomeMessage() // this will print "Harsh , welcome to Website" because this refers to the User object and username is changed
// User.welcomeMessage() // this will print "Harsh , welcome to Website" because this refers to the User object and username is changed

// console.log(this); // this will print the global object in the browser (window) or undefined in strict mode
                    // this will refer to global variable and it shows the empty object in the console



// function chai(){
//     let username = "Harshal"
//     console.log(this.username); // this will print the global object in the browser (window) or undefined in strict mode
// }

// chai()


// const chai = function (){
//     let username = "Harshal"
//     console.log(this.username); // this will print the global object in the browser (window) or undefined in strict mode
// }


const chai =  () => {  // this is how we define an arrow function
    let username = "Harshal"
    console.log(this.username); // this will print the global object in the browser (window) or undefined in strict mode
}

// chai() // this will print the global object in the browser (window) or undefined in strict mode





//Arrow functions

const addtwo = (num1, num2) => {
    return num1 + num2;
}

//console.log(addtwo(10, 20)); // this will print 30 because addtwo is an arrow function that takes two arguments and returns their sum


const addtwo1 = (num1, num2) =>  num1 + num2; // this is a shorthand version of the above function knnow as implicit return

console.log(addtwo1(3, 5));



const mul = (num1, num2) => (num1*num2)

console.log(mul(3, 4)); // this will print 12 because mul is an arrow function that takes two arguments and returns their product

const mul1 = (num1, num2) => ({username: "Harshal"}) // this will return an object with username property because we are using implicit return with parentheses
console.log(mul1(2, 2));


// const myArr = [1, 2, 3, 4, 5]

// myArr.forEach(() => {})