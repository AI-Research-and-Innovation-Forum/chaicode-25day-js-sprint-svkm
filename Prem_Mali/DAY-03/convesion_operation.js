let value = 33
console.log(typeof value) // number

let value = "33"
console.log(typeof value) // string


let valueInNumber= Number("33")
console.log(typeof valueInNumber) // number

let value= "33abcc"
let valueInNumber= Number("33abcc")
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // NaN

let value= null
let valueInNumber= Number(null)
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // 0 // null is considered as 0 in number conversion 

let value= undefined
let valueInNumber= Number(undefined)
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // NaN // undefined is considered as NaN in number conversion

let value= "premmmmm"
let valueInNumber= Number("premmmmm")
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // NaN


// "33"=> 33
// "33abcc" => NaN
// null => 0
// undefined => NaN
// "premmmmm" => NaN

let isLoggedIn = true
let isLoggedInInNumber = Boolean(isLoggedIn)
console.log(typeof isLoggedInInNumber) // boolean
console.log(isLoggedInInNumber) // true

let isLoggedIn = 0
let isLoggedInInBoolean = Boolean(isLoggedIn)
console.log(typeof isLoggedInInBoolean) // boolean
console.log(isLoggedInInBoolean) // false

let isLoggedIn = 1
let isLoggedInInBoolean = Boolean(isLoggedIn)
console.log(typeof isLoggedInInBoolean) // boolean
console.log(isLoggedInInBoolean) // true

let isLoggedIn = "prem"
let isLoggedInInBoolean = Boolean(isLoggedIn)
console.log(typeof isLoggedInInBoolean) // boolean
console.log(isLoggedInInBoolean) // true

let isLoggedIn = ""
let isLoggedInInBoolean = Boolean(isLoggedIn)
console.log(typeof isLoggedInInBoolean) // boolean
console.log(isLoggedInInBoolean) // false

// true => 1
// false => 0
// 0 => false
// 1 => true
// "prem" => true
// "" => false


let value = 33
let valueInString = String(value)
console.log(typeof valueInString) // string
console.log(valueInString) // "33"