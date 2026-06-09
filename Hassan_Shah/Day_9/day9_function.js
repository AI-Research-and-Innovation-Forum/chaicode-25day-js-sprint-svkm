function calculateCartPrice(...num1) { // Bundles arguments into an array (Rest operator)
    return num1 // Returns the array
} // Ends function

console.log(calculateCartPrice(200, 400, 500)) // Logs: [200, 400, 500]


function calculateCartPrice(val1, val2, ...num1) { // 2 standard params, 1 rest param
    return num1 // Returns remaining arguments
} // Ends function

console.log(calculateCartPrice(200, 400, 500, 2000)) // Logs: [500, 2000]


const user = { // Declares an object
    username: "Hassan", // String property
    price: 199 // Number property
} // Ends object

function handleObject(anyobject){ // Accepts an object param
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Logs object properties
} // Ends function

handleObject(user) // Passes 'user' object


handleObject({ // Passes inline object
    username: "hs", // Inline string
    price: 399 // Inline number
}) // Ends function call


const myNewArray = [200, 400, 100, 600] // Declares a number array

function returnSecondValue(getArray){ // Accepts an array param
    return getArray[1] // Returns 2nd element (index 1)
} // Ends function

console.log(returnSecondValue(myNewArray)); // Logs: 400
console.log(returnSecondValue([200, 400, 500, 1000])); // Logs inline array result: 400
