// Nested functions :

function one() {
  // Defines an outer function named 'one'
  const username = "Hassan"; // Declares a constant scoped to function 'one'

  function two() {
    // Defines a nested inner function named 'two'
    const website = "youtube"; // Declares a constant scoped to function 'two'
    console.log(username); // Accesses 'username' from the parent scope (closure)
  }

  two(); // Executes the nested function 'two'
}
one(); // Executes the outer function 'one'

// console.log(username) (Error)


if (true) {
  // Starts an outer 'if' block scope
  const username = "Hassan"; // Declares 'username' inside the outer block

  if (username === "Hassan") {
    // Starts a nested 'if' block scope
    const website = " youtube"; // Declares 'website' inside the nested block
    console.log(username + website); // Concatenates and logs variables from both scopes
  }
}

console.log(addone(5)); // Works perfectly: standard function declarations are hoisted
function addone(num) {
  // Standard function declaration
  return num + 1; // Returns the incremented number
}

// console.log(addTwo(5));                      // Error: function expressions assigned to variables are not hoisted
const addTwo = function (num) {
  // Function expression stored in a variable
  return num + 2; // Returns the number plus two
};

