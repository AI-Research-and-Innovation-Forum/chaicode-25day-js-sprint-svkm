# 📅 Day 5 - Stack & Heap Memory in JavaScript + Data Types Summary

## 🎯 What I Learned Today

Today’s learning focused on how JavaScript stores data in memory and a recap of JavaScript data types. Understanding memory management is crucial because it explains why some values are copied while others are shared through references.

---

# 📌 Memory in JavaScript

JavaScript mainly uses two types of memory:

1. Stack Memory
2. Heap Memory

---

# 🔹 Stack Memory

Stack Memory is used for **Primitive Datatypes**.

When a primitive value is assigned to another variable, a **copy** of the value is created.

### Primitive Datatypes

- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

### Example

```javascript
let myName = "Pranav";
let anotherName = myName;

anotherName = "Patil";

console.log(myName);
console.log(anotherName);
```

Output:

```javascript
Pranav
Patil
```

### Explanation

- `anotherName` gets a copy of `myName`.
- Changing `anotherName` does not affect `myName`.
- This behavior is called **Pass by Value**.

---

# 🔹 Heap Memory

Heap Memory is used for **Reference Datatypes**.

When an object or array is assigned to another variable, both variables point to the same memory location.

### Reference Datatypes

- Object
- Array
- Function

### Example

```javascript
let userOne = {
    email: "pranav@gmail.com",
    upi: "pranav@ybl"
};

let userTwo = userOne;

userTwo.email = "patil@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
```

Output:

```javascript
patil@gmail.com
patil@gmail.com
```

### Explanation

- `userTwo` does not get a copy.
- It gets a reference to the same object.
- Changes made through one variable affect the other.
- This behavior is called **Pass by Reference**.

---

# 📊 Stack vs Heap Memory

| Stack Memory | Heap Memory |
|-------------|-------------|
| Stores Primitive Types | Stores Reference Types |
| Fast Access | Slightly Slower |
| Copy of Value is Created | Reference is Shared |
| Independent Changes | Shared Changes |
| Stored Directly | Stored via Reference |

---

# 📌 JavaScript Data Types Recap

JavaScript datatypes are divided into:

## 1. Primitive Datatypes

Primitive values are immutable and stored directly.

### Number

```javascript
let age = 20;
```

### String

```javascript
let name = "Pranav";
```

### Boolean

```javascript
let isLoggedIn = true;
```

### Null

```javascript
let value = null;
```

### Undefined

```javascript
let score;
```

### Symbol

```javascript
const id = Symbol('123');
```

### BigInt

```javascript
const bigNumber = 12345678901234567890n;
```

---

## 2. Reference Datatypes

### Array

```javascript
const heroes = ["Ironman", "Thor", "Spiderman"];
```

### Object

```javascript
const user = {
    name: "Pranav",
    age: 20
};
```

### Function

```javascript
const greet = function() {
    console.log("Hello");
};
```

---

# 📌 typeof Operator

Used to identify the datatype of a value.

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

# 📌 Interesting JavaScript Facts

### typeof null

```javascript
console.log(typeof null);
```

Output:

```javascript
object
```

This is a historical bug in JavaScript that remains for compatibility reasons.

---

### Symbols Are Unique

```javascript
const id1 = Symbol('123');
const id2 = Symbol('123');

console.log(id1 === id2);
```

Output:

```javascript
false
```

Even if descriptions are the same, every Symbol is unique.

---

# 📌 Why Memory Matters

Understanding Stack and Heap Memory helps explain:

- Why primitive values don't affect each other.
- Why objects and arrays can unexpectedly change.
- How data is stored internally.
- Common bugs related to references.

---

# 💡 Key Takeaways

- Primitive datatypes are stored in Stack Memory.
- Reference datatypes are stored in Heap Memory.
- Primitive values are copied when assigned.
- Objects and arrays share references.
- Changes in referenced objects affect all variables pointing to them.
- Understanding memory is essential for debugging and writing predictable code.

---

# 🚀 Day 5 Summary

Today's biggest lesson was understanding the difference between copying a value and copying a reference. While primitive values create independent copies, objects and arrays share memory locations. This small concept explains many JavaScript behaviors and is a foundation for working with complex applications in the future.

> Knowing where your data lives is just as important as knowing how to use it.