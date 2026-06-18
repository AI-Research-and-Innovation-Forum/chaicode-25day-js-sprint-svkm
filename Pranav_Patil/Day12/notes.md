# 📅 Day 12 – Functions, Parameters, Objects & Arrays in JavaScript

## 🎥 Videos

1. **Functions and Parameters in JavaScript | Chai aur JavaScript**
2. **Functions with Objects and Arrays in JavaScript | Chai aur JavaScript**

---

# 📚 Introduction

Today's learning focused on **Functions**, one of the most fundamental concepts in JavaScript. Functions help organize code into reusable blocks, making programs cleaner, more modular, and easier to maintain.

I also learned how functions work with parameters, return values, objects, and arrays. These concepts are used extensively in real-world applications where data needs to be processed, transformed, or displayed dynamically.

---

# 🔹 What is a Function?

A function is a reusable block of code designed to perform a specific task.

```javascript
function sayMyName() {
    console.log("Pranav");
}
```

Calling the function:

```javascript
sayMyName();
```

---

# 🔹 Function Parameters and Arguments

### Parameters

Parameters are variables defined in a function declaration.

```javascript
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
```

### Arguments

Arguments are the actual values passed when calling a function.

```javascript
addNumbers(5, 10);
```

Output:

```javascript
15
```

---

# 🔹 Returning Values

Instead of directly printing values, functions can return them.

```javascript
function addNumbers(num1, num2) {
    return num1 + num2;
}

const result = addNumbers(5, 10);
```

Output:

```javascript
15
```

Using `return` makes functions more flexible and reusable.

---

# 🔹 Default Parameters

```javascript
function loginUserMessage(username = "Guest") {
    return `${username} just logged in`;
}
```

If no argument is passed:

```javascript
loginUserMessage();
```

Output:

```javascript
Guest just logged in
```

---

# 🔹 Rest Operator (...)

The rest operator collects multiple arguments into an array.

```javascript
function calculateCartPrice(...num) {
    return num;
}

calculateCartPrice(200, 300, 400);
```

Output:

```javascript
[200, 300, 400]
```

Useful when the number of arguments is unknown.

---

# 🔹 Passing Objects to Functions

Objects can be passed directly as arguments.

```javascript
const user = {
    username: "Pranav",
    price: 999
};

function handleObject(anyObject) {
    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
}

handleObject(user);
```

---

# 🔹 Passing Objects Directly

```javascript
handleObject({
    username: "Pranav",
    price: 999
});
```

This approach is commonly used when working with API data.

---

# 🔹 Passing Arrays to Functions

```javascript
const myNewArray = [100, 200, 300];

function returnSecondValue(getArray) {
    return getArray[1];
}

returnSecondValue(myNewArray);
```

Output:

```javascript
200
```

---

# 🔹 Scope Basics

Variables declared inside a function are accessible only within that function.

```javascript
function test() {
    let username = "Pranav";
}
```

`username` cannot be accessed outside the function.

---

# 🔹 Why Functions Matter

Functions help:

* Reuse code
* Reduce repetition
* Improve readability
* Make debugging easier
* Organize large applications

---

# 🌍 Real-World Applications

### E-Commerce Websites

* Cart calculations
* Price updates

### Authentication Systems

* Login validation
* User verification

### Social Media Platforms

* Post creation
* Profile updates

### Dashboard Applications

* Data processing
* Report generation

### API Integration

* Handling response data
* Transforming objects and arrays

---

# 🔑 Key Learnings

* Learned how functions are created and called.
* Understood the difference between parameters and arguments.
* Learned the importance of return values.
* Explored default parameters.
* Understood the rest operator (`...`) for handling multiple arguments.
* Passed objects and arrays into functions.
* Retrieved specific values from arrays using functions.
* Learned basic function scope concepts.
* Connected functions to real-world application development.

---

# 📚 Summary

Today's session strengthened my understanding of functions, which are one of the core building blocks of JavaScript. I learned how parameters and arguments work together, how functions return values, and how default parameters help handle missing inputs gracefully.

The most interesting part was learning how objects and arrays can be passed directly into functions. Since most real-world applications work with structured data, this concept feels especially important. Understanding how functions interact with objects and arrays gives me a better idea of how JavaScript applications process and manage data behind the scenes.

Overall, Day 12 made it clear that functions are much more than reusable code blocks—they are the foundation for building organized, scalable, and maintainable applications.

---

## ✅ Progress

**Day 12/25 Completed**
