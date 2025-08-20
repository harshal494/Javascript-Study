// JavaScript execution context

//code => global execution context

//function execution context

//eval execution context - property of global object

// inside the code file 
// first memory creation phase 
//where memory allocated to out variables and declair objects 


// and second is execution phase
// where out mathematical module works and perform operations

let val1 = 10
let val2 = 5
function addTwo(num1, num2){
    let result = num1 + num2
    return result
}

let result1 = addTwo(val1, val2)
let result2 = addTwo(10, 5)


// js phases of working 


//this is first cycle and its compulsory 

//global execution phase

// first aff all , our all code assigned to "this()" global function




//Memory creation phase


// in memory creation phase ,memory got allocated to our variables 

//val1 => undefined  // its undefined because just memory got allocated
//val2 => undefined 
//add => defination // the everything inside the function assigned to the addTwo
// like this (num1, num2){
   /// let result = num1 + num2
  //  return result
//}
//result1 => undefined
//result2 => unndefined



//execution phase

// val1 <= 10
//val2 <= 5
//addTwo => creates new executional context . this new executional context creates for every single function .
        //in which there is new variable environment and execution thread
        // every time you execute the function this new executional creates 
        // now you created new execution context so we need to do again our memory creation phase and execution phase for our new varible environment
// result1 <= 15 // returned value 
//result2 <= 15 // returned value


// so again two phases

//memory creation phase                     execution phase
//val1 = undefined                              num1 = 10
//val2 = undefined                              num2 = 5
 //                                             total = 15 // it calculate on their own 
// so we are doing this for addTwo 
//so in addTwo we have total also

//total = undefined



// this type of new executional context creates for every single funtion 

// and in the last after executing all , "total" value returns to global execution
// total => global execution

// and once this new global executional context completes its working ,it deletes automatically 



//once our global executional context deletes , we return to our main execution phase and there new value will declai of result1

// result1 => 15



//for result2 

//again new global execuutional context created with new variable environment and execution thread

// memory creation phase                      execution phase

//val1 => undefined                             num1 <= 10
//val2 => undefined                             num2 <= 5
//total => unndefined                           total <= 15

// again this total value returns to global execution phase and delete the environment





//callstack
 
//it uses stack to call methods and execute it 
// uses LIFO if multiple executions are there 
// how stack works in js this is callstack 
//use your browser for that inspect and source and see how they works