const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
    
}

//falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value

// "0", 'false', " ", [] , {}, function(){}

if (userEmail.length === 0) {
    console.log("array is empty");
     
}

const emptyObj = {}
if (Object.keys(emptyObj)) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10//5
// val1 = null ?? 10 //10
//val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20
console.log(val1);


//ternary operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

