# 📅 Day 15 

# JavaScript Execution Context & Call Stack

## 🎥 Video

**How Does JavaScript Execute Code + Call Stack | Chai aur JavaScript**

---

# 📚 Introduction

Have you ever wondered what happens behind the scenes when JavaScript runs your code?

When we write JavaScript, the browser or Node.js does not execute the code line by line immediately. Instead, JavaScript first creates an environment to execute the code and then starts running it.

Understanding **Execution Context** and **Call Stack** is one of the most important concepts in JavaScript because it explains:

* How variables are stored
* How functions are executed
* Why hoisting happens
* How memory is allocated
* How JavaScript keeps track of function calls

These concepts form the foundation of JavaScript's execution model.

---

# What Happens When JavaScript Runs?

Whenever a JavaScript program runs, JavaScript creates an:

```text
Execution Context
```

Think of it as a special environment where the code is evaluated and executed.

---

# What is an Execution Context?

Execution Context is the environment in which JavaScript code is executed.

It contains:

```text
1. Memory Creation Phase
2. Execution Phase
```

Every time a script or function runs, JavaScript creates an execution context.

---

# Types of Execution Context

There are mainly three types:

## 1. Global Execution Context (GEC)

Created automatically when JavaScript starts executing.

Example:

```javascript
let name = "Pranav";
console.log(name);
```

The entire script runs inside the Global Execution Context.

---

### Browser Environment

In browsers:

```javascript
console.log(this);
```

Output:

```javascript
Window Object
```

The global object is:

```text
window
```

---

### Node.js Environment

In Node.js:

```text
global
```

acts as the global object.

---

## 2. Function Execution Context

Created whenever a function is invoked.

Example:

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

When `greet()` runs:

* A new execution context is created.
* Function executes.
* Context is destroyed after completion.

---

## 3. Eval Execution Context

Created when using:

```javascript
eval()
```

Rarely used and generally avoided.

---

# Phases of Execution Context

Every execution context is created in two phases.

---

# Phase 1: Memory Creation Phase

Also called:

```text
Creation Phase
```

JavaScript scans the entire code first.

Memory is allocated for:

* Variables
* Functions

---

## Variable Handling

Example:

```javascript
let name = "Pranav";
```

During Memory Phase:

```javascript
name = undefined
```

Memory is reserved but value is not assigned yet.

---

## Function Handling

Example:

```javascript
function greet() {
    console.log("Hello");
}
```

Entire function definition is stored in memory.

```text
greet -> function definition
```

---

# Phase 2: Execution Phase

Now JavaScript executes code line by line.

Example:

```javascript
let name = "Pranav";
```

Value is assigned:

```javascript
name = "Pranav"
```

---

Function calls are executed.

Example:

```javascript
greet();
```

Function execution context is created.

---

# Example Walkthrough

```javascript
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result = addNum(val1, val2);
```

---

# Memory Phase

JavaScript allocates memory:

```text
val1 → undefined
val2 → undefined
addNum → function definition
result → undefined
```

---

# Execution Phase

Step 1:

```javascript
val1 = 10
```

Step 2:

```javascript
val2 = 5
```

Step 3:

Function stored already.

Step 4:

```javascript
result = addNum(10,5)
```

Function call begins.

---

# New Function Execution Context

For:

```javascript
addNum(10,5)
```

JavaScript creates:

```text
Function Execution Context
```

---

### Memory Phase

```text
num1 → undefined
num2 → undefined
total → undefined
```

---

### Execution Phase

```javascript
num1 = 10
num2 = 5

total = 15
```

Return:

```javascript
15
```

Result assigned:

```javascript
result = 15
```

Function context removed.

---

# What is the Call Stack?

JavaScript uses a structure called:

```text
Call Stack
```

to manage execution contexts.

---

Think of it like a stack of plates.

### Rules

```text
Push → Add on top
Pop → Remove from top
```

Last In First Out (LIFO)

---

# Simple Example

```javascript
function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

one();
two();
```

---

# Stack Flow

### Step 1

Global Execution Context enters stack.

```text
GEC
```

---

### Step 2

```javascript
one()
```

Stack:

```text
one()
GEC
```

---

### Step 3

Function finishes.

Removed:

```text
GEC
```

---

### Step 4

```javascript
two()
```

Stack:

```text
two()
GEC
```

---

### Step 5

Function completes.

```text
GEC
```

---

### Step 6

Program ends.

Stack becomes empty.

---

# Nested Function Calls

Example:

```javascript
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();
```

---

# Stack Visualization

```text
three()
two()
one()
GEC
```

After completion:

```text
two()
one()
GEC
```

Then:

```text
one()
GEC
```

Finally:

```text
GEC
```

Then empty.

---

# Why Call Stack Matters

The Call Stack helps JavaScript:

* Track function execution
* Know which function runs next
* Manage execution contexts
* Handle nested function calls

Without the Call Stack, JavaScript could not manage function execution properly.

---

# Stack Overflow

Occurs when functions call themselves indefinitely.

Example:

```javascript
function hello() {
    hello();
}

hello();
```

Output:

```text
Maximum call stack size exceeded
```

Reason:

The stack becomes full because contexts keep getting pushed without being removed.

---

# Real-World Example

Imagine ordering food.

```text
Place Order
↓
Verify Payment
↓
Confirm Order
↓
Send Notification
```

Each task waits for the previous task to complete.

This is similar to how the Call Stack manages function execution.

---

# Execution Context + Call Stack Relationship

Whenever a function is called:

1. New Execution Context created.
2. Context pushed into Call Stack.
3. Function executes.
4. Context removed from Call Stack.
5. Control returns to previous context.

---

# Common Interview Questions

### What is Execution Context?

The environment in which JavaScript code executes.

---

### How many phases are there?

1. Memory Creation Phase
2. Execution Phase

---

### What is Global Execution Context?

The default execution context created when JavaScript starts.

---

### What is Call Stack?

A stack data structure used to manage execution contexts and function calls.

---

### Why does Stack Overflow occur?

Due to excessive recursive function calls filling the call stack.

---

# Real-World Applications

### Web Applications

* Function execution
* Event handling

### React

* Component rendering
* Hooks execution

### Node.js

* API handling
* Middleware execution

### Games

* Managing game loops
* Function sequencing

### Backend Systems

* Request processing
* Business logic execution

---

# 🔑 Key Learnings

* Learned what an Execution Context is.
* Understood Global Execution Context.
* Explored Function Execution Context.
* Learned the two phases of execution:

  * Memory Creation Phase
  * Execution Phase
* Understood how variables and functions are stored.
* Learned how JavaScript allocates memory.
* Explored how functions create new execution contexts.
* Understood Call Stack operations.
* Learned LIFO behavior.
* Understood Stack Overflow errors.
* Connected execution contexts with function execution.

---

# 📚 Summary

Today's session helped me understand what happens internally when JavaScript executes code. I learned that before running any code, JavaScript creates an Execution Context and allocates memory for variables and functions. The code then runs in the execution phase where values are assigned and functions are executed.

I also learned about the Call Stack, which manages function execution using a Last In First Out (LIFO) mechanism. Understanding how execution contexts are created, pushed to the stack, and removed after execution gave me a much clearer picture of JavaScript's internal working. This topic felt like looking under the hood of the JavaScript engine and understanding how everything operates behind the scenes.

---

## ✅ Progress

**Day 15**
**Topic: JavaScript Execution Context & Call Stack**
