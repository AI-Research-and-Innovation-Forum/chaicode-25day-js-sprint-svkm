# DAY-2

## DAY-2 is the third day of the 25 Days of Code challenge.

### tutorial 4 : Let, const and var ki kahani | chai aur #javascript
let, const and var are the three ways to declare a variable in JavaScript.
- var is function scoped and can be redeclared and updated.
- let is block scoped and can be updated but not redeclared.
- const is block scoped and cannot be updated or redeclared.


### tutorial 5 : Datatypes and ECMA standards | chai aur #javascript
In JavaScript, there are 7 primitive data types: string, number, boolean, null, undefined, symbol and bigint.
- String: A sequence of characters enclosed in single or double quotes.
- Number: A numeric value that can be an integer or a floating-point number.
- Boolean: A logical value that can be either true or false.
- Null: A special value that represents the absence of any value.
- Undefined: A special value that represents the absence of a value or an uninitialized variable.
- Symbol: A unique and immutable primitive value that can be used as a key for object properties.
- BigInt: A numeric value that can represent integers with arbitrary precision.



### tutorial 6 : Datatype conversion confusion | chai aur #javascript
In JavaScript, there are two types of type conversion: implicit and explicit.
- Implicit type conversion, also known as type coercion, occurs when JavaScript automatically converts a value from one type to another. For example, when you add a number and a string, JavaScript will convert the number to a string and concatenate them.
```javascript
let x = 10;
let y = "20";
console.log(x + y); // 1020 (string concatenation)
console.log(x + +y); // 30 (number addition)
``` 
- Explicit type conversion, also known as type casting, occurs when you manually convert a value from one type to another using built-in functions. For example, you can use the Number() function to convert a string to a number.
```javascript
let str = "123";
let num = Number(str);
console.log(num); // 123 (number)
```

[25_day_javascript_challange/README.md](../README.md)    