const score = 400
console.log(score)              //400

const balance = new Number(100.46333333322222222223333333222222)
console.log(balance)             //[Number: 100]

console.log(balance.toString().length) //100 convert into string and then apply string methods.
console.log(balance.toFixed(20))

console.log(1 + +"2");    //3  +"2" is converted into number

const otherNumber1 = 23.895
console.log(otherNumber1.toPrecision(3)) //23.3

const otherNumber2 = 123.895
console.log(otherNumber2.toPrecision(3)) //124

const otherNumber3 = 1123.895
console.log(otherNumber3.toPrecision(3)) //1.12e+3

const hundred = 10000000
console.log(hundred.toLocaleString()) //10,000,000 
//here the comma is according to US standards (group of 3)

console.log(hundred.toLocaleString("en-IN")) //1,00,00,000
//this is according to Indian Standards (group of 2)

console.log(Number.MAX_VALUE) //1.7976931348623157e+308
console.log(Number.MIN_VALUE) //5e-324


// //+++++++++++++ Maths +++++++++++++++++++++++++++++++++

console.log(Math) //Object
console.log(Math.abs(-4)) //4
console.log(Math.round(2.3)) //2
console.log(Math.ceil(2.3)) //3
console.log(Math.floor(2.7)) //2
console.log(Math.min(2 , 4 ,5 ,7)) //2
console.log(Math.max(2 , 4 ,5 ,7)) //7

console.log(Math.random()) //gives random value bwt 0 and 1
console.log((Math.floor(Math.random()) *10) + 1) //1


const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
