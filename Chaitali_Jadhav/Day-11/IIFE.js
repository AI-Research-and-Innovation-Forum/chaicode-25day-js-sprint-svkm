// Immediately Invoked function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//; bez second run nahi hoga

// first () where we are going to write function def
// second () execution call (for ex : chai())

// interview perpose : what is IIFE ?
// Global scope pollution can sometimes create issues in a program.
// To prevent variables from polluting the global scope and causing conflicts, we use an IIFE (Immediately Invoked Function Expression).

( (name) =>  {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`); 
})('hitesh') //parameter





