# 📅 Day 15

# While and Do While Loop in JavaScript

## 🎥 Video

**While and Do While Loop in JavaScript | Chai aur JavaScript**

---

# 📚 Introduction

Loops are one of the most powerful concepts in programming because they allow us to execute a block of code repeatedly without writing the same code multiple times.

In the previous session, I learned about the **For Loop**. Today, I explored two more looping structures:

* While Loop
* Do While Loop

Although all loops can be used to perform repetitive tasks, each loop has its own use cases and advantages. Understanding when to use a While Loop instead of a For Loop is an important programming skill.

---

# 🔹 What is a While Loop?

A While Loop repeatedly executes a block of code as long as a specified condition remains true.

### Syntax

```javascript
while(condition){
    // code block
}
```

The condition is checked before every iteration.

If the condition becomes false, the loop stops.

---

# Basic Example

```javascript
let index = 1;

while(index <= 5){
    console.log(index);
    index++;
}
```

Output:

```text
1
2
3
4
5
```

---

# Execution Flow

Step 1:

```javascript
index = 1
```

Condition:

```javascript
1 <= 5
```

True → Execute

---

Step 2:

```javascript
index++
```

index becomes:

```javascript
2
```

---

This process continues until:

```javascript
index = 6
```

Condition becomes false.

Loop stops.

---

# Why Use While Loop?

While loops are useful when:

```text
Number of iterations is unknown
```

Examples:

* Waiting for user input
* Game loops
* API retries
* Processing dynamic data

---

# Example: Printing Even Numbers

```javascript
let num = 2;

while(num <= 10){
    console.log(num);
    num += 2;
}
```

Output:

```text
2
4
6
8
10
```

---

# Example: Working with Arrays

```javascript
const heroes = ["Batman", "Superman", "Ironman"];

let arr = 0;

while(arr < heroes.length){

    console.log(heroes[arr]);

    arr++;
}
```

Output:

```text
Batman
Superman
Ironman
```

---

# Infinite While Loop

One of the most common mistakes.

```javascript
let i = 1;

while(i <= 5){
    console.log(i);
}
```

Problem:

```text
i never changes
```

Condition remains true forever.

Result:

```text
Infinite Loop
```

Browser may freeze or crash.

---

# Correct Version

```javascript
let i = 1;

while(i <= 5){

    console.log(i);

    i++;

}
```

---

# Real-World Example

Imagine an OTP verification system.

```javascript
let attempts = 0;

while(attempts < 3){

    // ask user for OTP

    attempts++;

}
```

The loop continues until:

```text
Maximum attempts reached
```

---

# 🔹 What is a Do While Loop?

A Do While Loop is similar to a While Loop.

The difference is:

```text
While → Checks condition first

Do While → Executes first, checks later
```

---

# Syntax

```javascript
do{

    // code

} while(condition);
```

---

# Basic Example

```javascript
let score = 1;

do{

    console.log(score);

    score++;

} while(score <= 5);
```

Output:

```text
1
2
3
4
5
```

---

# Execution Flow

Step 1:

```text
Execute code block
```

---

Step 2:

Check condition.

If true:

```text
Repeat
```

If false:

```text
Stop
```

---

# Important Difference

Consider:

```javascript
let score = 11;

while(score <= 10){

    console.log(score);

}
```

Output:

```text
Nothing
```

Because condition is false initially.

---

Now:

```javascript
let score = 11;

do{

    console.log(score);

} while(score <= 10);
```

Output:

```text
11
```

The code executes once before checking the condition.

---

# Why Does Do While Matter?

Useful when:

```text
At least one execution is required
```

Examples:

* Menu systems
* User prompts
* Retry mechanisms
* Login attempts

---

# Example: Menu System

```javascript
let choice;

do{

    console.log("1. Start");
    console.log("2. Exit");

    choice = 2;

} while(choice !== 2);
```

The menu appears at least once.

---

# While vs Do While

| Feature                | While Loop          | Do While Loop           |
| ---------------------- | ------------------- | ----------------------- |
| Condition Checked      | Before Execution    | After Execution         |
| Executes At Least Once | ❌ No                | ✅ Yes                   |
| Suitable For           | Unknown repetitions | One mandatory execution |
| Common Usage           | Data processing     | Menus and prompts       |

---

# Comparison Example

### While Loop

```javascript
let num = 10;

while(num < 5){

    console.log(num);

}
```

Output:

```text
No Output
```

---

### Do While Loop

```javascript
let num = 10;

do{

    console.log(num);

} while(num < 5);
```

Output:

```text
10
```

---

# Choosing the Right Loop

### Use For Loop When

```text
Number of iterations is known
```

Example:

```javascript
for(let i = 1; i <= 10; i++)
```

---

### Use While Loop When

```text
Number of iterations is unknown
```

Example:

```javascript
while(userLoggedIn)
```

---

### Use Do While When

```text
Execution must happen at least once
```

Example:

```javascript
do{
    showMenu();
}
while(choice !== "Exit")
```

---

# Real-World Applications

## Games

```javascript
while(gameRunning){
    updateGame();
}
```

---

## Authentication Systems

```javascript
while(attempts < 3){
    verifyPassword();
}
```

---

## Chat Applications

```javascript
while(messagesAvailable){
    displayMessages();
}
```

---

## Menu-Based Programs

```javascript
do{
    showOptions();
}
while(userChoice !== "Exit");
```

---

## API Retry Systems

```javascript
while(retryCount < 5){
    fetchData();
}
```

---

# Common Interview Questions

### What is a While Loop?

A loop that executes repeatedly as long as a condition remains true.

---

### What is a Do While Loop?

A loop that executes once before checking the condition.

---

### Main Difference?

While checks condition first.

Do While executes first and checks later.

---

### Which Loop Executes At Least Once?

```javascript
do while
```

---

### Why Do Infinite Loops Occur?

Because the condition never becomes false.

---

# 🔑 Key Learnings

* Learned the syntax of While Loops.
* Understood loop execution flow.
* Learned how to iterate through arrays using While.
* Explored Infinite Loops and how to avoid them.
* Learned the syntax of Do While Loops.
* Understood the key difference between While and Do While.
* Learned why Do While executes at least once.
* Compared For, While, and Do While loops.
* Connected loops to real-world programming scenarios.

---

# 📚 Summary

Today's session introduced While and Do While loops, two important looping structures in JavaScript. I learned that While loops are useful when the number of iterations is unknown and execution depends on a condition. Understanding how conditions are evaluated before each iteration helped me see why updating loop variables is essential to avoid infinite loops.

The most interesting concept was the Do While loop, which guarantees at least one execution before checking the condition. This makes it useful for menu-driven applications, user prompts, and retry systems. Overall, this session strengthened my understanding of loops and helped me understand when to choose For, While, or Do While loops in real-world applications.

---

## ✅ Progress

**Day 15**
**Topic: While and Do While Loop in JavaScript**
