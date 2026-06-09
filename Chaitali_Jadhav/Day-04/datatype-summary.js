//There are 2 main types of data types
//  on the basis of how they are stored
// and accessed in memory


//1. Primitive data types

/* these PDT are call by value,
bez when you copy the value of a PDT, 
it creates a new copy of that value in memory.
*/

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100 //number
const scoreVlaue = 100.5 //number

const IsLoggedIn = false //boolean
const outsideTemp = null 
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 9007199254740991994949n; //bigInt


//2. Reference type(Non-primitive)

// Array , Objects , Functions

const heros = ["shaktiman", "doga", "nagraj"] ;

let myObj = {
    name : "chaitali",
    age : 19
}

const myFunction = function(){
    console.log("hello world"); 
}

console.log(typeof heros);  //object
console.log(typeof myFunction);  //function  //it is known as object function
console.log(typeof myObj);  //object
console.log(typeof anotherId); //symbol

//js is static or dynamic language?