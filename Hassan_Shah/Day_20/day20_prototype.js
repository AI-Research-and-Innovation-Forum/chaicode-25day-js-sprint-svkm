// --- Functions are Objects Behind the Scenes ---
function multiplyBy5(num){                              // Declaring a standard function
    return num * 5;                                     // Returning basic multiplication
}

multiplyBy5.power = 2;                                  // Injecting a property directly into the function like an object
console.log(multiplyBy5(5));                            // Executes normally, prints 25
console.log(multiplyBy5.power);                         // Accesses the custom property, prints 2
console.log(multiplyBy5.prototype);                     // Prints empty object {} (default prototype context)

// --- Prototypal Injection ---
function createUser(username, score){                   // Constructor function
    this.username = username;                           // Binding username parameter to the object instance
    this.score = score;                                 // Binding score parameter to the object instance
}

createUser.prototype.increment = function(){            // Injecting a new method into createUser's prototype
    this.score++;                                       // Increments the score of whoever called the method (this)
};

createUser.prototype.printMe = function(){              // Injecting another method into the prototype
    console.log(`score/price is ${this.score}`);        // Prints the instance-specific score
};

const chai = new createUser("chai", 25);                // Instantiating with 'new' binds prototype features to 'chai'
const tea = new createUser("tea", 250);                 // Instantiating second object
chai.printMe();                                         // Successfully calls the injected prototype method

// --- Global Prototype Object Manipulation ---
let myHeros = ["thor", "spiderman"];                    // Declaring an array
let heroPower = {                                       // Declaring an object literal
    thor: "hammer",                                     // Setting a property
    spiderman: "sling",                                 // Setting a property
    getSpiderPower: function(){                         // Setting a method
        console.log(`Spidey power is ${this.spiderman}`);// Referencing current context
    }
};

Object.prototype.hitesh = function(){                   // Injecting a method directly at the top-level Object prototype
    console.log("hitesh is present in all objects");    // This log will now be accessible by practically everything
};

Array.prototype.heyHitesh = function(){                 // Injecting a method specifically into the Array prototype
    console.log("Hitesh says hello");                   // This log is only accessible by arrays
};

heroPower.hitesh();                                     // Works, because heroPower is an Object
myHeros.hitesh();                                       // Works, because Arrays are Objects down the prototype chain
myHeros.heyHitesh();                                    // Works, because myHeros is an Array
// heroPower.heyHitesh();                               // Fails/Errors! heroPower is an Object and cannot access Array prototypes

// --- Prototypal Inheritance ---
const User = { name: "chai", email: "chai@google.com" };// Base object
const Teacher = { makeVideo: true };                    // Object
const TeachingSupport = { isAvailable: false };         // Object

const TASupport = {                                     // Object
    makeAssignment: 'JS assignment',                    // Setting property
    fullTime: true,                                     // Setting property
    __proto__: TeachingSupport                          // Older syntax: TASupport inherits properties from TeachingSupport
};

Teacher.__proto__ = User;                               // Older syntax: Teacher inherits User properties

Object.setPrototypeOf(TeachingSupport, Teacher);        // Modern Syntax: TeachingSupport inherits from Teacher

// --- Real-world Practical Prototype Example ---
let anotherUsername = "ChaiAurCode     ";               // A string with trailing spaces

String.prototype.trueLength = function(){               // Injecting custom method to all Strings globally
    console.log(`True length is: ${this.trim().length}`);// 'this' points to the string calling the method, trimming it
};

anotherUsername.trueLength();                           // Custom method works on the variable
"hitesh".trueLength();                                  // Custom method works on literal strings instantly
"iceTea".trueLength();                                  // Custom method works on literal strings instantly
