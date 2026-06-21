
// --- Object Literals & "this" Keyword ---
const user = {                                          // Declaring an object literal
    username: "hitesh",                                 // Setting a string property
    loginCount: 8,                                      // Setting a number property
    signedIn: true,                                     // Setting a boolean property
    getUserDetails: function(){                         // Defining a method inside the object
        console.log(`Username: ${this.username}`);      // 'this' refers to the current object context to access 'username'
        console.log(this);                              // Logs the entire current object context
    }
};

console.log(user.username);                             // Accessing property using dot notation
console.log(user.getUserDetails());                     // Calling the object's method
console.log(this);                                      // In Node environment, global 'this' is an empty object {}

// --- Constructor Functions & the "new" Keyword ---
function User(username, loginCount, isLoggedIn){        // Defining a constructor function
    this.username = username;                           // Injecting variable into current context
    this.loginCount = loginCount;                       // Injecting variable into current context
    this.isLoggedIn = isLoggedIn;                       // Injecting variable into current context
    
    this.greeting = function(){                         // Adding a method to the constructor's context
        console.log(`Welcome ${this.username}`);        // Accessing context-specific property
    };

    return this;                                        // Implicitly returned by default, explicitly written here for clarity
}

const userOne = new User("hitesh", 12, true);           // 'new' creates an empty object and binds it to the 'this' context
const userTwo = new User("ChaiAurCode", 11, false);     // 'new' ensures userTwo is an independent instance and doesn't overwrite userOne

console.log(userOne.constructor);                       // Accessing the reference to the function that created the instance
console.log(userOne);                                   // Logs the newly created userOne object and its properties
console.log(userTwo);                                   // Logs the entirely separate userTwo object

