// primitive data types

// 7types : string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemperature = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 9007199254740991n

//Reference (non-primitive) data types

// object, array, function

const heros = ["shaktiman", "doga", "batman", "superman"]
let myObj={
    name: "kanishka",
    age: 20
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemperature);//object

console.log(typeof heros); //object
console.log(typeof myObj); // object

console.log(typeof myFunction); // function

console.log(typeof null); // object
console.log(typeof anotherId); // symbol

console.log(typeof bigNumber); // bigint

console.log(typeof score); // number
console.log(typeof isLoggedIn); // boolean  


//---------------------------------Memory allocation---------------------------------

// primitive data types are stored in stack memory
// reference data types are stored in heap memory

//stack(primitive) , heap(reference)

let myName= "kanishka"

let anotherName = myName
anotherName = "KDW"

console.log(anotherName); // KDW
console.log(myName); // kanishka

let userOne={
    name: "kanishka",
    age: 20,
    email:"kanishka@example.com",
    upi_id:"user@okaxis",
}

let userTwo = userOne

userTwo.email="kdw@gmail.com"

console.log(userOne.email); //kanishka@example.com
console.log(userTwo.email); //kdw@gmail.com
