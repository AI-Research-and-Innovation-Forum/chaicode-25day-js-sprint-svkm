// const userEmail = "s@super.ai"
const userEmail = []

if (userEmail) {
    console.log("Got User Email");
}else {
    console.log("Don't Have User Email");
}

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function() {}

// if (userEmail.length === 0) {
//     console.log("Array Is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object Is Empty");
}

// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More Than 80");

