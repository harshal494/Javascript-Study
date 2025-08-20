//
//
//
//
// Stack (Primitive) , Heap (Non- Primitive)
// Memory in JavaScript is divided into two main types: Stack and Heap.
// Stack is used for primitive data types, while Heap is used for non-primitive data types.
// Stack is a fixed size memory allocation, while Heap is dynamic.
// Stack is faster than Heap, but Heap can store larger data structures.
// Stack is used for function calls and local variables, while Heap is used for objects and arrays.
// Stack is LIFO (Last In First Out), while Heap is not.
// Stack is automatically managed by the JavaScript engine, while Heap requires garbage collection.
// Stack is used for small data structures, while Heap is used for large data structures.

let myname = "Harshal Khade";
let myAge = 21;
let myHobbies = ["Coding", "Reading", "Gaming"];
//this prmitive datatypes store in stack memory



let myDetails = {
    name: myname,
    age: myAge,
    hobbies: myHobbies 
}
//this non-primitive datatype (object) stores in heap memory

let userone = "Harshal khade"

let usertwo = userone

usertwo = "Harshal Prabhakar Khade"

console.log(userone);
console.log(usertwo);

//in stack it makes copy of the value, so if we change usertwo it will not affect userone



let userThree = {
    Email: "harshalkhade@gmail.com",
    age: 21
}

let userFour = userThree

userFour.Email = "harshal@google.com"

console.log(userThree.Email);
console.log(userFour.Email);

//in heap it makes reference of the object, so if we change userFour it will also affect userThree
//because both are pointing to the same memory location.