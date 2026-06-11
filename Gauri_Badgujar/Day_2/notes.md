# JavaScript Notes

## Lecture 4: Variables and Constants

### Key Points

* `const` is used for values that should not be changed.
* `let` is used for variables whose values can be updated.
* Avoid using `var` because it has issues with scope.
* Modern JavaScript mainly uses `let` and `const`.
* Variables can be created without a keyword, but it is not recommended.

### Example

const accountId = 1234;
let name = "Gauri";

---

## Lecture 5: Data Types and ECMAScript Standards

### Key Points

* `"use strict"` helps write safer and cleaner JavaScript code.
* Code should be properly formatted and easy to read.
* MDN is the most commonly used JavaScript documentation.
* TC39 contains the official ECMAScript specifications.
* Common JavaScript data types:

  * Number
  * String
  * Boolean
  * Null
  * Undefined
  * Symbol
  * BigInt
* `null` represents an intentional empty value.
* `undefined` means a variable has been declared but no value has been assigned.

### Example

"use strict";

let name = "Gauri";
let age = 20;
let isLoggedIn = true;
let state = null;
let city;

---

## Lecture 6: Type Conversion

### Number Conversion

* `Number()` converts values to numbers.
* `"33"` → 33
* `"33abc"` → NaN
* `null` → 0
* `undefined` → NaN

### Boolean Conversion

* `Boolean()` converts values to true or false.
* `1` → true
* `0` → false
* `""` → false
* `"gauri"` → true
* `null` → false
* `undefined` → false
* `NaN` → false

### String Conversion

* `String()` converts values to strings.

Example:

String(45) → "45"

### Important Notes

* `typeof` is used to check the data type of a value.
* `Number()`, `Boolean()`, and `String()` are used for type conversion.
* `NaN` stands for "Not a Number".

### Quick Revision

* Number("33") → 33
* Number("33abc") → NaN
* Boolean("gauri") → true
* Boolean("") → false
* String(45) → "45"