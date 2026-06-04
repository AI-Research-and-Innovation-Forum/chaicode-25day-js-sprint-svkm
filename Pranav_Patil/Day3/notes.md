# 📅 Day 3 - Datatypes and ECMA Standards

## 🎯 What I Learned Today

Today's session focused on JavaScript Datatypes and the importance of ECMAScript (ECMA) Standards. Understanding datatypes is essential because every value in JavaScript belongs to a specific type, and knowing these types helps write more reliable and predictable code.

---

# 📌 What is ECMAScript (ECMA)?

ECMAScript is the standard on which JavaScript is based.

- JavaScript follows ECMAScript specifications.
- New JavaScript features are introduced through ECMAScript updates.
- ES6 (ECMAScript 2015) introduced many modern features such as:
  - `let`
  - `const`
  - Arrow Functions
  - Classes
  - Template Literals

### Why ECMA Standards Matter

- Ensures consistency across browsers.
- Provides guidelines for JavaScript engines.
- Introduces new features while maintaining compatibility.

---

# 📌 Datatypes in JavaScript

JavaScript datatypes are mainly divided into:

1. Primitive Datatypes
2. Non-Primitive (Reference) Datatypes

---

# 🔹 Primitive Datatypes

Primitive datatypes store single values and are immutable.

### 1. Number

Represents both integers and floating-point numbers.

```javascript
let age = 20;
let price = 99.99;
```

### Example

```javascript
console.log(typeof age);
```

Output:

```javascript
number
```

---

### 2. String

Represents textual data.

```javascript
let name = "Pranav";
```

Example:

```javascript
console.log(typeof name);
```

Output:

```javascript
string
```

---

### 3. Boolean

Represents true or false values.

```javascript
let isLoggedIn = true;
```

Example:

```javascript
console.log(typeof isLoggedIn);
```

Output:

```javascript
boolean
```

---

### 4. Null

Represents an intentional absence of value.

```javascript
let temperature = null;
```

Example:

```javascript
console.log(typeof temperature);
```

Output:

```javascript
object
```

⚠️ This is a well-known JavaScript bug that has been kept for backward compatibility.

---

### 5. Undefined

A variable declared but not assigned a value.

```javascript
let score;
```

Example:

```javascript
console.log(typeof score);
```

Output:

```javascript
undefined
```

---

### 6. Symbol

Used to create unique identifiers.

```javascript
const id = Symbol('123');
const anotherId = Symbol('123');
```

Example:

```javascript
console.log(id === anotherId);
```

Output:

```javascript
false
```

Each Symbol is unique.

---

### 7. BigInt

Used for very large integers beyond the safe Number limit.

```javascript
const bigNumber = 123456789012345678901234567890n;
```

Example:

```javascript
console.log(typeof bigNumber);
```

Output:

```javascript
bigint
```

---

# 📌 Non-Primitive (Reference) Datatypes

Reference datatypes store collections of values or complex entities.

---

## Array

Used to store multiple values in a single variable.

```javascript
const heroes = ["Ironman", "Spiderman", "Thor"];
```

Example:

```javascript
console.log(typeof heroes);
```

Output:

```javascript
object
```

---

## Object

Stores data in key-value pairs.

```javascript
const user = {
    name: "Pranav",
    age: 20
};
```

Example:

```javascript
console.log(typeof user);
```

Output:

```javascript
object
```

---

## Function

Functions are treated as first-class objects in JavaScript.

```javascript
const greet = function() {
    console.log("Hello");
}
```

Example:

```javascript
console.log(typeof greet);
```

Output:

```javascript
function
```

---

# 📌 JavaScript is Dynamically Typed

In JavaScript, you don't need to specify datatype explicitly.

```javascript
let value = 10;

value = "Hello";

value = true;
```

The same variable can store different datatypes at different times.

---

# 📌 typeof Operator

Used to determine the datatype of a value.

```javascript
console.log(typeof "Pranav");
console.log(typeof 20);
console.log(typeof true);
```

Output:

```javascript
string
number
boolean
```

---

# 📊 Primitive vs Reference Datatypes

| Primitive | Reference |
|------------|------------|
| Stored by Value | Stored by Reference |
| Immutable | Mutable |
| Faster Access | Slightly Slower |
| Stored in Stack | Stored in Heap |

Examples of Primitive:
- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

Examples of Reference:
- Array
- Object
- Function

---

# 💡 Key Takeaways

- JavaScript follows ECMAScript standards.
- There are 7 Primitive Datatypes.
- Arrays and Objects are Reference Datatypes.
- `typeof null` returns `"object"` due to a historical JavaScript bug.
- Symbols create unique values.
- BigInt is used for extremely large numbers.
- JavaScript is dynamically typed.

---

# 🚀 Day 3 Summary

Today's session helped me understand the foundation of JavaScript values. Learning datatypes is not just about memorizing definitions—it is about knowing how JavaScript stores and handles data internally. Understanding the difference between Primitive and Reference types will become very important when working with objects, arrays, functions, and memory management in future projects.

> Good code starts with understanding the data you're working with.