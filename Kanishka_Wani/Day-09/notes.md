# Day 09 - JavaScript Notes 🚀

## Lecture 20 - Scope & Hoisting in JavaScript

---

## What is Scope?

Scope determines where a variable can be accessed in a program.

In simple terms:  
Scope defines the visibility of variables.

JavaScript has three types of scope:
- Global Scope
- Function Scope
- Block Scope ({})

---

## Block Scope

Variables declared with let and const are block scoped.

```javascript
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER:", a);
}

console.log(a);
```

Output:
INNER: 10  
300

Explanation:
- {} creates a new block scope  
- Inner variables do not affect outer variables  
- Outer scope cannot access inner block variables  

---

## Lexical Scope (Nested Scope)

Lexical scope means:  
A function can access variables from its parent scope.

```javascript
function one(){
    const username = "kanishka";

    function two(){
        console.log(username);
    }

    two();
}

one();
```

Explanation:
- Inner function can access outer function variables  
- Outer function cannot access inner function variables  
- This is called scope chain  

---

## Scope in Conditional Blocks

```javascript
if (true) {
    const username = "kanishka";

    if (username === "kanishka") {
        const website = "YouTube";
        console.log(username + website);
    }
}
```

Explanation:
- Every {} creates a new scope  
- Variables exist only inside their block  

---

## What is Hoisting?

Hoisting is JavaScript behavior where:  
Declarations are moved to the top of their scope before execution.

Important:
- Only declarations are hoisted, not initializations  

---

## Execution Phases in JavaScript

1. Memory Creation Phase
- Variables are allocated memory  
- Functions are stored in memory  

2. Execution Phase
- Code runs line by line  

---

## Function Hoisting (Declaration)

```javascript
console.log(addOne(5));

function addOne(num){
    return num + 1;
}
```

Output:
6

Explanation:
- Function declarations are fully hoisted  
- Can be called before declaration  

---

## Function Expression Hoisting

```javascript
addTwo(5);

const addTwo = function(num){
    return num + 2;
}
```

Output:
Error: Cannot access 'addTwo' before initialization

Explanation:
- Only variable is hoisted, not function body  
- let and const stay in Temporal Dead Zone (TDZ)  

---

## var, let, const Difference in Hoisting

- var → hoisted as undefined  
- let / const → hoisted but in TDZ  
- Function declarations → fully hoisted  

---

## Key Learnings

- Scope controls variable access  
- Block scope isolates variables inside {}  
- Lexical scope enables parent-child access  
- Scope chain connects nested functions  
- Hoisting affects execution order  
- Function declaration and expression behave differently  

---

## Overall Day 09 Summary

Today I learned Scope and Hoisting in JavaScript. I understood how JavaScript manages variable access using block scope and lexical scope. I also learned how JavaScript executes code in memory and execution phases, which explains hoisting. This helped me understand why function declarations work before definition but function expressions throw errors. These concepts are important for writing clean and bug-free JavaScript code.
```
