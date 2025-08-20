// immediately invoked function expression



function chai(){
    console.log("I am chai function");
}

chai(); // we need to put ; here , if we dont then next IFE we  give error

// IFE is what executes immediately after it is defined
//why we use IFE ?
// we use IFE because sometimes global scope can  be polluted by variables and functions that are defined in the global scope, so we use IFE to create a new scope and avoid polluting the global scope
// we use to create a new scope and avoid polluting the global scope
// 

//syntax of IFE is

//()()  // this is how we define an IFE
// in the first set of parentheses we define the function and in the second set of parentheses we call the function


(function harsh(){
    // names IFE
    console.log("I am an IFE function");
})();   // and here also if we dont put ; then it will give an error


// now try the IFE with Arrow function

( () => {
    // normal IFE (unnamed IFE) with Arrow function
    console.log("I am an IFE with Arrow function");
}) ();




// now try with passing the parameters 

( function chai2(username, lang) {
    console.log(`Hiii !!!, i am ${username}, and i love ${lang} !!!`);
})('Harshal', 'JavaScript'); // this will print "hii , i am Harshal, and i love JavaScript !!!" because we are passing the parameters to the IFE


(function code(language, who) {  
    // named IFE with parameters
    console.log(`This is ${language}, and you are ${who}.`);
})('JavaScript', 'bot');


( (name, place) => {
    // unnamed IFE with Arrow function and parameters
    console.log(`Hiii, i am ${name}, from ${place}.`);
})('Hasrhal', 'Amravati');

// if you wanna declair the unnamed IFE then you need to use Arrow function for that , you cant use unnamed IFE without Arrow function