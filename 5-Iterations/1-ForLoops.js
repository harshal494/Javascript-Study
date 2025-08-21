// for loop

for (let i = 0; i < 10 ; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);

}



// console.log(element);


for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
       // console.log(`inner loop : ${j} and inner loop : ${i}`);
       // console.log(i + '*' + j + '=' + i*j);
    }
    
}


let myArr = ["shaktiman", " ironman", "vision"]

for (let index = 0; index < myArr.length; index++) { // dont use = in arrays 
    const element = myArr[index];
    // console.log(element);
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break   // it i use to break any control flow and exit the iterations
    }
    // console.log(`value of i is: ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue   // it will skip to this iteration and continue the program as it was
    }
    console.log(`value of i is: ${index}`);
} 