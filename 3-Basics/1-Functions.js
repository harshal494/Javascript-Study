
function MyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

// MyName()

function addTwoNumbers(number1, number2){  //these are parameters 
    console.log(number1 + number2);
} 


//for calling the function we used this method
addTwoNumbers(3, 4) // it return arithmetic operation 
addTwoNumbers(3, "4") // it returns the concatenation 
addTwoNumbers(3, "a") // it will also return the concatenation
addTwoNumbers(3, null) // it will only print the 3 because the null is 0

// function Harshal (num1, num2){
//     console.log(`The first value is ${num1} and second value is ${num2} and their multiplication is ${num1 * num2}`);
// }

const result = Harshal(8, 9)  //we used backtrack (``) for include the message and number together
  //passed values are arguments

  function Harshal (num1, num2){
    let result = num1 * num2;
    return result     
    console.log("Harshal");              // in js we cant write code after return statement if you try to write then that code will be unreachable

}

const result1 = Harshal(7, 7)
console.log("Result : ", result1);




function Add (num1, num2){
    return num1 + num2 ; // we used return statement to return the value from the function
}

const result2 = Add(9, 8)   // when you call return function then you can store your result in a variable
console.log("Addition : ", result2);

//types of calling parameters in js

function Login(username){
    return `${username} just logged in`

}

console.log(Login("Harshal"));
console.log(Login());//shows undefined because we didn't pass any argument to the function


// const Loginstatus = Login("Harshal")
// console.log(Loginstatus);


function Register(Username = "Guest"){ // here we are using default parameter, if you dont pass any argument then it will take the default value "Guest"
    //if(Username === undefined){   // checking if the username is defined or not 
    if(!Username){  // this is also one type of checking if the username is defined or not
        console.log("Please Enter your name !!!"); // if username is not define then this function calls
        return 
    }
    return `${Username} joined as new User !!!` // id username is defined then this funnction willl call
}

console.log(Register("Harshal"));
console.log(Register()) // if you dont pass any argument then it will return unndefined 


function CalccartPrice(val1, val2,...n1){   //... is rest/spread operator
    return n1           // in this function val1,val2 will take 200 and 400 and 500 will store in rest/spread operator
}

// console.log(CalccartPrice(200,400,500)); // this is how we can store values in parameters using rest / spread operator





//how you can access the object using function?
const user = {   //you declare any object and pass some values to it
    username: "Harshal",
    price: 500
}

function userdetail(anyuser){  //here you declare any function and pass them any parameter other than object name
    console.log(`Username is ${anyuser.username} and price is ${anyuser.price}`); // you assign object using . and object parameters
}

userdetail(user) // hhere you call the object and object declaired in the function and function will the parameters of object 
userdetail({ // you can directly access the object without creating by this method
    username: "HARSHAL",
    price: 499
})


//you can also call the array using functions
const myArray = [200, 300, 400 , 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray))



//for practice

const MyObject = {
    name: "Chiku",
    collage: "bncoe",
    age: 21
}
//now we declair function
function Mydata(myDetails){
    return `My name is ${myDetails.name} and my age is ${myDetails.age}, and my collage is ${myDetails.collage}`
}
//now we call the function and object 
console.log(Mydata(MyObject)) // we need to use console.log() because we use return statement



//array calling practice
const arrays = [1, 2, 3, 4, 5,]

function arr(newArr){
    return newArr[2]
}

console.log(arr(arrays))