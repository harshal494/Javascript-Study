//reduce 


const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce( function (acc, curval) {
//     console.log(`acc: ${acc} and curval ${curval}`);
//     return acc + curval
// }, 0)


const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemname: "js cource",
        price: 299
    },
    {
        itemname: "java cource",
        price: 2999
    },
    {
        itemname: "pythin cource",
        price: 3000
    },
    {
        itemname: "c cource",
        price: 299
    },
    {
        itemname: "cpp cource",
        price: 299
    },
    {
        itemname: "ruby cource",
        price: 2990
    },
]

const pricetopay = shoppingCart.reduce( (acc ,item) => acc + item.price, 0 )

console.log(pricetopay);

