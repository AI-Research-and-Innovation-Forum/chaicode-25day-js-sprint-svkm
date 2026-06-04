# Day 02 - JavaScript Variables and Data Types

## Lecture 4: Why to learn JavaScript?

### What I learned

* We are not learning JavaScript just for learning new language or coding.
* We are learning JavaScript for building projects and products.
* Goal is to build real projects like ecommerce website.
* Example ecommerce websites are Swiggy, Zomato, Flipkart etc.
* To get user information, we use registration form.
* First topic we learned is variables and constants.

---

## Variables and Constants

### What is variable?

* Variable means a value which can be changed.
* In JavaScript, we can declare variables using `let` and `var`.

### What is constant?

* Constant means a value which cannot be changed.
* In JavaScript, we use `const` for constant values.

---

## How to declare variables?

Example:

```js
const accountId = 144533;
let accountEmail = "kdw@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
```

### Important point

```js
accountId = 2;
```

* This is not allowed because `accountId` is declared using `const`.
* `const` value cannot be changed.

---

## Printing values

To print one value:

```js
console.log(accountId);
```

To print multiple values in table format:

```js
console.table([accountId, accountEmail, accountPassword, accountCity]);
```

---

## Scope Problem

* Before there was problem in JavaScript related to scope.
* Scope means `{ }`.
* Scope problem was mainly in `var`.
* That is why now we use `let`.

---

## Comments in JavaScript

### Single line comment

```js
// This is single line comment
```

### Multi line comment

```js
/*
This is
multi line comment
*/
```

---

## Important Notes

* Prefer not to use `var` to declare variable.
* Because there is issue in block scope and functional scope.
* Do not declare variable without `let`, because it is not good practice.
* If we declare variable name and do not assign any value, then its value is `undefined`.

Example:

```js
let accountState;
console.log(accountState);
```

Output:

```text
undefined
```

---

## Lecture 5: Strict Mode and Data Types

### What I learned

* `"use strict";` is used to treat all JavaScript code as newer version.
* Code should be highly readable.
* We should not write confusing code.

Example of not good readable code:

```js
console.log(3
+
3);
```

* We can use TC39 and MDN documentation for JavaScript.

---

## Data Types in JavaScript

### Main data types

* string
* number
* bigint
* boolean
* null
* undefined
* symbol
* object

---

## String

* String is written inside quotes.
* We can use double quotes or single quotes.

Example:

```js
let name = "Kanishka";
let city = 'Dhule';
```

---

## Number

* Number is used for numeric values.
* Number range is around `2^53`.

Example:

```js
let age = 21;
```

---

## BigInt

* BigInt is used for very big numbers.
* It is more than normal number range.

---

## Boolean

* Boolean means true or false.

Example:

```js
let isLoggedIn = true;
```

---

## Null

* `null` is a standalone value.
* Type of null is object.

Example:

```js
let temperature = null;
console.log(typeof temperature);
```

---

## Undefined

* Undefined means value is not assigned.
* Type of undefined is undefined.

Example:

```js
let state;
console.log(state);
console.log(typeof state);
```

---

## Symbol

* Symbol is used for unique values.

---

## typeof

* `typeof` is used to check type of variable.

Example:

```js
let age = 21;
console.log(typeof age);
```

---

## Today's Practice Code

```js
"use strict";

const accountId = 144533;
let accountEmail = "kdw@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

let accountState;
console.log(accountState);

let name = "Kanishka";
let age = 21;
let isLoggedIn = true;
let temperature = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof temperature);
console.log(typeof accountState);
```

---

## Summary

Today I learned why we are learning JavaScript.
We are learning JavaScript not just for coding, but for building projects and products.

In Lecture 4, I learned about variables, constants, `let`, `const`, and `var`.
I also learned about scope problem in `var`, so we should prefer `let` and `const`.

In Lecture 5, I learned about `"use strict";`, code readability, TC39 and MDN documentation.
I also learned about data types in JavaScript like string, number, bigint, boolean, null, undefined, symbol and object.

Day 02 completed successfully.
