// --- 1. Basic Control Flow (if / else) ---

// Assigning a boolean value to simulate user state
const isUserLoggedIn = true;

// Basic if-statement syntax checking if a given condition evaluates to true
if (true) { console.log("Inside the scope"); }

// Comparison operator '<' checks if a value is strictly less than another
if (2 < 2) { console.log("Executed"); }

// Not equal to operator '!=' checks for inequality
if (3 != 2) { console.log("Correct statement"); }

// Strict equality '===' checks both the value and the data type
if (2 === "2") { console.log("Will not execute because types differ"); }


// --- 2. Block Scope and Nested Conditions ---

// Scoped variable declaration using 'let' ensures the variable doesn't leak globally
let power = "fly";
let balance = 1000;

// Implicit short-hand notation for a single-line if statement without curly braces
if (balance > 500) console.log("Test executed");

// Checking multiple fallback conditions using else-if
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    // Executes if the previous block is false and this condition is true
    console.log("less than 750"); 
} else {
    // Default fallback if all conditions above fail
    console.log("less than 1200");
}


// --- 3. Logical Operators ---

let debitCard = true;
let loggedInFromGoogle = false;
let loggedInFromEmail = true;

// Logical AND (&&) requires all provided conditions to evaluate to true
if (isUserLoggedIn && debitCard && 2 == 2) { console.log("Allow course purchase"); }

// Logical OR (||) requires at least one condition to evaluate to true
if (loggedInFromGoogle || loggedInFromEmail) { console.log("User logged in successfully"); }


// --- 4. Switch Statements ---

let month = 1;

// Switch blocks are used to match a specific key against multiple specific values
switch (month) {
    case 1:
        // Executes if 'month' strictly matches 1
        console.log("January");
        // Break statement terminates the switch block and prevents fall-through
        break; 
    case 2:
        console.log("February");
        break;
    default:
        // Executes if no explicitly defined cases match the key
        console.log("Default case matched");
        break;
}


// --- 5. Truthy & Falsy Validations ---

// Falsy values include: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values include: "0", 'false', " ", [], {}, function(){}

let userEmail = [];
let emptyObj = {};

// Checking if an array is empty by evaluating its length property
if (userEmail.length === 0) { console.log("Array is empty"); }

// Checking if an object is empty by evaluating the length of its derived keys array
if (Object.keys(emptyObj).length === 0) { console.log("Object is empty"); }


// --- 6. Nullish Coalescing & Ternary Operators ---

// Nullish Coalescing Operator (??) handles fallback assignments specifically for null or undefined
let val1 = 5 ?? 10;         // Assigns 5
let val2 = null ?? 10;      // Assigns 10
let val3 = undefined ?? 15; // Assigns 15

let iceTeaPrice = 100;

// Ternary Operator (? :) provides a concise one-line alternative to an if-else block
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
