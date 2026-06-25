/* # Video 1: Call and `this` in Javascript

## Description
This script demonstrates the problem of execution contexts when a function is called inside another function, and how the `.call()` method solves it by passing the current `this` context to another function.
*/

function SetUsername(username) {
    // Simulating complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    /*
    ## Using `.call()`
    If we just invoke `SetUsername(username)`, the `username` property gets set on the global object (or undefined), and the execution context disappears. 
    By using `.call(this, username)`, we hold the reference and explicitly pass the current function's `this` context to `SetUsername`.
    */
    SetUsername.call(this, username);
    
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
