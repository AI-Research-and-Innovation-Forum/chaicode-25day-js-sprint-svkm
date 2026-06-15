
# Rest Operator (...)

Imagine a shopping cart.

A customer may buy:

* 2 items
* 5 items
* 10 items

You don't know the exact number beforehand.

Instead of creating many parameters:

```javascript
function cart(item1, item2, item3, item4)
```

Use Rest Operator:

```javascript
function cart(...items)
```

Now JavaScript automatically stores all values in an array.

### Real Life Use

* Shopping Cart
* Product Lists
* Multiple User Inputs
* Tags and Categories

---

# Objects As Function Arguments

Instead of sending multiple values one by one:

```javascript
handleUser("Super", 999, "Malegaon");
```

We can send a single object:

```javascript
handleUser({
    username: "Super",
    price: 999
});
```

Benefits:

✅ Cleaner code

✅ Easy maintenance

✅ Easy API handling

This technique is used heavily in React and Node.js.

---

# Arrays As Function Arguments

Functions can receive entire arrays.

```javascript
returnSecondValue([100, 200, 300]);
```

Think of an array as a box containing multiple values.

Instead of sending values one by one, send the whole box.

---

# Understanding this

`this` means:

> "Current Object"

Example:

```javascript
const user = {
    username: "Super"
}
```

When you write:

```javascript
this.username
```

JavaScript understands:

```javascript
user.username
```

for the current object.

---

## Real Life Example

Imagine a classroom.

Teacher asks:

> "What is YOUR name?"

Each student answers with their own name.

Similarly:

```javascript
this.username
```

means

> "Current object's username"

---

# Arrow Functions

## Why Introduced?

Before ES6:

```javascript
function add(a, b){
    return a + b;
}
```

After ES6:

```javascript
const add = (a, b) => a + b;
```

Less code.

Cleaner syntax.

More readable.

---

## When To Use Arrow Functions?

Commonly used in:

* React
* Array Methods
* Callbacks
* API Calls
* Event Handlers

---

# Explicit Return vs Implicit Return

## Explicit Return

You clearly write:

```javascript
return num1 + num2;
```

JavaScript sees exactly what to return.

---

## Implicit Return

```javascript
(num1, num2) => num1 + num2
```

JavaScript automatically returns the result.

Think of it as a shortcut.

---

# Why Object Needs Parentheses

Wrong:

```javascript
() => {
    username: "Super"
}
```

JavaScript thinks this is a code block.

Correct:

```javascript
() => ({
    username: "Super"
})
```

Parentheses tell JavaScript:

> "This is an object, not a block."

---

# Lexical Scope

Child functions can access parent's variables.

Example:

```javascript
function father(){
    const money = 1000;

    function son(){
        console.log(money);
    }
}
```

Output:

```javascript
1000
```

---

## Real Life Example

A son can access things available inside the family.

A father cannot access things created only inside the son's room.

---

# Hoisting

Before executing code, JavaScript moves declarations to memory.

This process is called:

# Hoisting

---

## Function Declaration

```javascript
hello();

function hello(){
    console.log("Hi");
}
```

Works.

Why?

Because JavaScript already knows about the function.

---

## Function Expression

```javascript
hello();

const hello = function(){
    console.log("Hi");
}
```

Fails.

Why?

Because variable initialization happens later.

---

# IIFE

## Full Form

Immediately Invoked Function Expression

---

Normally:

```javascript
function test(){
    console.log("Hello");
}

test();
```

Create function.

Then call function.

---

IIFE:

```javascript
(function(){
    console.log("Hello");
})();
```

Create and call immediately.

One line.

---

# Why Use IIFE?

Imagine your application starts.

Things that should happen instantly:

* Database Connection
* Configuration Loading
* Initial Setup
* Authentication Check

IIFE is perfect for such tasks.

---

# Global Scope Pollution

## Problem

```javascript
let username = "Super";
```

Global variables can be accessed everywhere.

Large projects become messy.

---

## Solution

Use IIFE.

```javascript
(function(){
    let username = "Super";
})();
```

Now the variable stays private.

Nobody outside can access it.

---

# Day 11 Final Understanding

By completing Lectures 21–24, you learned:

✅ Scope

✅ Lexical Scope

✅ Hoisting

✅ Function Declarations

✅ Function Expressions

✅ Rest Operator

✅ Objects & Arrays in Functions

✅ this Keyword

✅ Arrow Functions

✅ Explicit & Implicit Return

✅ Returning Objects

✅ IIFE

✅ Global Scope Pollution

These topics are the foundation of modern JavaScript and are used daily in React, Node.js, Express, Next.js, and full-stack development.
