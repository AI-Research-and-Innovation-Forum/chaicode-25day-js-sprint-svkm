console.log("2">1) // true
console.log("2"<1) // false
console.log("2"==2) // true
console.log("2"===2) // false

//js automatically convert string to number in comparison and equality operator except strict equality operator

console.log(null > 0);  // false  // null converted to 0 in number conversion and in comparison it is considered as less than any number

console.log(null == 0); // false // null is only equal to undefined in equality operator and not equal to any other value

console.log(null >= 0); // true     // null is considered as 0 in number conversion and in comparison it is considered as less than any number but in greater than equal to it is considered as equal to 0


console.log(undefined > 0);  // false
console.log(undefined == 0);    // false
console.log(undefined >= 0);    // false    


 
// === strict equality operator
// == equality operator
console.log(0 == false) // true
console.log(0 === false) // false cuz 0 is number and false is boolean, in strict equality operator it does not perform type conversion and directly returns false because of different data types