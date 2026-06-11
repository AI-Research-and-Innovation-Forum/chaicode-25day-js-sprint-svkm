# Day 02 Notes

## Lecture 04 – Variables & Constants

### What I Learned

* JavaScript uses variables to store data.
* `const` is used for values that should not change.
* `let` is used when values need to be updated later.
* `var` exists but is not preferred because of scope-related issues.
* Learned how to print values using `console.log()`.
* Used `console.table()` to display multiple values clearly.
* Understood `undefined` when a variable is declared but not assigned a value.

### Key Difference

* `const` → fixed value (cannot be changed)
* `let` → value can be updated
* `var` → old way, avoid using in modern JavaScript

### Example

```js
const accountId = 12345
let accountEmail = "dev@gmail.com"
let city = "Nashik"

city = "Pune"

console.log(city)
```

---

## Lecture 05 – Data Types

### What I Learned

* JavaScript has different data types to store different kinds of values.
* Learned about:

  * String → text values
  * Number → numeric values
  * Boolean → true/false values
  * Null → intentional empty value
  * Undefined → value not assigned
  * BigInt → very large numbers
  * Symbol → unique values

### Important Concepts

* `"use strict"` helps follow modern JavaScript rules.
* `alert()` works in browsers but not in Node.js.
* `typeof` is used to check the type of data.

### Example

```js
let name = "Dev"
let age = 20
let isLoggedIn = true
let score

console.log(typeof name)
console.log(typeof age)
console.log(typeof isLoggedIn)
console.log(typeof score)
```

### Day 02 Takeaway

Today I learned how JavaScript stores and handles data using variables, constants, and data types. Also understood why `const` and `let` are preferred over `var`.
# Day 02 Notes

## Lecture 04 – Variables & Constants

### What I Learned

* JavaScript uses variables to store data.
* `const` is used for values that should not change.
* `let` is used when values need to be updated later.
* `var` exists but is not preferred because of scope-related issues.
* Learned how to print values using `console.log()`.
* Used `console.table()` to display multiple values clearly.
* Understood `undefined` when a variable is declared but not assigned a value.

### Key Difference

* `const` → fixed value (cannot be changed)
* `let` → value can be updated
* `var` → old way, avoid using in modern JavaScript

### Example

```js
const accountId = 12345
let accountEmail = "dev@gmail.com"
let city = "Nashik"

city = "Pune"

console.log(city)
```

---

## Lecture 05 – Data Types

### What I Learned

* JavaScript has different data types to store different kinds of values.
* Learned about:

  * String → text values
  * Number → numeric values
  * Boolean → true/false values
  * Null → intentional empty value
  * Undefined → value not assigned
  * BigInt → very large numbers
  * Symbol → unique values

### Important Concepts

* `"use strict"` helps follow modern JavaScript rules.
* `alert()` works in browsers but not in Node.js.
* `typeof` is used to check the type of data.

### Example

```js
let name = "Dev"
let age = 20
let isLoggedIn = true
let score

console.log(typeof name)
console.log(typeof age)
console.log(typeof isLoggedIn)
console.log(typeof score)
```

### Day 02 Takeaway

Today I learned how JavaScript stores and handles data using variables, constants, and data types. Also understood why `const` and `let` are preferred over `var`.
