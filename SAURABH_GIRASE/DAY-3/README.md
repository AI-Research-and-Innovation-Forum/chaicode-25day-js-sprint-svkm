# DAY 3

## DAY-3 is the fourth day of the 25 Days of Code challenge.

### tutorial 7 : Why string to number conversion is confusing | chai aur #javascript
In JavaScript, string to number conversion can be confusing because of the way JavaScript handles type coercion. When you try to convert a string to a number using the Number() function, it will return NaN (Not a Number) if the string cannot be converted to a valid number. However, if the string contains only whitespace characters, it will be converted to 0. For example:
```javascript
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN
console.log(Number("   ")); // 0
```
### tutorial 8 : Comparison of datatypes in javascript | chai aur #javascript
In JavaScript, when comparing two values of different data types, JavaScript will attempt to convert them to a common type before making the comparison. This can lead to unexpected results. For example:
```javascript
console.log(0 == "0"); // true (string "0" is converted to number 0)
console.log(false == "0"); // true (string "0" is converted to number 0, and false is also converted to 0)
console.log(false == 0); // true (false is converted to 0)
console.log(null == undefined); // true (null and undefined are considered equal)
``` 

### tutorial 9 : Data types of javascript summary | chai aur #javascript
In JavaScript, there are several data types, including:
- Primitive data types: string, number, boolean, null, undefined, symbol, and bigint
- Non-primitive data types: object (including arrays and functions)
Understanding the behavior of these data types is crucial for writing effective JavaScript code. For example, when comparing values of different data types, JavaScript will perform type coercion, which can lead to unexpected results. It's important to be aware of these behaviors to avoid bugs in your code.
```javascript
console.log(typeof "Hello"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("sym")); // symbol
console.log(typeof 123n); // bigint
console.log(typeof {}); // object
console.log(typeof []); // object (arrays are a type of object)
console.log(typeof function(){}); // function (functions are a special type of object)
```
