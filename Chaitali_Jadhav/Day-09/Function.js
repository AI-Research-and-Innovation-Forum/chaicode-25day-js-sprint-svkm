
function sayMyName(){
    console.log("C");
    console.log("h");
    console.log("a");
    console.log("i");
    console.log("t");
    console.log("a");
    console.log("l");
    console.log("i");
}

// sayMyName //reference
sayMyName()
            
function addTwoNumbers(number1 , number2){       //parameters
    console.log(number1 + number2)
}

function addTwoNumbers(number1 , number2){       //parameters
    let result = number1 + number2
    return result 
    // after return nothing print 
    
    return number1 + number2
    
}

const result = addTwoNumbers(10 , 40)   //50                   //arguments
// addTwoNumbers(10 , "40") //1040
// addTwoNumbers(10 , null ) //10
// addTwoNumbers(10 , undefined)  //NaN

console.log(result);


function loginUserMessage(Username = "Sam") {
    if(!Username){
        console.log("Please enter a username");  
        return  
    }
    return `${Username} just logged in`
}

console.log(loginUserMessage("Chaitali"))
// console.log(loginUserMessage())         //undefined

function calculateCartPrice(val1 , val2 ,...num1){   // rest operator here
    return num1
}

console.log(calculateCartPrice(200 , 300 ,40 ,50));

const user = {
    username : "hitesh" ,
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)

}

// handleObject(user)
handleObject({
    username : "Chaitali",
    price : 299
})
//we can pass directly

const myNewArray = [200 ,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 300 , 400]));












