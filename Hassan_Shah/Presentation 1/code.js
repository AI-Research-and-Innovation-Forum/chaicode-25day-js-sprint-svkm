// var is hoisted and initialized with undefined
console.log(myVar); // undefined
var myVar = "I am var";


// let is hoisted but stays in TDZ until declaration
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = "I am let";


// const is hoisted but stays in TDZ until declaration
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = "I am const"; 