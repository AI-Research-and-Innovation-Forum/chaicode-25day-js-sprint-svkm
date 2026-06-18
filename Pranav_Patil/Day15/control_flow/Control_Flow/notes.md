# 📅 Day 15 

# Control Flow in JavaScript (1 Shot)

🎥 **Video:**
*Control Flow in JavaScript in 1 Shot | Chai aur JavaScript*

---

# 📚 Introduction

Writing code is not just about executing statements one after another. In real-world applications, programs need to make decisions based on conditions.

### Examples

* If user enters correct password → Login
* If cart total exceeds ₹500 → Apply free shipping
* If age is above 18 → Allow registration
* If payment succeeds → Place order

This decision-making ability is known as **Control Flow**.

Control Flow determines the order in which JavaScript executes statements.

---

# What is Control Flow?

Control Flow refers to the mechanism that controls:

* Which code executes
* When it executes
* Under what conditions it executes

Without control flow, JavaScript would execute every line sequentially.

---

# Types of Control Flow

JavaScript provides several control flow structures:

1. if
2. if-else
3. else-if ladder
4. Nested if
5. switch
6. Truthy & Falsy values
7. Nullish Coalescing Operator (`??`)
8. Ternary Operator

---

# The if Statement

Used to execute code only when a condition is true.

## Syntax

```javascript
if(condition){
    // code
}
```

## Example

```javascript
const age = 20;

if(age >= 18){
    console.log("Eligible to vote");
}
```

### Output

```text
Eligible to vote
```

---

# Comparison Operators

Control flow heavily depends on comparison operators.

| Operator | Meaning               |
| -------- | --------------------- |
| ==       | Equal                 |
| ===      | Strict Equal          |
| !=       | Not Equal             |
| !==      | Strict Not Equal      |
| >        | Greater Than          |
| <        | Less Than             |
| >=       | Greater Than or Equal |
| <=       | Less Than or Equal    |

---

# == vs ===

A very common interview question.

## Double Equals (==)

Checks only value.

```javascript
console.log(2 == "2");
```

### Output

```text
true
```

JavaScript automatically converts data types.

---

## Triple Equals (===)

Checks both value and datatype.

```javascript
console.log(2 === "2");
```

### Output

```text
false
```

Because Number ≠ String.

### Recommendation

Always prefer:

```javascript
===
```

It avoids unexpected type conversions.

---

# if-else Statement

Used when there are two possible outcomes.

## Syntax

```javascript
if(condition){
    // code
}
else{
    // code
}
```

## Example

```javascript
const temperature = 35;

if(temperature > 30){
    console.log("Hot");
}
else{
    console.log("Cool");
}
```

---

# else-if Ladder

Used when multiple conditions need to be checked.

## Example

```javascript
const marks = 75;

if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 70){
    console.log("Grade B");
}
else if(marks >= 50){
    console.log("Grade C");
}
else{
    console.log("Fail");
}
```

### Output

```text
Grade B
```

---

# Nested if Statements

An `if` statement inside another `if`.

## Example

```javascript
const loggedIn = true;
const isAdmin = true;

if(loggedIn){
    if(isAdmin){
        console.log("Access Granted");
    }
}
```

### Output

```text
Access Granted
```

---

# Logical Operators

## AND Operator (&&)

Both conditions must be true.

```javascript
if(age > 18 && hasLicense){
    console.log("Can Drive");
}
```

---

## OR Operator (||)

At least one condition must be true.

```javascript
if(isAdmin || isModerator){
    console.log("Access Granted");
}
```

---

## NOT Operator (!)

Reverses a boolean value.

```javascript
console.log(!true);
```

### Output

```text
false
```

---

# switch Statement

Used when multiple fixed options exist.

## Syntax

```javascript
switch(key){
    case value:
        break;

    default:
        break;
}
```

## Example

```javascript
const month = 3;

switch(month){
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    default:
        console.log("Invalid");
}
```

### Output

```text
March
```

---

# Importance of break

Without `break`:

```javascript
case 1:
    console.log("January");

case 2:
    console.log("February");
```

Both cases execute.

This behavior is called:

