// if
// const userLoggedIn = true
const temperature = 39

if(temperature <= 39 ){
    // console.log("Temperature is less than 40");
} else {
    // console.log("Temperature is More than 40");
}

// comparison operators :
// < , > , <= , >= , == , === , !=

const score = 200

if(score>100){
    const power = "fly"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);

const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2"); // Not readable ,not a good practice

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}