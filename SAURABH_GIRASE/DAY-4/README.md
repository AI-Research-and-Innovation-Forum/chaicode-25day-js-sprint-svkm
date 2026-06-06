# DAY-4 

## DAY-4 is the fifth day of the 25 Days of Code challenge.

### tutorial 10 : Stack and Heap memory in #javascript

In JavaScript, memory is managed in two main areas: the stack and the heap. 
#### Stack (Primitive)
The stack is used for static memory allocation, which includes primitive data types (like numbers, strings, booleans) and function calls.

#### Heap (Non-Primitive)
The heap, on the other hand, is used for dynamic memory allocation, which includes objects and arrays. When you create an object or an array, it is stored in the heap, and a reference to that memory location is stored in the stack.

Understanding how memory works in JavaScript can help you write more efficient code and avoid memory leaks.

```javascript
// Example of stack memory
function add(a, b) {
    return a + b; // a and b are stored in the stack
}
console.log(add(2, 3)); // Output: 5
// Example of heap memory
let obj = { name: "Saurabh", age: 25 }; // obj is stored in the heap, and a reference to it is stored in the stack
console.log(obj.name); // Output: Saurabh
``` 
#### Stack vs Heap
The main difference between stack and heap memory is how they manage data.

stack gives a copy of the value to the variable, while heap gives a reference to the value. When you assign a primitive value to a variable, it is stored directly in the stack. When you assign an object or an array to a variable, a reference to that object or array is stored in the stack, while the actual object or array is stored in the heap. When you copy a primitive value, a new copy of that value is created in the stack. When you copy an object or an array, a new reference to the same object or array is created in the stack, but both references point to the same object or array in the heap. This is why when you modify an object or an array through one reference, the changes are reflected when you access it through another reference, because both references point to the same object or array in the heap. Understanding the difference between stack and heap memory is important for understanding how JavaScript manages memory and how it handles variables and data types.  


### tutorial 11 : Strings in Javascript | chai aur #javascript

#### String

In JavaScript, a string is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (``) Strings are immutable, which means that once a string is created, it cannot be changed. However, you can create a new string based on an existing string by using various string methods.

```javascript
const name = "Viru";
console.log(name[0]); // Output: V, it is a way to access individual characters in a string using their index, the index starts from 0
console.log(name.length); // Output: 4, it is a property that returns the length of the string
console.log(name.toUpperCase()); // Output: VIRU, it is a method that converts all characters in the string to uppercase
console.log(name.toLowerCase()); // Output: viru, it is a method that converts all characters in the string to lowercase
console.log(name.indexOf('r')); // Output: 2, it is a method that returns the index of the first occurrence of the specified value, it returns -1 if the value is not found
console.log(name.lastIndexOf('r')); // Output: 2, it is a method that returns the index of the last occurrence of the specified value, it returns -1 if the value is not found
```
### tutorial 12 : Number and Maths in Javascript | chai aur #javascript

#### Number and Maths
numbers in JavaScript are represented as 64-bit floating-point values, which means they can represent a wide range of values, including integers and decimals. JavaScript provides a built-in Math object that contains various methods for performing mathematical operations.

```javascript
const Number = 1000.0999;
console.log(Number.toString()); // Output: "1000.0999", it is a method that converts a number to a string
console.log(Number.toFixed(2)); // Output: "1000.10", it is a method that formats a number using fixed-point notation, in this case it formats the number to 2 decimal places
console.log(Number.toExponential(2)); // Output: "1.00e+3", it is a method that returns a string representing the number in exponential notation, in this case it formats the number to 2 decimal places
console.log(Number.toPrecision(2)); // Output: "1.0e+3", it is a method that formats a number to a specified length, in this case it formats the number to 2 significant digits
console.log(Number.toLocaleString('EN-IN'));// Output: "1,000.10", it is a method that returns a string with a language-sensitive representation of the number, in this case it formats the number according to the Indian English locale


console.log(Math.abs(-5)); // Output: 5, it is a method that returns the absolute value of a number
console.log(Math.sqrt(16)); // Output: 4, it is a method that returns the square root of a number
console.log(Math.pow(2, 3)); // Output: 8, it is a method that returns the base to the exponent power, in this case 2 raised to the power of 3
console.log(Math.sign(-5)); // Output: -1, it is a method that returns the sign of a number, it returns -1 for negative numbers, 1 for positive numbers, and 0 for zero
console.log(Math.PI); // Output: 3.141592653589793, it is a property that returns the value of pi
console.log(Math.E); // Output: 2.718281828459045, it is a property that returns the value of Euler's number
console.log(Math.round(4.7)); // Output: 5, it is a method that rounds a number to the nearest integer
console.log(Math.floor(4.7)); // Output: 4, it is a method that rounds a number down to the nearest integer
console.log(Math.ceil(4.7)); // Output: 5, it is a method that rounds a number up to the nearest integer
console.log(Math.random()); // Output: a random number between 0 and 1, it                              is a method that returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.max(1, 2, 3)); // Output: 3, it is a method that returns the largest of zero or more numbers
console.log(Math.min(1, 2, 3)); // Output: 1, it is a method that returns the smallest of zero or more numbers
```
