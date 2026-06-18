

function sayMyname(){
console.log("P");
console.log("r");
console.log("a");
console.log("n");
console.log("a");
console.log("v");
}

sayMyname // Reference
sayMyname() // Execute

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}

addTwoNumbers() // No Argument NAN
addTwoNumbers(3,5) // 8
addTwoNumbers(3,"5") // 35
addTwoNumbers(3,null) // 3

// Different approach

function addtwoN(n1,n2){
    let result = n1 + n2
    return result

}

const result = addtwoN(5,6)
console.log(result);

// Another

function addtwo(nu1,nu2){
    console.log(nu1 + nu2);
    return nu1 + nu2 
}

addtwo(2,2)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}
console.log(loginUserMessage());

// Same as above function, Used ! here for condition
// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in` 
// }


function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "Pranav",
    price: 199
}

function handleobjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobjects(user) // Username is Pranav and price is 199
handleobjects({
    username: "Om",
    price: 499
})



const myNewArray = [200,300,400,500]

function reyturnSecondValue(getArray){
    return getArray[1]
}

// console.log(reyturnSecondValue(myNewArray));
console.log(reyturnSecondValue([100,199,299]));
