//if

const isUserLoggedIn = true

const temperature = 41

if (2 == "2"){
    console.log("executed");
    
}// executed

if (2 === "2"){
    console.log("executed");
    
}//no output

// 2 == "2"
// <, >, ṇ<=, >=, ==, !=, ===, !==

if(2 !=3){
    console.log("executed");
    
}//executed

if( temperature < 50){
    console.log("less than 50"); 
}else{
    console.log("temperature is greater than 50");
}

console.log("Execute");

// const score = 200

// if (score> 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
    
// }

// console.log(`User Power: ${power}`);//error because can't acces outside of scope

const balance = 1000
 
// if (balance > 500) console.log("test"), console.log("test2");// don't use this 

if(balance < 500) {
     console.log("less than"); 
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

const userLoggedIn =true
const debitCard = true
const loggedInFromGoogle = false

const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
    
}

