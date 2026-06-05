# Day 04 - JavaScript Notes

## Lecture 08: Comparison Operators

### Basic Comparisons

```javascript
console.log(2 > 1);   // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 === 1); // false
console.log(2 != 1);  // true
console.log(2 !== 1); // true
```

Comparison operators return Boolean values (`true` or `false`).

---

## Comparison Between Different Data Types

```javascript
console.log("2" > 1);   // true
console.log("02" > 1);  // true
```

JavaScript automatically converts strings into numbers during comparison.

### Important

Avoid comparing different data types because JavaScript performs implicit type conversion which may lead to unexpected results.

---

## Null Comparisons

```javascript
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true
```

### Why?

* Equality (`==`) and comparison operators (`>`, `<`, `>=`, `<=`) work differently.
* Comparisons convert `null` into `0`.
* Equality does not.

This creates confusing results.

---

## Undefined Comparisons

```javascript
console.log(undefined > 0);   // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false
```

All comparisons with `undefined` return `false`.

---

## Double Equal vs Triple Equal

### Loose Equality (`==`)

```javascript
console.log("2" == 2); // true
```

Performs type conversion before comparison.

---

### Strict Equality (`===`)

```javascript
console.log("2" === 2); // false
```

Checks:

* Value
* Data Type

No type conversion happens.

### Best Practice

Always prefer:

```javascript
===
```

instead of:

```javascript
==
```

---

# Lecture 09: Data Types Summary

JavaScript data types are divided into:

1. Primitive Types
2. Reference (Non-Primitive) Types

---

## Primitive Data Types

Primitive values are copied by value.

### 1. Number

```javascript
const score = 100;
const scoreValue = 100.3;
```

---

### 2. String

```javascript
const name = "Deep";
```

---

### 3. Boolean

```javascript
const isLoggedIn = false;
```

---

### 4. Null

```javascript
const outsideTemp = null;
```

Represents an intentionally empty value.

---

### 5. Undefined

```javascript
let userEmail;
```

Variable exists but has no assigned value.

---

### 6. Symbol

Used to create unique values.

```javascript
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false
```

Every Symbol is unique.

---

### 7. BigInt

Used for very large integers.

```javascript
const bigNumber = 12345678901234567890n;
```

Adding `n` makes it a BigInt.

---

# Reference (Non-Primitive) Types

Reference types are stored by reference.

---

## Array

```javascript
const heros = ["Shaktiman", "Bheem", "Doremon"];
```

---

## Object

```javascript
const myObj = {
    name: "Deep",
    age: 21
};
```

---

## Function

```javascript
const myFunction = function() {
    console.log("Hello World");
}
```

Functions can be stored inside variables.

---

# JavaScript is Dynamically Typed

```javascript
let value = 100;

value = "Hello";
value = true;
```

No need to explicitly define data types.

---

# typeof Operator

Used to check the type of a value.

```javascript
typeof 100;          // number
typeof "Deep";        // string
typeof true;         // boolean
typeof undefined;    // undefined
typeof Symbol();     // symbol
typeof 10n;          // bigint
```

---

## Special Cases

### typeof null

```javascript
typeof null
```

Output:

```javascript
"object"
```

This is a famous JavaScript quirk and interview question.

---

### typeof Array

```javascript
typeof []
```

Output:

```javascript
"object"
```

Arrays are objects internally.

Check arrays using:

```javascript
Array.isArray(arr);
```

---

### typeof Function

```javascript
typeof function(){}
```

Output:

```javascript
"function"
```

---

# Quick Revision Table

| Value        | typeof Output |
| ------------ | ------------- |
| "Hello"      | string        |
| 100          | number        |
| true         | boolean       |
| undefined    | undefined     |
| Symbol()     | symbol        |
| 10n          | bigint        |
| null         | object        |
| []           | object        |
| {}           | object        |
| function(){} | function      |

---

# Key Takeaways

* Prefer `===` over `==`.
* Avoid comparing different data types.
* `null` and `undefined` behave differently.
* JavaScript has 7 Primitive Data Types.
* Arrays, Objects and Functions are Reference Types.
* JavaScript is Dynamically Typed.
* `typeof null` returns `"object"`.
* Arrays are objects internally.
* Clean and readable code is more important than tricky code.
