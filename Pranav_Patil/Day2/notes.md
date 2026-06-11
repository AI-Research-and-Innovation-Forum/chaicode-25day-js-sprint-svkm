# 📅 Day 2 - Let, Const and Var Ki Kahani

## 🎯 What I Learned Today

Today's session focused on understanding how JavaScript handles variables using `var`, `let`, and `const`. While all three are used to declare variables, they behave differently when it comes to scope, hoisting, and reassignment.

---

## 🔹 var

- Function Scoped
- Can be redeclared
- Can be reassigned
- Hoisted and initialized with `undefined`

```javascript
var name = "Pranav";
var name = "Patil";

console.log(name); // Patil
```

---

## 🔹 let

- Block Scoped
- Cannot be redeclared in the same scope
- Can be reassigned
- Hoisted but remains in the Temporal Dead Zone (TDZ)

```javascript
let age = 20;
age = 21;

console.log(age); // 21
```

---

## 🔹 const

- Block Scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized during declaration

```javascript
const pi = 3.14;

console.log(pi);
```

---

# 📌 Understanding Scope

Scope determines where a variable can be accessed.

## Global Scope

```javascript
let username = "Pranav";

function greet() {
    console.log(username);
}
```

Accessible throughout the program.

## Function Scope

```javascript
function test() {
    var age = 20;
}

console.log(age); // Error
```

Accessible only inside the function.

## Block Scope

```javascript
if (true) {
    let city = "Mumbai";
}

console.log(city); // Error
```

Accessible only inside the block `{}`.

---

# 📌 Hoisting

Before executing code, JavaScript allocates memory for variables and functions. This process is called **Hoisting**.

### Example with var

```javascript
console.log(a);

var a = 10;
```

Output:

```javascript
undefined
```

JavaScript internally treats it as:

```javascript
var a;

console.log(a);

a = 10;
```

---

### Example with let

```javascript
console.log(a);

let a = 10;
```

Output:

```javascript
ReferenceError
```

---

### Example with const

```javascript
console.log(pi);

const pi = 3.14;
```

Output:

```javascript
ReferenceError
```

---

# 📌 Temporal Dead Zone (TDZ)

The period between memory allocation and variable declaration is called the **Temporal Dead Zone**.

During this period:
- Variable exists in memory
- Cannot be accessed
- Causes a ReferenceError

Example:

```javascript
console.log(score);

let score = 100;
```

Output:

```javascript
ReferenceError
```

---

# 💡 Key Takeaways

- `var` is function scoped.
- `let` and `const` are block scoped.
- JavaScript hoists variable declarations before execution.
- `let` and `const` stay in the Temporal Dead Zone until their declaration is reached.
- Prefer `const` by default.
- Use `let` when values need to change.
- Avoid `var` in modern JavaScript development.

---

# 🚀 Day 2 Summary

The biggest lesson from today's session was that understanding JavaScript isn't just about writing code. It's about understanding what happens behind the scenes. Concepts like Scope, Hoisting, and the Temporal Dead Zone help explain why modern developers prefer `let` and `const` over `var`.

> Write code that is predictable, maintainable, and easy to debug.