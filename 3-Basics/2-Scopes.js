 
//problem with var 


var c = 300  // this is global scope whichc is declair outside the block
// this is problem , is another teammate write code and declair var here then it will print the latest var not the one which declair early
//and this latest var can be one imported frm another file and thats why we avoid to use var in latest versions of js

if(true){  // {} is knows as scope in if and functions while in obbjects it is used for creating objects
    let a = 10
    const b = 20 // these are block scopes which are declair inside the blockk and can only be access in side the block
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c); // run this
//when we try to run our first two logs then is shows error which it good because we declair variables in if(){} ,
//so let and const works properly and not execute outside the block 
//but when we try to run the var c = 30 it executes outside the block and thats the problem with var and thats whhy using var in current version is not good practice







//DOM ---Document Object Model


// DOM is a tree structure of HTML document which is used to interact with HTML elements using JavaScript
// In DOM, everything is an object and we can access and manipulate HTML elements using JavaScript
//for example, we can access the body element using document.body and we can change its background color using JavaScript
// document.body.style.backgroundColor = "red"; // this will change the background color of the body to red
// we can also access the elements by their id using document.getElementById("id") and change their properties
// for example, we can access the element with id "myElement" and change its innerHTML using JavaScript
// document.getElementById("myElement").innerHTML = "Hello World"; // this will change the innerHTML of the element with id "myElement" to "Hello World"


//nested scope

function one(){
    const username = "Harshal"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);

    two()  // this will print "Harshal" because two() is inside one() and can access the variables of one()
}    //if you didnt call the function two() then it will not print anything because it is not executed

// one()



if (true){
    const username = "Harshal"
    if (username === "Harshal"){
        const website = " Instagram"
        console.log(username + website);
    }
    // console.log(website); //// this will print error because website is not defined outside the block
}

// console.log(username); //this will print error because username is not defined outside the block



// ********************Interesting******************************

console.log(addone(5))

function  addone(num){  // it will not give error because function declaration is hoisted to the top of the scope
    return num + 1
}


// console.log(addTwo(5))  // but this will give error because function expression is not hoisted to the top of the scope
// 
const addTwo = function (num){  //both are functions 
    return num + 2
}

