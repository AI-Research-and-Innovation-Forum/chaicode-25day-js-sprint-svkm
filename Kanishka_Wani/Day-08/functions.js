


function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("K");
    console.log("A");
}


//sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }

function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username)// if(username === undefined)
    {
        console.log("Please enter a username");
        return // to avoid executing after blank username
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Kanishka"));//Kanishka just logged in
//console.log(loginUserMessage());//undefined


function calculateCartPrice(val1,val2, ...num1){
     return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
 
const user = {
    username: "kanishka",
    prices: 199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} and price id ${anyObject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,500,100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500, 100, 900]));
