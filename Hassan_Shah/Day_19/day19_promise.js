// ==========================================
// Video 1: Promise in javascript
// ==========================================

// Create a new Promise object and store it in the variable 'promiseOne'
const promiseOne = new Promise(function(resolve, reject){
    // Simulate an asynchronous task (like a DB call) taking 1 second
    setTimeout(function(){
        // Log a message when the async task finishes
        console.log('Async task is complete');
        // Call resolve() to mark the promise as fulfilled successfully
        resolve();
    }, 1000)
})

// Consume the promise using .then(), which executes when resolve() is called
promiseOne.then(function(){
    // Log a message indicating the promise was successfully handled
    console.log("Promise consumed");
})

// ------------------------------------------

// Create a new Promise directly without assigning it to a variable
new Promise(function(resolve, reject){
    // Simulate async task taking 1 second
    setTimeout(function(){
        // Log task completion
        console.log("Async task 2");
        // Mark as fulfilled
        resolve();
    }, 1000)
// Chain .then() immediately to the newly created Promise
}).then(function(){
    // Log success message
    console.log("Async 2 resolved");
})

// ------------------------------------------

// Create a promise to demonstrate passing data through resolve()
const promiseThree = new Promise(function(resolve, reject){
    // Simulate an async delay
    setTimeout(function(){
        // Pass an object with user data into resolve()
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

// Consume the promise and catch the passed data as the parameter 'user'
promiseThree.then(function(user){
    // Log the received user object to the console
    console.log(user);
})

// ------------------------------------------

// Create a promise to demonstrate rejection and method chaining
const promiseFour = new Promise(function(resolve, reject){
    // Simulate async delay
    setTimeout(function(){
        // A flag to simulate whether an error occurred (true = error, false = success)
        let error = true; 
        
        // If no error occurred, resolve with user credentials
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            // If an error occurred, reject the promise with an error message
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// Consume promiseFour using method chaining
promiseFour
// First .then() receives the user object (if resolved)
.then((user) => {
    // Log the entire user object
    console.log(user);
    // Return just the username string to pass it to the next .then()
    return user.username;
})
// Second .then() receives the 'username' string returned from the previous step
.then((username) => {
    // Log just the username
    console.log(username);
})
// .catch() executes if reject() was called or if any error was thrown in the chain
.catch(function(error){
    // Log the error message
    console.log(error);
})
// .finally() always executes at the end, regardless of resolve or reject
.finally(() => console.log("The promise is either resolved or rejected"))

// ------------------------------------------

// Create a promise to be consumed using async/await syntax
const promiseFive = new Promise(function(resolve, reject){
    // Simulate async delay
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            // Reject if error is true
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// Define an asynchronous function to use the 'await' keyword
async function consumePromiseFive(){
    // Use a try block to handle the successful resolution
    try {
        // Pause execution until promiseFive resolves, storing the result in 'response'
        const response = await promiseFive;
        // Log the response
        console.log(response);
    // Use a catch block to handle rejection (errors)
    } catch (error) {
        // Log the error
        console.log(error);
    }
}
// Execute the async function
consumePromiseFive()

// ------------------------------------------

// Async function to fetch real data from a public API
async function getAllUsers(){
    try {
        // Await the fetch network request to complete and store the response
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // Await the parsing of the JSON body (response.json() returns a promise too)
        const data = await response.json()
        // Log the parsed JSON data
        console.log(data);
    } catch (error) {
        // Catch and log any network errors
        console.log("E: ", error);
    }
}
// Execute the API fetch function
getAllUsers()

// ------------------------------------------

// Fetch the same data using traditional .then() chaining instead of async/await
fetch('https://jsonplaceholder.typicode.com/users')
// First .then() receives the network response object
.then((response) => {
    // Parse the JSON and return the new promise to the next chain
    return response.json()
})
// Second .then() receives the fully parsed JSON data
.then((data) => {
    // Log the data
    console.log(data);
})
// Catch any network errors in the process
.catch((error) => console.log(error))
