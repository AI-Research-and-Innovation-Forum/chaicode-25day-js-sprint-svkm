# Day 10 - JavaScript Notes 🚀

## Lecture 23 - `this` Keyword & Arrow Functions

### What is `this`?

The `this` keyword refers to the current context or the object that is executing the code.

```javascript
const user = {
    username: "kanishka",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()
```

Output:

```javascript
kanishka, welcome to website
```

---

### Changing Object Values

```javascript
user.username = "sam"
user.welcomeMessage()
```

Output:

```javascript
sam, welcome to website
```

`this.username` always refers to the current object's username.

---

### `this` in Global Scope

```javascript
console.log(this)
```

In the browser, it refers to the `window` object.

In Node.js, it refers to an empty object `{}`.

---

### `this` Inside a Regular Function

```javascript
function chai(){
    let username = "kanishka"
    console.log(this.username)
}
```

Output:

```javascript
undefined
```

`this` does not work the same way inside normal functions.

---

## Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

### Basic Arrow Function

```javascript
const chai = () => {
    console.log("Hello")
}
```

---

### Arrow Function with Return

```javascript
const addTwo = (num1, num2) => {
    return num1 + num2
}
```

---

### Implicit Return

When a function contains only one expression, we can write:

```javascript
const addTwo = (num1, num2) => num1 + num2
```

or

```javascript
const addTwo = (num1, num2) => (num1 + num2)
```

Both return the value automatically.

---

### Returning Objects from Arrow Functions

To return an object, wrap it inside parentheses.

```javascript
const addTwo = (num1, num2) => ({
    username: "kanishka"
})
```

```javascript
console.log(addTwo())
```

Output:

```javascript
{ username: "kanishka" }
```

---

### Arrow Functions in Arrays

```javascript
const myArray = [2, 4, 5, 6, 8]

// myArray.forEach(() => {})
```

Arrow functions are commonly used with array methods like:

* forEach()
* map()
* filter()
* reduce()

---

## Lecture 24 - IIFE (Immediately Invoked Function Expressions)

### What is an IIFE?

IIFE stands for Immediately Invoked Function Expression.

An IIFE executes immediately after it is defined.

Syntax:

```javascript
(function(){
    console.log("Executed")
})()
```

---

### Why Use IIFE?

* Execute code immediately.
* Avoid polluting the global scope.
* Create a private scope for variables.
* Useful for database connections and initialization code.

---

### Named IIFE

```javascript
(function chai(){
    console.log("DB CONNECTED")
})()
```

Output:

```javascript
DB CONNECTED
```

This is called a Named IIFE because it has a function name.

---

### Arrow Function IIFE

```javascript
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("kanishka")
```

Output:

```javascript
DB CONNECTED TWO kanishka
```

---

### Passing Parameters to IIFE

```javascript
((name) => {
    console.log(`Hello ${name}`)
})("Kanishka")
```

Parameters can be passed just like normal functions.

---

### Important Note

When writing multiple IIFEs, use a semicolon after the first one.

```javascript
(function(){
    console.log("First IIFE")
})();

(function(){
    console.log("Second IIFE")
})();
```

Without the semicolon, JavaScript may throw an error.

---

## Key Learnings

* Learned how the `this` keyword works inside objects.
* Understood that `this` behaves differently in regular functions.
* Learned arrow function syntax.
* Explored explicit and implicit returns.
* Learned how to return objects from arrow functions.
* Understood why arrow functions are commonly used with array methods.
* Learned what IIFEs are and why they are used.
* Created both named and arrow function IIFEs.
* Passed arguments to IIFEs.
* Learned the importance of semicolons when using multiple IIFEs.

# Overall Day 10 Summary

Today I learned about the `this` keyword, how it refers to the current object, and how its behavior changes in different contexts. I also explored Arrow Functions, their shorter syntax, implicit returns, and returning objects. In the second lecture, I learned about IIFEs (Immediately Invoked Function Expressions), why they are used to avoid global scope pollution, and how to create both named and arrow function IIFEs with parameters.
