# Day 09 Notes

## Lecture 18: Object Destructuring, JSON & APIs

### 1. Object Destructuring

Object Destructuring is a JavaScript feature that allows us to extract properties from an object and store them in variables.

### Example

```javascript
const course = {
    courseName: "JavaScript Basics",
    price: 999,
    instructor: "Super"
};

const { instructor } = course;

console.log(instructor);
```

### Output

```javascript
Super
```

### Renaming While Destructuring

```javascript
const { instructor: teacher } = course;

console.log(teacher);
```

### Output

```javascript
Super
```

### Benefits

* Cleaner code
* Less repetition
* Commonly used in React

---

## 2. Introduction to APIs

API stands for Application Programming Interface.

An API allows one application to communicate with another application.

### Real Life Example

When you order food from a restaurant:

* You choose an item from the menu.
* You do not know how the food is prepared.
* The restaurant simply gives you the result.

Similarly, APIs provide data without exposing internal implementation.

---

## 3. JSON

JSON stands for JavaScript Object Notation.

It is the most common format used for data exchange between applications.

### JSON Example

```json
{
    "name": "Super",
    "course": "JavaScript",
    "price": "999"
}
```

### Characteristics

* Keys are strings
* Values can be strings, numbers, booleans, arrays, or objects
* Lightweight and easy to read

---

## 4. API Response Example

```json
{
    "login": "octocat",
    "id": 1,
    "type": "User"
}
```

Data received from APIs is usually in JSON format.

---

## 5. JSON Formatter

JSON responses can be difficult to read.

JSON Formatter tools help:

* Format JSON
* View nested data
* Understand API responses
* Explore arrays and objects

---

# Lecture 19: JavaScript Functions

## 1. What is a Function?

A function is a block of reusable code that performs a specific task.

### Syntax

```javascript
function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("P");
    console.log("E");
    console.log("R");
}
```

### Function Call

```javascript
sayMyName();
```

---

## 2. Function with Parameters

Parameters are variables declared inside the function definition.

### Example

```javascript
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(3, 4);
```

### Output

```javascript
7
```

---

## 3. Parameters vs Arguments

| Parameter                       | Argument                    |
| ------------------------------- | --------------------------- |
| Defined in function declaration | Passed during function call |
| Placeholder value               | Actual value                |
| num1, num2                      | 3, 4                        |

### Example

```javascript
function addTwoNumbers(num1, num2) {
}
```

Parameters:

```javascript
num1, num2
```

Arguments:

```javascript
addTwoNumbers(3, 4);
```

---

## 4. Return Statement

The return keyword sends a value back from the function.

### Example

```javascript
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(3, 5);

console.log(result);
```

### Output

```javascript
8
```

---

## 5. Difference Between console.log() and return

### Using console.log()

```javascript
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
```

Prints output but returns nothing.

### Using return

```javascript
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
```

Returns value for future use.

---

## 6. Login User Message Example

```javascript
function loginUserMessage(username) {
    return `${username} just logged in`;
}

console.log(loginUserMessage("Dev"));
```

### Output

```javascript
Dev just logged in
```

---

## 7. Undefined Value

If no argument is passed:

```javascript
function loginUserMessage(username) {
    return `${username} just logged in`;
}

console.log(loginUserMessage());
```

### Output

```javascript
undefined just logged in
```

---

## 8. Validation Using if Statement

```javascript
function loginUserMessage(username) {

    if (!username) {
        console.log("Please enter username");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage());
```

### Output

```javascript
Please enter username
```

---

## 9. Default Parameters

```javascript
function loginUserMessage(username = "Guest") {
    return `${username} just logged in`;
}

console.log(loginUserMessage());
```

### Output

```javascript
Guest just logged in
```

---

# Key Takeaways

### Lecture 18

* Object Destructuring
* Renaming Variables
* JSON Basics
* API Fundamentals
* JSON Formatter Usage

### Lecture 19

* Function Declaration
* Function Execution
* Parameters and Arguments
* Return Values
* Undefined Handling
* Default Parameters
* Input Validation

---

## Quick Revision

```text
Object Destructuring → Extract values from objects

JSON → Data exchange format

API → Communication between applications

Function → Reusable block of code

Parameter → Variable in function definition

Argument → Actual value passed

return → Sends value back from function

Default Parameter → Backup value when argument is missing
```
