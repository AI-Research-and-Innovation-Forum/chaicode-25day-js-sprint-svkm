# 📅 Day 13 – Scope, Scope Levels & Mini Hoisting in JavaScript

## 🎥 Videos

1. **Global and Local Scope in JavaScript | Chai aur JavaScript**
2. **Scope Level and Mini Hoisting in JavaScript | Chai aur JavaScript**

---

# 📚 Introduction

Today's learning focused on one of the most important concepts in JavaScript: **Scope**. Scope determines where variables and functions can be accessed within a program. Understanding scope is crucial because it helps prevent unintended variable access, naming conflicts, and bugs in large applications.

The session also introduced **nested scopes**, **scope chaining**, and a brief overview of **hoisting**, helping me understand how JavaScript handles variables and functions behind the scenes.

---

# 🔹 What is Scope?

Scope defines the accessibility or visibility of variables and functions in different parts of a program.

There are mainly three types of scope:

* Global Scope
* Function Scope
* Block Scope

---

# 🔹 Global Scope

Variables declared outside all functions and blocks belong to the global scope.

```javascript
let username = "Pranav";

function greet() {
    console.log(username);
}
```

The variable `username` can be accessed from anywhere in the program.

---

# 🔹 Local (Function) Scope

Variables declared inside a function are only accessible within that function.

```javascript
function test() {
    let score = 100;
    console.log(score);
}
```

Trying to access `score` outside the function will result in an error.

---

# 🔹 Block Scope

Variables declared using `let` and `const` are block-scoped.

```javascript
if (true) {
    let a = 10;
    const b = 20;
}
```

Both `a` and `b` can only be used inside the block.

---

# 🔹 var vs let vs const

```javascript
if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}
```

Outside the block:

```javascript
console.log(a); // Works
console.log(b); // Error
console.log(c); // Error
```

### Key Difference

* `var` ignores block scope.
* `let` and `const` respect block scope.

Because of this, modern JavaScript mostly uses `let` and `const`.

---

# 🔹 Nested Scope

Functions can be defined inside other functions.

```javascript
function one() {
    const username = "Pranav";

    function two() {
        const website = "YouTube";
        console.log(username);
    }

    two();
}
```

The inner function can access variables from its parent function.

---

# 🔹 Scope Chaining

JavaScript looks for variables in the following order:

1. Current Scope
2. Parent Scope
3. Global Scope

This process is called **Scope Chaining**.

```javascript
function one() {
    const username = "Pranav";

    function two() {
        console.log(username);
    }

    two();
}
```

`two()` cannot find `username` locally, so it searches in the parent scope.

---

# 🔹 Nested If Blocks

```javascript
const username = "Pranav";

if (username === "Pranav") {
    const website = "YouTube";

    if (website === "YouTube") {
        console.log(username);
    }
}
```

Inner blocks can access variables from outer blocks.

Outer blocks cannot access variables declared inside inner blocks.

---

# 🔹 Function Declaration vs Function Expression

### Function Declaration

```javascript
function addOne(num) {
    return num + 1;
}

addOne(5);
```

Works even before the function definition due to hoisting.

---

### Function Expression

```javascript
const addTwo = function(num) {
    return num + 2;
};

addTwo(5);
```

Cannot be called before declaration.

---

# 🔹 Mini Hoisting Concept

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during execution.

### Example

```javascript
console.log(a);

var a = 10;
```

Output:

```javascript
undefined
```

Because the declaration is hoisted, but the value assignment happens later.

---

### Function Hoisting

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output:

```javascript
Hello
```

Function declarations are fully hoisted.

---

# 🌍 Real-World Applications

### Authentication Systems

* User session handling
* Secure variable access

### Web Applications

* Managing component state

### API Handling

* Encapsulating data inside functions

### Large Projects

* Preventing naming conflicts
* Organizing code structure

### Frameworks

* React, Angular, and Vue heavily rely on scope concepts

---

# 🔑 Key Learnings

* Learned the difference between global and local scope.
* Understood block scope with `let` and `const`.
* Compared `var`, `let`, and `const`.
* Explored nested functions and scope chaining.
* Learned how inner scopes access outer scope variables.
* Understood function declarations and function expressions.
* Got introduced to JavaScript hoisting.
* Learned why function declarations can be called before definition.

---

# 📚 Summary

Today's session helped me understand how JavaScript manages variable visibility using scope. I learned the differences between global, local, and block scope and why `let` and `const` are preferred over `var` in modern JavaScript. Understanding nested scopes and scope chaining showed me how JavaScript searches for variables and how functions can access data from their parent scopes.

The introduction to hoisting was especially interesting because it explained some behaviors that can seem confusing to beginners, such as why function declarations can be called before they are defined. Overall, this session strengthened my understanding of JavaScript's execution model and gave me a clearer picture of how variables and functions behave behind the scenes.

---

## ✅ Progress

**Day 13/25 Completed**
