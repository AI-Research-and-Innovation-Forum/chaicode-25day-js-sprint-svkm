# Day 12 - JavaScript Notes

## Lecture 25 & 26

### Control Flow, Conditional Statements & Truthy/Falsy Values

---

# What is Control Flow?

Control Flow decides which part of the code should execute and which should be skipped based on conditions.

Example:

```javascript
let temperature = 35;

if (temperature > 30) {
    console.log("It's Hot");
}
```

Output:

```javascript
It's Hot
```

---

# if Statement

Used to execute code only when a condition is true.

```javascript
let age = 18;

if(age >= 18){
    console.log("Eligible to Vote");
}
```

---

# if-else Statement

Runs one block if condition is true and another block if false.

```javascript
let age = 16;

if(age >= 18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}
```

Output:

```javascript
Not Eligible
```

---

# else if Statement

Used when multiple conditions need to be checked.

```javascript
let marks = 75;

if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 70){
    console.log("Grade B");
}
else{
    console.log("Grade C");
}
```

---

# Comparison Operators

| Operator | Meaning                 |
| -------- | ----------------------- |
| >        | Greater Than            |
| <        | Less Than               |
| >=       | Greater Than or Equal   |
| <=       | Less Than or Equal      |
| ==       | Value Comparison        |
| ===      | Value + Type Comparison |
| !=       | Not Equal               |
| !==      | Strict Not Equal        |

Example:

```javascript
console.log(2 == "2");   // true
console.log(2 === "2");  // false
```

### Why use === ?

Because it checks both value and datatype.

```javascript
2 === "2"
```

Output:

```javascript
false
```

---

# Logical Operators

## AND (&&)

All conditions must be true.

```javascript
if(userLoggedIn && debitCard){
    console.log("Allow Purchase");
}
```

---

## OR (||)

At least one condition must be true.

```javascript
if(googleLogin || emailLogin){
    console.log("User Logged In");
}
```

---

# Nested Conditions

Condition inside another condition.

```javascript
if(userLoggedIn){
    if(userRole === "admin"){
        console.log("Access Granted");
    }
}
```

---

# One Line if Statement

```javascript
if(balance > 500) console.log("Balance Available");
```

Multiple statements:

```javascript
if(balance > 500) console.log("Test1"), console.log("Test2");
```

Not recommended for large programs.

---

# Switch Statement

Used when checking many possible values.

Syntax:

```javascript
switch(key){
    case value:
        // code
        break;

    default:
        // code
}
```

Example:

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
        console.log("Invalid Month");
}
```

Output:

```javascript
March
```

---

# Importance of break

Without break, execution continues to next cases.

Example:

```javascript
const month = 1;

switch(month){
    case 1:
        console.log("January");

    case 2:
        console.log("February");

    case 3:
        console.log("March");
}
```

Output:

```javascript
January
February
March
```

This is called Fall Through.

---

# Truthy and Falsy Values

JavaScript automatically converts values into true or false when checking conditions.

Example:

```javascript
const username = "Super";

if(username){
    console.log("User Exists");
}
```

Output:

```javascript
User Exists
```

Because non-empty strings are Truthy.

---

# Falsy Values

There are only a few Falsy values:

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

Example:

```javascript
if(false){
    console.log("Runs");
}
```

Output:

Nothing

---

# Truthy Values

Everything else is generally Truthy.

Examples:

```javascript
"0"
"false"
[]
{}
function(){}
```

---

# Checking Empty Array

```javascript
const arr = [];

if(arr.length === 0){
    console.log("Array is Empty");
}
```

Output:

```javascript
Array is Empty
```

---

# Checking Empty Object

```javascript
const user = {};

if(Object.keys(user).length === 0){
    console.log("Object is Empty");
}
```

Output:

```javascript
Object is Empty
```

---

# Nullish Coalescing Operator (??)

Handles only:

```javascript
null
undefined
```

Example:

```javascript
let value = null ?? 10;

console.log(value);
```

Output:

```javascript
10
```

Another Example:

```javascript
let value = undefined ?? 20;

console.log(value);
```

Output:

```javascript
20
```

---

# Difference Between || and ??

OR Operator:

```javascript
0 || 10
```

Output:

```javascript
10
```

Because 0 is falsy.

Nullish Operator:

```javascript
0 ?? 10
```

Output:

```javascript
0
```

Because ?? only checks null and undefined.

---

# Ternary Operator

Short form of if-else.

Syntax:

```javascript
condition ? trueStatement : falseStatement
```

Example:

```javascript
const price = 100;

price >= 80
? console.log("Expensive")
: console.log("Cheap");
```

Output:

```javascript
Expensive
```

---

# Quick Revision

✅ if executes code when condition is true

✅ else runs when condition is false

✅ === checks value and datatype

✅ && means ALL conditions true

✅ || means ANY condition true

✅ switch is used for multiple choices

✅ break prevents fall-through

✅ Empty arrays and objects are Truthy

✅ Use length to check empty arrays

✅ Use Object.keys().length for empty objects

✅ ?? handles null and undefined only

✅ Ternary Operator is shorthand for if-else

---

# Interview Questions

### Q1. Difference between == and === ?

== compares values only.

=== compares value and datatype.

---

### Q2. What are Falsy Values?

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

### Q3. How do you check if an array is empty?

```javascript
arr.length === 0
```

---

### Q4. How do you check if an object is empty?

```javascript
Object.keys(obj).length === 0
```

---

### Q5. Why use ?? operator?

To provide default values only when a variable is null or undefined.

---

### Q6. What is a Ternary Operator?

Short form of if-else.

```javascript
condition ? trueValue : falseValue
```
