//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // number literal syntax, it can be an integer or a float, both are of type number
const scoreValue = 100.3 // both are of type number, there is no separate type for integer and float in javascript

const isLoggedIn = false // boolean can only have two values true or false
const outsideTemp = null // null is an assignment value, it can be assigned to a variable as a representation of no value. It is of type object
let userEmail; // undefined

const id = Symbol('123')// symbol literal syntax, description is optional and only for debugging purpose
const anotherId = Symbol('123') // even if the description is same, they are unique and different symbols

console.log(id === anotherId);// false, each symbol is unique even if the description is same   

const bigNumber = 3456543576654356754n // bigint literal syntax, n at the end to denote bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["IRONMAN", "HULK", "THOR"];// array literal syntax
let myObj = {
    name: "VIRU",   
    age: 20,
}                    // object literal syntax

const myFunction = function(){ // function expression syntax
    console.log("Hello world"); // function body
}

console.log(typeof anotherId);// symbol
console.log(typeof bigNumber);// bigint
