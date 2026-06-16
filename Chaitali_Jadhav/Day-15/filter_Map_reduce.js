//+++++++++++++++++ filter +++++++++++++++++++++++++


const coding = ["js" , "rubi " ,"java" , "python" , "cpp"]

const value = coding.forEach((item) => {
    console.log(item);
    return item                 // undefined
})

console.log(value);

const myNums = [1, 2, 3, 4,5,6,7,8,9,10]


const newNums = myNums.filter((num) => num > 5 )

const newNums = myNums.filter((num) => {
    return num > 5                                    // here scope starts so we add return
})     // callback
console.log(newNums);


const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);

const books = [
    {
        title: "Book One",
        genre: "Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book Two",
        genre: "History",
        publish: 1992,
        edition: 2008
    },
    {
        title: "Book Three",
        genre: "Science",
        publish: 2001,
        edition: 2015
    },
    {
        title: "Book Four",
        genre: "Non-Fiction",
        publish: 1989,
        edition: 2010
    },
    {
        title: "Book Five",
        genre: "Fantasy",
        publish: 1999,
        edition: 2020
    },
    {
        title: "Book Six",
        genre: "Biography",
        publish: 2005,
        edition: 2021
    },
    {
        title: "Book Seven",
        genre: "Fiction",
        publish: 2011,
        edition: 2022
    },
    {
        title: "Book Eight",
        genre: "History",
        publish: 1987,
        edition: 2017
    },
    {
        title: "Book Nine",
        genre: "Science",
        publish: 2018,
        edition: 2023
    },
    {
        title: "Book Ten",
        genre: "Fantasy",
        publish: 1995,
        edition: 2019
    }
];

const userBooks = books.filter((bk) => bk.genre === "History" )
const userBooks = books.filter((bk) => bk.publish > 2000 )
const userBooks = books.filter((bk) => {
    return bk.publish <= 1995 && bk.genre === "History"
})

console.log(userBooks);



// ++++++++++++++++++++++++++ Map ++++++++++++++++++++++++++++++=

const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumber.map((num) => num + 10)

const newNums = myNumber
            .map((num) => num * 10 )
            .map((num) => num + 1)
            .filter((num) => num >= 40)

console.log(newNums);




// ++++++++++++++++ reduce ++++++++++++++++++++++++++++ 

const myNums = [1,2,3,4]

const myTotal = myNums.reduce(function (acc , currval){
    console.log(`acc : ${acc} and currval: ${currval}` );
    return acc + currval
} , 3)


const myTotal = myNums.reduce((acc , curr) => acc + curr , 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course" , 
        price : 599
    },
    {
        itemName : "py course" , 
        price : 999
    },
    {
        itemName : "java course" , 
        price : 1599
    }
]

const priceToPay = shoppingCart.reduce((acc ,item) => acc + item.price, 0)
console.log(priceToPay);
