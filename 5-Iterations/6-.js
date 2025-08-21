//const coding = [ "js", "java","ruby", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);  // forEach dont return any value





// const myNums = [1, 2,3,4,5,6,7,8,9,10]

// //const  newNums = myNums.filter( (num) => num > 4 )
// const newNums = myNums.filter( (num) => {
//     return num > 4   // you need to use return if you uses scope
// })


// const arr = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         arr.push(num)
//     }
// })


// console.log(arr);



const Books = [
    {title: 'book 1', genre: 'science', publish: 1888, edition: 2021},
    {title: 'book 2', genre: 'history', publish: 1889, edition: 2020},
    {title: 'book 3', genre: 'fictional', publish: 2000, edition: 2021},
    {title: 'book 4', genre: 'comic', publish: 2022, edition: 2024},
    {title: 'book 5', genre: 'history', publish: 2021, edition: 2025},
    {title: 'book 6', genre: 'science', publish: 1999, edition: 2000},
    {title: 'book 7', genre: 'history', publish: 1992, edition: 2006},
    {title: 'book 8', genre: 'fictional', publish: 1943, edition: 2008},
    {title: 'book 9', genre: 'fictional', publish: 1990, edition: 2015},
    {title: 'book 10', genre: 'science', publish: 2001, edition: 2021},
    {title: 'book 11', genre: 'fictional', publish: 2004, edition: 2011},
];

let userBooks = Books.filter( (book) => book.publish <= 1930)

userBooks = Books.filter( (book) => { return book.genre === 'science'})

userBooks = Books.filter( (book) => {
    return book.edition >= 2020 && book.genre === 'fictional'
})

console.log(userBooks);
// console.log(userBooks1);
// console.log(userBooks2)