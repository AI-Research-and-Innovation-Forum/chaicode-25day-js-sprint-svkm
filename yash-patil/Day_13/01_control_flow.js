// comparision operators: <,>,<=,>=,==,===,!=,!==

//if
//if(condition){}
//if condition is true, program insode if scope will execute.


//if-else
//if(condition) { line1 } else { line2 }
//if condition is true line1 will execute, otherwise line2 will execute.

// const temp=38
// if(temp<40){
//     console.log("temperature is less than 40 degrees");
    
// }
// else{console.log("temperature is more than 40 degrees");}


const balance=1200
//implicit scope
// if (balance>1000) console.log("execute1"),console.log("execute2");//not readable and NOT RECOMMENDED

//if else-if else


// && - AND  --> (cond1&&cond2) all values are true -->true
// || - OR   --> (cond1||cond2) atleast one value true -->true


const userLoggedIn=true
const creditCard=true
if(userLoggedIn&&creditCard){
    console.log("allow to buy product")
}

const userLoggedInByGoogle=true
const userLoggedInByEmail=false
if(userLoggedInByGoogle||userLoggedInByEmail){
    console.log("access granted")
}
