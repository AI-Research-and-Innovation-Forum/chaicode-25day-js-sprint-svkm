// LEXICAL SCOPING EXAMPLE
function outer() {
    let username = "hitesh"; // Variable defined in outer scope
    
    // console.log(secret); // Outer functions cannot access variables from their inner child functions

    function inner() {
        let secret = "my123";
        // Inner functions have access to outer scope variables
        console.log("inner", username); 
    }

    function innerTwo() {
        console.log("innerTwo", username); // Can also access outer scope
        // console.log(secret); // Sibling scopes cannot access each other's variables
    }

    inner();
    innerTwo();
}

outer();


// CLOSURE EXAMPLE
function makeFunc() {
    const name = "Mozilla";
    
    function displayName() {
        console.log(name); // Uses variable from lexical scope
    }
    
    // Returning the function passes its entire lexical scope, preventing memory cleanup of 'name'
    return displayName; 
}

const myFunc = makeFunc();
myFunc(); // Will successfully log "Mozilla"


// PRACTICAL CLOSURE EXAMPLE (Real World Implementation)
/*
// Original Non-Dry Problem:
document.getElementById("orange").onclick = function() {
    document.body.style.backgroundColor = "orange";
};
document.getElementById("green").onclick = function() {
    document.body.style.backgroundColor = "green";
};
*/

// Using closure to create a generic Click Handler
function clickHandler(color) {
    // Returning a new function definition allows 'onclick' to have an executable reference
    // The inner function remembers the 'color' argument via closure!
    return function() {
        document.body.style.backgroundColor = `${color}`;
    };
}

// We bind the events by invoking the handler, effectively returning the isolated inner scope function 
document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");
