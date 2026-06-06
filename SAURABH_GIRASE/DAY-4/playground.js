//****************** String in Javascript***********************

const name = "VIRU";
const repoCount = 45;

console.log(name + repoCount + " Value"); // VIRU45 Value, when we use + operator with string and number, it converts the number to string and concatenates them
console.log(name - repoCount); // NaN, when we use - operator with string and number, it tries to convert the string to number, but it fails and returns NaN (Not a Number)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is VIRU and my repo count is 45,
//  template literals allow us to embed expressions inside string literals, it is denoted by backticks `` and we can use ${} to embed expressions inside it

const gameName = new String("Viru is a good boy"); // string constructor syntax, it creates a string object, it is not a primitive string, it is an object wrapper around the primitive string, it has properties and methods that we can use to manipulate the string

console.log(gameName[0]); // V, we can access the characters of the string using index, it is zero based index, so the first character is at index 0, second character is at index 1 and so on
console.log(gameName.__proto__); // String.prototype, it is the prototype of the string object, it has all the methods that we can use to manipulate the string

console.log(gameName.length); // 21, it is a property of the string object that returns the length of the string
console.log(gameName.toUpperCase()); // VIRU IS A
console.log(gameName.charAt(2)); // r, it is a method that returns the character at the specified index
console.log(gameName.indexOf("t")); // 8, it is a method that returns the index of the first occurrence of the specified value, it returns -1 if the value is not found
console.log(gameName.lastIndexOf("o")); // 17, it is a method that returns the index of the last occurrence of the specified value, it returns -1 if the value is not found

const newString = gameName.substring(0, 4); // Viru
//  it is a method that returns the part of the string between the start and end index, it does not include the end index, if the end index is not provided, it returns the part of the string from the start index to the end of the string

console.log(newString); // Viru

const anotherString = gameName.slice(-8, 4); // it is a method that returns the part of the string between the start and end index, it does not include the end index, if the end index is not provided, it returns the part of the string from the start index to the end of the string, it can also take negative index, if the index is negative, it counts from the end of the string, so -1 is the last character, -2 is the second last character and so on
//
console.log(anotherString); // Viru, when we use negative index, it counts from the end of the string, so -8 is the 8th character from the end of the string, which is V, and 4 is the 4th character from the start of the string, which is u, so it returns the part of the string between V and u, which is Viru

const newStringOne = "   Viru    ";
console.log(newStringOne); //    Viru
// it is a string with whitespace at the beginning and end of the string, it is not visible when we print the string, but it is there in the string, it can cause issues when we try to compare the string with another string, because the whitespace is also considered as a character in the string
console.log(newStringOne.trim()); // Viru
//  it is a method that removes the whitespace from both ends of the string, it does not remove the whitespace from the middle of the string
console.log(newStringOne.trimStart()); // Viru
// it is a method that removes the whitespace from the beginning of the string, it does not remove the whitespace from the end of the string
console.log(newStringOne.trimEnd()); // Viru
// it is a method that removes the whitespace from the end of the string, it does not remove the whitespace from the beginning of the string

const url = "https://viru.com/viru%20developer";

console.log(url.replace("%20", "-")); // https://viru.com/viru-developer
// it is a method that replaces the specified value with another value in the string, it returns a new string with the replaced value, it does not change the original string, it only replaces the first occurrence of the specified value, if we want to replace all occurrences of the specified value, we can use regular expression with global flag

console.log(url.includes("jadu")); // false, it is a method that checks if the string contains the specified value, it returns true if the string contains the value, otherwise it returns false
console.log(url.startsWith("https")); // true, it is a method that checks if the string starts with the specified value, it returns true if the string starts with the value, otherwise it returns false
console.log(url.endsWith("developer")); // true, it is a method that checks if the string ends with the specified value, it returns true if the string ends with the value, otherwise it returns false

console.log(gameName.split("-")); // [ 'Viru is a good boy' ], it is a method that splits the string into an array of substrings based on the specified separator, it returns an array of substrings, if the separator is not found in the string, it returns an array with the original string as the only element
console.log(gameName.split(" ")); // [ 'Viru', 'is', 'a', 'good', 'boy' ], it splits the string into an array of substrings based on the space character as the separator, it returns an array of substrings, if the separator is not found in the string, it returns an array with the original string as the only element

//****************** Number and Maths in Javascript***********************

