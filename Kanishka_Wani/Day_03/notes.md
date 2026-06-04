# Day 03 - JavaScript Conversion and Operations

## Lecture 6: Conversion of Operations

### What I learned

- Conversion of operation is nightmare topic.
- We can convert string to number using `Number()` method.
- But when we convert actual alphabetical string or wrong combination then `NaN` value is stored.
- `NaN` type is number.

---

## Number Conversion

Example:

```js
let score = "33";
let valueInNumber = Number(score);

console.log(valueInNumber);
console.log(typeof valueInNumber);
```

Output:

```text
33
number
```

### Different conversions

```js
Number("33")        // 33
Number("33abc")     // NaN
Number(true)        // 1
Number(false)       // 0
Number(undefined)   // NaN
Number(null)        // 0
```

### Notes

- `"33"` is converted into `33`.
- `"33abc"` gives `NaN`.
- `true` gives `1`.
- `false` gives `0`.
- `undefined` gives `NaN`.
- `null` gives `0`.

---

## Boolean Conversion

For boolean conversion:

```js
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);
```

### Different boolean conversions

```js
Boolean(1)       // true
Boolean(0)       // false
Boolean("")      // false
Boolean("abc")   // true
```

### Notes

- `1` converts to `true`.
- `0` converts to `false`.
- Empty string `""` converts to `false`.
- Any string like `"abc"` converts to `true`.

---

## String Conversion

For string conversion:

```js
let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);
```

### Different string conversions

```js
String(33)          // "33"
String(undefined)   // "undefined"
String(null)        // "null"
String(true)        // "true"
```

### Notes

- Number can be converted to string.
- `undefined` can be converted to `"undefined"`.
- `null` can be converted to `"null"`.
- `true` can be converted to `"true"`.

---

## Lecture 7: Operations

### What I learned

- When we use `+` with string and number, JavaScript treats others also as string.
- This is type conversion / type coercion.
- We should write clean code because confusing code gives confusing output.

---

## Examples of Operations

```js
console.log("1" + 2);       // 12
console.log(1 + "2");       // 12
console.log("1" + "2");     // 12
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "3");   // 33
```

### Notes

- `"1" + 2` gives `12`.
- `1 + "2"` gives `12`.
- `"1" + "2"` gives `12`.
- `"1" + 2 + 2` gives `122`.
- `1 + 2 + "3"` gives `33`.
- When first value is string, next values are treated as string.
- When first numbers are there, addition happens first, then string is joined.

---

## Prefix and Postfix

### Prefix operator

```js
let x = 3;
let y = ++x;

console.log(x);
console.log(y);
```

- Prefix means first increment and then return value.
- `++x` increments value first and then gives result.

### Postfix operator

```js
let a = 3;
let b = a++;

console.log(a);
console.log(b);
```

- Postfix means first return value and then increment.
- `x++` returns value first and then increments.

---

## Today's Practice Code

```js
// Number conversion

let score = "33";
let valueInNumber = Number(score);

console.log(valueInNumber);
console.log(typeof valueInNumber);

let score2 = "33abc";
let valueInNumber2 = Number(score2);

console.log(valueInNumber2);
console.log(typeof valueInNumber2);


// Boolean conversion

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

let emptyString = "";
let booleanEmptyString = Boolean(emptyString);

console.log(booleanEmptyString);


// String conversion

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);


// Operations

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "3");


// Prefix and Postfix

let x = 3;
let y = ++x;

console.log(x);
console.log(y);

let a = 3;
let b = a++;

console.log(a);
console.log(b);
```

---

## Summary

Today I learned about conversion and operations in JavaScript.

In Lecture 6, I learned how to convert values into number, boolean and string using `Number()`, `Boolean()` and `String()`.

I also learned that wrong conversion can give `NaN`, and type of `NaN` is number.

In Lecture 7, I learned about operations, string and number addition, type conversion, and prefix and postfix operators.

Day 03 completed successfully.
