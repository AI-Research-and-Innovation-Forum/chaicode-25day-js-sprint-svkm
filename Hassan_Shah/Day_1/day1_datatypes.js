// 1. Strict Mode
// Use 'use strict' to treat all JS code as the newer version of the language.
"use strict";

// 2. Alert (Note: Works in browsers, not in Node.js environment)
// alert(3 + 3);

// 3. Code Readability
// Poor readability example (avoid this):
//console.log(3 + 3) console.log("Hitesh")

// Good readability example:
console.log(3 + 3);
console.log("Hitesh");

// 4. Datatypes
let name = "Hitesh";      // String
let age = 18;             // Number
let isLoggedIn = false;   // Boolean

// Special Datatypes
let state;                // undefined (value not assigned yet)
let temperature = null;   // null (standalone value, representation of empty)

// Symbol - used for uniqueness (often in React)

// 5. Checking Types using 'typeof'
console.log(typeof "Hitesh");    // "string"
console.log(typeof age);         // "number"
console.log(typeof null);        // "object" (often considered a language error)
console.log(typeof undefined);   // "undefined"