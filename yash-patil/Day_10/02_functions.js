function calculateCartValue(...num1){  //rest operator
    //it is used to gather multiple values into a single variable.
    return num1
}
//spread operator-->It is used to take values out of an array or object and spread them.
// console.log(calculateCartValue(200,4,300,1000))

const user={
    username:"yash",
    price:999   
}
function handleObject(anyObject){
    console.log(`username: ${anyObject["username"]} and price: ${anyObject["price"]}`);
    
}
// handleObject(user)
// handleObject({
//     username:"nishant",
//     price:699
// })

const array=[123,89,67,444]
function handleArray(anyArray){
    console.log(`2nd element of array: ${anyArray[1]}`);
}
handleArray(array)
//can pass array,object in function as argument