// Part 1: Why Math.PI cannot be changed
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor); 
/* Outputs the hidden properties:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// Attempting to overwrite it fails silently (or throws an error in strict mode)
// console.log(Math.PI);
// Math.PI = 5; 
// console.log(Math.PI); // Still outputs 3.141592653589793


// Part 2: Creating our own object and modifying its deep properties
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

// Check the default property descriptors of our 'chai' object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Modifying the hidden properties
Object.defineProperty(chai, 'name', {
    // writable: false,     // If false, the value cannot be changed
    enumerable: false       // If false, it stops participating in loops/iterations
    // configurable: false  // If false, properties cannot be deleted or re-configured
})

// Checking the updated descriptor
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Iterating over the object
for (let [key, value] of Object.entries(chai)) {
    // Prevent the function from logging out as a value
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
// Note: Because we set enumerable: false for 'name', 
// only 'price' and 'isAvailable' will be logged in this loop!
