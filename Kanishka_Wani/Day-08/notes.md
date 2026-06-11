# Day 08 - JavaScript Notes 🚀

## Lecture 19 - Functions in JavaScript

### What is a Function?

A function is a block of code designed to perform a specific task. It helps us avoid writing the same code multiple times.

```javascript
function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("K");
    console.log("A");
}
```

Calling the function:

```javascript
sayMyName()
```

---

## Function Parameters and Arguments

### Parameters

Variables defined in the function declaration are called parameters.

```javascript
function addTwoNumbers(num1, num2){
    
}
```

Here, `num1` and `num2` are parameters.

---

### Arguments

Values passed while calling the function are called arguments.

```javascript
addTwoNumbers(3, 4)
```

Here, `3` and `4` are arguments.

---

## Function Without Return

```javascript
function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}
```

When we use `console.log()` inside a function, the result is displayed but not returned.

```javascript
const result = addTwoNumbers(3, 4)

console.log(result)
```

Output:

```javascript
7
undefined
```

Because the function does not return anything.

---

## Function With Return

```javascript
function addTwoNumbers(num1, num2){
    return num1 + num2
}
```

```javascript
const result = addTwoNumbers(3, 4)

console.log(result)
```

Output:

```javascript
7
```

Using `return` sends the value back to the place where the function was called.

---

## Default Parameters

We can provide default values to parameters.

```javascript
function loginUserMessage(username = "sam"){
    return `${username} just logged in`
}
```

```javascript
console.log(loginUserMessage())
```

Output:

```javascript
sam just logged in
```

If no value is passed, the default value is used.

---

## Checking Empty Input

```javascript
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }

    return `${username} just logged in`
}
```

```javascript
loginUserMessage()
```

Output:

```javascript
Please enter a username
```

This prevents further execution when the required value is missing.

---

## Rest Operator (...)

Used when we don't know how many arguments will be passed.

```javascript
function calculateCartPrice(...num1){
    return num1
}
```

```javascript
calculateCartPrice(200, 400, 500, 2000)
```

Output:

```javascript
[200, 400, 500, 2000]
```

---

### Rest Operator with Multiple Parameters

```javascript
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
```

```javascript
calculateCartPrice(200, 400, 500, 2000)
```

Output:

```javascript
[500, 2000]
```

`val1` gets `200`

`val2` gets `400`

Remaining values go into `num1`.

---

## Passing Objects to Functions

Objects can be passed directly to functions.

```javascript
const user = {
    username: "kanishka",
    price: 199
}
```

```javascript
function handleObject(anyObject){
    console.log(
        `UserName is ${anyObject.username} and price is ${anyObject.price}`
    )
}
```

```javascript
handleObject(user)
```

---

### Passing Object Directly

```javascript
handleObject({
    username: "sam",
    price: 399
})
```

No need to create a separate variable.

---

## Passing Arrays to Functions

Arrays can also be passed as arguments.

```javascript
const myNewArray = [200, 400, 500, 100]
```

```javascript
function returnSecondValue(getArray){
    return getArray[1]
}
```

```javascript
returnSecondValue(myNewArray)
```

Output:

```javascript
400
```

---

### Passing Array Directly

```javascript
returnSecondValue([200, 500, 100, 900])
```

Output:

```javascript
500
```

---

## Important Difference

### Function Declaration

```javascript
function greet(){
    console.log("Hello")
}
```

### Function Call

```javascript
greet()
```

* Function declaration defines the function.
* Function call executes the function.

---

# Key Learnings

* Learned how to declare and call functions.
* Understood the difference between parameters and arguments.
* Learned the difference between using and not using the `return` keyword.
* Practiced default parameters.
* Handled missing user input using conditions.
* Used the rest operator (`...`) to accept multiple values.
* Passed objects to functions.
* Passed arrays to functions.
* Returned values from functions and stored them in variables.

# Overall Day 08 Summary

Today I learned Functions in JavaScript and understood why they are important for writing reusable code. I practiced creating functions, passing parameters and arguments, using return statements, handling default values, and validating user input. I also learned how to work with the rest operator, pass objects and arrays to functions, and return specific values from them. This topic helped me understand how data flows in and out of functions, which is a fundamental concept in JavaScript.
