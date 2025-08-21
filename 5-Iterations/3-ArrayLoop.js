// for of 

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}


const greetings = " Hello World !"

for (const greet of greetings) {
    if (greet == " ") {
        continue   // this removes spaces from string
    }
    // console.log(`Each char is ${greet}`);
    
}



//maps

const map = new Map()  // maps are known for unique values , if you try to insert the duplicate value then it will not show the value again

map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "INDIA")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ":", value);
// }