**Fall Through**

---

# Truthy and Falsy Values

JavaScript automatically converts values into boolean form while evaluating conditions.

---

## Falsy Values

Only these values are falsy:

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

### Example

```javascript
if(false){
    console.log("Run");
}
```

Nothing executes.

---

## Truthy Values

Everything else is truthy.

### Examples

```javascript
"0"
"false"
[]
{}
function(){}
```

### Example

```javascript
if([]){
    console.log("Truthy");
}
```

### Output

```text
Truthy
```

Even an empty array is truthy.

---

# Checking Empty Array

```javascript
const arr = [];

if(arr.length === 0){
    console.log("Array Empty");
}
```

---

# Checking Empty Object

```javascript
const user = {};

if(Object.keys(user).length === 0){
    console.log("Object Empty");
}
```

---

# Nullish Coalescing Operator (??)

Used to handle `null` and `undefined` safely.

## Syntax

```javascript
value1 ?? value2
```

---

## Example 1

```javascript
let val = null ?? 10;
```

### Output

```text
10
```

---

## Example 2

```javascript
let val = undefined ?? 20;
```

### Output

```text
20
```

---

## Example 3

```javascript
let val = null ?? 10 ?? 20;
```

### Output

```text
10
```

JavaScript returns the first value that is neither `null` nor `undefined`.

---

# Why Nullish Coalescing Matters

Useful when working with APIs.

```javascript
const username = apiUser ?? "Guest";
```

If API does not send a username:

```text
Guest
```

will be used.

---

# Ternary Operator

A shorthand version of `if-else`.

## Syntax

```javascript
condition ? trueStatement : falseStatement
```

## Example

```javascript
const price = 100;

price >= 80
    ? console.log("Expensive")
    : console.log("Affordable");
```

### Output

```text
Expensive
```

---

# if-else vs Ternary

## if-else

```javascript
if(isLoggedIn){
    console.log("Welcome");
}
else{
    console.log("Login First");
}
```

## Ternary

```javascript
isLoggedIn
    ? console.log("Welcome")
    : console.log("Login First");
```

---

# Real-World Applications

## Authentication Systems

```javascript
if(passwordCorrect){
    login();
}
```

---

## E-Commerce

```javascript
if(cartTotal > 500){
    freeShipping();
}
```

---

## Gaming

```javascript
if(playerHealth <= 0){
    gameOver();
}
```

---

## Payment Systems

```javascript
switch(paymentMethod){
    case "UPI":
    case "Card":
}
```

---

## API Handling

```javascript
const user = apiData ?? {};
```

---

# Common Interview Questions

## 1. Difference between == and ===?

* `==` checks value only.
* `===` checks value and datatype.

---

## 2. What are Falsy Values?

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

## 3. What is the Nullish Coalescing Operator?

Returns the first value that is not:

* null
* undefined

---

## 4. Why use switch?

Used when multiple fixed options need checking.

---

## 5. What is a Ternary Operator?

A shorthand version of `if-else`.

---

# 🔑 Key Learnings

* Learned how control flow works.
* Understood `if`, `if-else`, and `else-if` ladder.
* Explored comparison operators.
* Learned the difference between `==` and `===`.
* Understood nested `if` statements.
* Learned logical operators (`&&`, `||`, `!`).
* Explored `switch` statements and `break`.
* Learned truthy and falsy values.
* Understood Nullish Coalescing Operator (`??`).
* Learned how ternary operators simplify conditions.
* Connected control flow concepts to real-world applications.

---

# 📚 Summary

Today's session focused on how JavaScript makes decisions using control flow statements. I learned how conditions are evaluated using `if`, `else-if`, and `switch` statements, and why strict equality (`===`) is preferred over loose equality (`==`).

Understanding truthy and falsy values helped me realize how JavaScript interprets different data types inside conditions. The introduction to the Nullish Coalescing Operator and Ternary Operator showed modern ways of writing cleaner and safer code.

Overall, this session helped me understand how real-world applications make decisions and respond dynamically based on user input, data, and program state.

---

# ✅ Progress

**Day 15**

**Topic:** Control Flow in JavaScript
