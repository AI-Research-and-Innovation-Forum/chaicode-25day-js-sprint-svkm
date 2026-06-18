# 📅 Day 14 – `this`, Arrow Functions & IIFE in JavaScript

## 🎥 Videos

1. **THIS and Arrow Function in JavaScript | Chai aur JavaScript**
2. **Immediately Invoked Function Expressions (IIFE) | Chai aur JavaScript**

---

# 📚 Introduction

Today's learning focused on some of the most important concepts in modern JavaScript: the **`this` keyword**, **Arrow Functions**, and **IIFE (Immediately Invoked Function Expressions)**.

These concepts are heavily used in modern JavaScript frameworks such as React, Node.js, and Express. Understanding how `this` behaves in different contexts and how arrow functions differ from regular functions is essential for writing clean and predictable JavaScript code.

I also learned about IIFEs, which help execute code immediately while avoiding pollution of the global scope.

---

# 🔹 Understanding the `this` Keyword

The `this` keyword refers to the **current execution context**.

Its value depends on **how and where a function is called**.

---

## `this` Inside an Object

```javascript
const user = {
    username: "Pranav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
};

user.welcomeMessage();
```

Output:

```javascript
Pranav, welcome to website
```

Here:

```javascript
this.username
```

refers to the `username` property of the current object.

---

## Updating Object Values

```javascript
user.username = "Rahul";
user.welcomeMessage();
```

Output:

```javascript
Rahul, welcome to website
```

`this` always refers to the current object's context.

---

# 🔹 `this` in Global Context

In browsers:

```javascript
console.log(this);
```

Output:

```javascript
Window Object
```

The global object in browsers is the Window object.

---

# 🔹 `this` Inside a Regular Function

```javascript
function chai() {
    console.log(this);
}

chai();
```

`this` behaves differently compared to objects.

---

## Accessing Variables with `this`

```javascript
function chai() {
    let username = "Pranav";

    console.log(this.username);
}

chai();
```

Output:

```javascript
undefined
```

Why?

Because `this` does not refer to local variables inside a regular function.

---

# 🔹 Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

### Traditional Function

```javascript
function addTwo(num1, num2) {
    return num1 + num2;
}
```

---

### Arrow Function

```javascript
const addTwo = (num1, num2) => {
    return num1 + num2;
};
```

---

# 🔹 Implicit Return

When a function contains only one expression:

```javascript
const addTwo = (num1, num2) => num1 + num2;
```

or

```javascript
const addTwo = (num1, num2) => (
    num1 + num2
);
```

No need to write `return`.

---

# 🔹 Returning Objects from Arrow Functions

```javascript
const createUser = () => ({
    username: "Pranav"
});
```

Parentheses are required when returning an object directly.

---

# 🔹 `this` Inside Arrow Functions

```javascript
const chai = () => {
    let username = "Pranav";

    console.log(this);
};

chai();
```

Arrow functions do **not create their own `this`**.

Instead, they inherit `this` from the surrounding scope.

This is one of the biggest differences between regular functions and arrow functions.

---

# 🔹 Function Syntax Comparison

## Regular Function

```javascript
function greet() {
    console.log("Hello");
}
```

---

## Function Expression

```javascript
const greet = function() {
    console.log("Hello");
};
```

---

## Arrow Function

```javascript
const greet = () => {
    console.log("Hello");
};
```

---

# 🔹 What is an IIFE?

IIFE stands for:

**Immediately Invoked Function Expression**

An IIFE is a function that executes immediately after it is created.

---

## Basic IIFE

```javascript
(function chai() {
    console.log("DB Connected");
})();
```

Output:

```javascript
DB Connected
```

The function runs immediately.

---

# 🔹 Why Use IIFE?

Benefits:

* Avoid global scope pollution
* Create private scope
* Execute initialization code immediately
* Protect variables from conflicts

---

# 🔹 Arrow Function IIFE

```javascript
(() => {
    console.log("DB Connected Two");
})();
```

Output:

```javascript
DB Connected Two
```

---

# 🔹 Passing Parameters to IIFE

```javascript
((name) => {
    console.log(`Welcome ${name}`);
})("Pranav");
```

Output:

```javascript
Welcome Pranav
```

---

# 🔹 Importance of Semicolon in IIFE

```javascript
(function one() {
    console.log("One");
})();

(function two() {
    console.log("Two");
})();
```

Without the first semicolon, JavaScript may not understand where one IIFE ends and another begins.

---

# 🔹 Regular Functions vs Arrow Functions

| Feature                     | Regular Function | Arrow Function |
| --------------------------- | ---------------- | -------------- |
| Syntax                      | Longer           | Shorter        |
| Own `this`                  | Yes              | No             |
| Suitable for Object Methods | Yes              | Usually No     |
| Implicit Return             | No               | Yes            |
| Modern Usage                | Common           | Very Common    |

---

# 🌍 Real-World Applications

## React Development

Arrow functions are extensively used for:

* Event handlers
* State updates
* Callback functions

---

## Node.js Applications

IIFEs are often used for:

* Initial setup
* Configuration loading
* Database connections

---

## Web Applications

`this` is commonly used for:

* Object methods
* User data handling
* Dynamic context management

---

## API Handling

Arrow functions are heavily used in:

```javascript
map()
filter()
reduce()
forEach()
```

operations.

---

# 🔑 Key Learnings

* Learned how the `this` keyword works in different contexts.
* Understood the difference between object context and function context.
* Learned why `this.username` returns undefined inside normal functions.
* Explored arrow function syntax.
* Understood explicit and implicit returns.
* Learned how to return objects from arrow functions.
* Understood that arrow functions do not have their own `this`.
* Learned the purpose and syntax of IIFEs.
* Explored how IIFEs help avoid global scope pollution.
* Learned how to pass parameters into IIFEs.

---

# 📚 Summary

Today's session introduced some of the most widely used features in modern JavaScript. I learned how the `this` keyword behaves differently depending on where it is used and why understanding execution context is important for writing predictable code.

I also explored arrow functions, which provide a cleaner and more concise way to write functions. The biggest takeaway was understanding that arrow functions do not create their own `this`, making them behave differently from regular functions.

Finally, I learned about IIFEs and how they execute immediately while creating their own private scope. This concept helped me understand how developers prevent global scope pollution and organize initialization code.

Overall, Day 14 gave me a deeper understanding of JavaScript's execution behavior and introduced concepts that are used extensively in modern frameworks and real-world applications.

---

## ✅ Progress

**Day 14/25 Completed**
