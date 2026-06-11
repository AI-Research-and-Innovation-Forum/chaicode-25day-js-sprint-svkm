

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("P");
    console.log("E");
    console.log("R");
}

// sayMyName()

// function addTwoNumber(num1, num2){

//     console.log(num1 + num2);
    
// }

function addTwoNumber(num1, num2){

    // let result = num1 + num2
    // return result
    return num1 + num2
    
}

const result = addTwoNumber(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please Enter A Username");
        return
    }
    return `${username} Just Logged in`
}

// console.log((loginUserMessage("Super")))
console.log((loginUserMessage("Super")))




