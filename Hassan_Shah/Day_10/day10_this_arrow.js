// The 'this' Keyword and Arrow Functions

const user = {
  // Creates an object literal named 'user'
  username: "Hassan", // Defines the 'username' property
  price: 999, // Defines the 'price' property

  welcomeMessage: function () {
    // Defines a method inside the object
    console.log(`${this.username} welcome`); // Uses 'this' to access the object's current username
    console.log(this); // Logs the entire current object context
  },
};

user.welcomeMessage(); // Method call uses the default 'user' context ("Hassan")
user.username = "sam"; // Mutates the 'username' property of the object
user.welcomeMessage(); // Method call reflects the updated context ("sam")

console.log(this); // Logs the global context (Returns an empty object '{}' in Node.js)

function chai() {
  // Standard standalone function declaration
  let username = "Hassan"; // Declares a local variable
  console.log(this.username); // Logs 'undefined' ('this' does not map to local variables here)
}
chai(); // Executes the 'chai' function

const chaiArrow = () => {
  // Declares an arrow function
  let username = "Hassan"; // Declares a local variable
  console.log(this); // Logs an empty object '{}' in Node (lexical 'this' binding)
};
chaiArrow(); // Executes the arrow function

const addTwoNums = (num1, num2) => {
  // Basic arrow function with block body { }
  return num1 + num2; // Explicitly requires the 'return' keyword
};

const addTwoImplicit = (num1, num2) => num1 + num2; // Implicit return (single line, no braces, no 'return' keyword)

const addTwoParen = (num1, num2) => (num1 + num2); // Implicit return wrapped safely in parentheses

const returnObj = (num1, num2) => ({ name: "Hassan" }); // Returning an object implicitly requires wrapping it in parentheses
