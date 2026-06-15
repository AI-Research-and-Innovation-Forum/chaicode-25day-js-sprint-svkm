// Switch case

switch (key) {
    case value:
        
        break;

    default:
        break;
}

const month = "march"

switch (month) {
    case "Jan":
        console.log("January"); 
        break;
    case "feb":
        console.log("February"); 
        break;
    case "march":
        console.log("march"); 
        break;
    case "april":
        console.log("april"); 
        break;

    default:
        console.log("Default case match");
        break;
}

const UserEmail = [] //"C@gmai.com"

if(UserEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
    
}


// falsy value
// false, 0 ,-0, BigInt 0n, "" , null , undefined , NaN

// truthy value
// "0" , 'false' , " " , [] , {} , function(){} 

if(UserEmail.length === 0){
    console.log("Array is empty"); 
}

const emptyObj = {}



if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

//false == 0   //true
// false == ""   //true
// 0 == ""  //true


// Nullish Coalescing Opeartor (??): null undefined

let val1;

val1 = 5 ?? 10     //5
val1 = null ?? 20  // 20
val1 = undefined ?? 25   //25
val1 = null ?? undefined ?? 20

console.log(val1);


// Terniary operator

// condition ? true : false

const iceTeaPrice = 70

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


