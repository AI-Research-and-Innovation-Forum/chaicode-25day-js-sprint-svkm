# Day 11 - JavaScript Notes 🚀

## Lecture 25 - How JavaScript Executes Code

### What Happens When JavaScript Runs?

Whenever a JavaScript program runs, the JavaScript Engine creates an **Execution Context**.

JavaScript executes code in a specific order using:

* Global Execution Context
* Function Execution Context
* Call Stack

---

## Global Execution Context (GEC)

The Global Execution Context is created when the JavaScript program starts.

```javascript
console.log("Hello JavaScript");
```

Before executing any code, JavaScript creates the Global Execution Context.

---

## Function Execution Context

Whenever a function is called, a new execution context is created for that function.

```javascript
function add(num1, num2){
    return num1 + num2
}

add(2,3)
```

A separate Function Execution Context is created when `add()` is executed.

---

## Two Phases of Execution

Every Execution Context goes through two phases.

### 1. Memory Creation Phase

In this phase:

* Memory is allocated to variables.
* Variables are initialized with `undefined`.
* Function definitions are stored in memory.

Example:

```javascript
let val1 = 10
let val2 = 5

function addNum(num1, num2){
    return num1 + num2
}
```

Memory Phase:

```javascript
val1 -> undefined
val2 -> undefined
addNum -> function definition
```

---

### 2. Execution Phase

In this phase:

* Values are assigned to variables.
* Functions are executed.
* Calculations are performed.

Example:

```javascript
val1 = 10
val2 = 5
```

Now JavaScript executes the actual code.

---

## Call Stack

JavaScript uses a Call Stack to manage function execution.

The Call Stack follows:

### LIFO

Last In, First Out

The function that enters last leaves first.

Example:

```javascript
function one(){
    two()
}

function two(){
    three()
}

function three(){
    console.log("three")
}

one()
```

Execution Flow:

```text
Global Execution Context
↓
one()
↓
two()
↓
three()
```

After execution:

```text
three() removed
two() removed
one() removed
Global Execution Context removed
```

---

## Why Understanding Execution Context Matters

Understanding Execution Context helps explain:

* Variable behavior
* Function execution
* Hoisting
* Scope
* Call Stack operations
* Debugging JavaScript applications

---

# Lecture 26 - Control Flow in JavaScript

## What is Control Flow?

Control Flow determines which code runs and when it runs.

JavaScript uses conditions to decide the execution path.

---

## if Statement

```javascript
if (true){
    console.log("Executed")
}
```

The code runs only if the condition is true.

---

## Comparison Operators

```javascript
<
>
<=
>=
==
!=
===
!==
```

---

### Double Equals (==)

Checks only value.

```javascript
2 == "2"
```

Output:

```javascript
true
```

---

### Triple Equals (===)

Checks value and datatype.

```javascript
2 === "2"
```

Output:

```javascript
false
```

---

## if-else Statement

```javascript
const temperature = 41

if(temperature < 50){
    console.log("Less than 50")
}else{
    console.log("Greater than 50")
}
```

---

## else if Ladder

```javascript
const balance = 1000

if(balance < 500){
    console.log("Less than 500")
}
else if(balance < 750){
    console.log("Less than 750")
}
else if(balance < 900){
    console.log("Less than 900")
}
else{
    console.log("Less than 1200")
}
```

---

## Scope in Conditions

Variables declared using `let` and `const` are block scoped.

```javascript
if(score > 100){
    const power = "fly"
}
```

`power` cannot be accessed outside the block.

---

## Logical Operators

### AND (&&)

Both conditions must be true.

```javascript
if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}
```

---

### OR (||)

At least one condition must be true.

```javascript
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In")
}
```

---

## Switch Statement

Useful when checking multiple possible values.

```javascript
const month = "april"

switch(month){
    case "jan":
        console.log("January")
        break

    case "april":
        console.log("April")
        break

    default:
        console.log("Default Case")
}
```

---

### Why Use break?

Without `break`, execution continues to the next case.

This is called Fall Through.

---

## Truthy and Falsy Values

### Falsy Values

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

---

### Truthy Values

```javascript
"0"
"false"
" "
[]
{}
function(){}
```

These values are considered true in conditions.

---

## Checking Empty Arrays

```javascript
const userEmail = []

if(userEmail.length === 0){
    console.log("Array is empty")
}
```

---

## Checking Empty Objects

```javascript
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}
```

---

## Nullish Coalescing Operator (??)

Works specifically with:

* null
* undefined

Example:

```javascript
let val1

val1 = null ?? 10
```

Output:

```javascript
10
```

---

More Examples:

```javascript
5 ?? 10
```

Output:

```javascript
5
```

```javascript
undefined ?? 15
```

Output:

```javascript
15
```

```javascript
null ?? 10 ?? 20
```

Output:

```javascript
10
```

---

## Ternary Operator

Short form of if-else.

Syntax:

```javascript
condition ? true : false
```

Example:

```javascript
const iceTeaPrice = 100

iceTeaPrice <= 80
? console.log("Less than 80")
: console.log("More than 80")
```

---

# Key Learnings

* Learned how JavaScript executes code internally.
* Understood Global Execution Context.
* Learned Function Execution Context.
* Explored Memory Creation Phase and Execution Phase.
* Understood how the Call Stack works using the LIFO principle.
* Learned conditional statements using if, else if, and else.
* Practiced comparison operators.
* Understood strict equality (`===`).
* Learned logical operators (`&&`, `||`).
* Explored Switch Statements.
* Learned Truthy and Falsy values.
* Checked empty arrays and objects.
* Learned Nullish Coalescing Operator (`??`).
* Practiced Ternary Operator.

# Overall Day 11 Summary

Today I learned how JavaScript executes code behind the scenes using Execution Contexts and the Call Stack. I understood the Memory Creation Phase, Execution Phase, and how function calls are managed using the LIFO principle. I also learned Control Flow in JavaScript, including conditional statements, comparison operators, logical operators, switch statements, truthy and falsy values, the Nullish Coalescing Operator, and the Ternary Operator. These concepts helped me understand how JavaScript makes decisions and executes code efficiently.