const score = 400;
console.log(score); // 400, it is a number literal syntax, it can be an integer or a float, both are of type number in javascript, there is no separate type for integer and float in javascript

const anotherScore = 100.3;
console.log(anotherScore); // 100.3, it is a number literal syntax, it can be an integer or a float, both are of type number in javascript, there is no separate type for integer and float in javascript

const balance = new Number(100);
console.log(balance); // [Number: 100], it is a number constructor syntax, it creates a number object, it is not a primitive number, it is an object wrapper around the primitive number, it has properties and methods that we can use to manipulate the number

console.log(balance.toString().length); // 3, it is a method that converts the number to a string and returns the length of the string, it does not change the original number, it returns a new string with the converted value
console.log(balance.toFixed(1)); // 100.0, it is a method that formats the number to a specified number of decimal places, it returns a string with the formatted number, it does not change the original number, it returns a new string with the formatted value
console.log(balance.toPrecision(3)); // 100, it is a method that formats the number to a specified length, it returns a string with the formatted number, it does not change the original number, it returns a new string with the formatted value, if the length is less than the number of digits in the number, it rounds the number to fit the specified length, if the length is greater than the number of digits in the number, it adds zeros to the end of the number to fit the specified length

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4)); // 123.9, it is a method that formats the number to a specified length, it returns a string with the formatted number, it does not change the original number, it returns a new string with the formatted value, if the length is less than the number of digits in the number, it rounds the number to fit the specified length, if the length is greater than the number of digits in the number, it adds zeros to the end of the number to fit the specified length

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000, it is a method that converts the number to a string with a language sensitive representation, it takes a locale as an argument and returns a string with the formatted number according to the specified locale, in this case it formats the number according to the Indian numbering system, which uses commas to separate the digits in groups of two after the first three digits

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // [Math: Math], it is a built-in object that has properties and methods for mathematical constants and functions, it is not a constructor, so we cannot create an instance of it, we can only use its properties and methods directly
console.log(Math.abs(-4)); // 4, it is a method that returns the absolute value of a number, it returns the non-negative value of the number, if the number is negative, it returns the positive value, if the number is positive, it returns the same value
console.log(Math.round(4.6)); // 5, it is a method that rounds a number to the nearest integer, if the fractional part of the number is 0.5 or greater, it rounds up to the next integer, otherwise it rounds down to the previous integer
console.log(Math.ceil(4.2)); // 5, it is a method that rounds a number up to the next integer, it always rounds up to the next integer, regardless of the fractional part of the number
console.log(Math.floor(4.9)); // 4, it is a method that rounds a number down to the previous integer, it always rounds down to the previous integer, regardless of the fractional part of the number
console.log(Math.min(4, 3, 6, 8)); // 3, it is a method that returns the smallest of zero or more numbers, it takes any number of arguments and returns the smallest value among them, if no arguments are provided, it returns Infinity, if any argument is not a number, it returns NaN
console.log(Math.max(4, 3, 6, 8)); // 8, it is a method that returns the largest of zero or more numbers, it takes any number of arguments and returns the largest value among them, if no arguments are provided, it returns -Infinity, if any argument is not a number, it returns NaN

console.log(Math.random()); // 0.123456789, it is a method that returns a random floating-point number between 0 (inclusive) and 1 (exclusive), it generates a random number between 0 and 1, where 0 is included and 1 is not included, the number can be any decimal value between 0 and 1, it can be used to generate random numbers in a specific range by multiplying the result with the range and adding the minimum value of the range
console.log(Math.random() * 10 + 1); // it generates a random number between 1 and 10, where 1 is included and 10 is not included, the number can be any decimal value between 1 and 10, we multiply the result of Math.random() with 10 to get a number between 0 and 10, and then we add 1 to shift the range to between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // it generates a random integer between 1 and 10, where 1 is included and 10 is included, the number can be any integer value between 1 and 10, we multiply the result of Math.random() with 10 to get a number between 0 and 10, then we add 1 to shift the range to between 1 and 10, and then we use Math.floor() to round down the number to the nearest integer, which gives us a random integer between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // it generates a random integer between min and max, where min is included and max is included, the number can be any integer value between min and max, we multiply the result of Math.random() with the range (max - min + 1) to get a number between 0 and the range, then we add min to shift the range to between min and max, and then we use Math.floor() to round down the number to the nearest integer, which gives us a random integer between min and max
