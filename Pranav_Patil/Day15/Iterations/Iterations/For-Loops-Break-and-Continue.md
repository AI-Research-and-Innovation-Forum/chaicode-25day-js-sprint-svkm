# 📅 Day 15 

# For Loop, Break & Continue in JavaScript

## 🎥 Video

**For Loop with Break and Continue in JavaScript | Chai aur JavaScript**

---

# 📚 Introduction

Until now, most of our programs have executed statements one by one. However, in real-world applications, we often need to perform the same task multiple times.

Examples:

* Display all products in an online store.
* Show all messages in a chat application.
* Process thousands of user records from a database.
* Generate reports and statistics.

Writing the same code repeatedly would be inefficient. This is where **Loops** come into the picture.

A loop allows JavaScript to execute a block of code multiple times until a condition becomes false.

In this session, I learned about:

* For Loops
* Nested Loops
* Looping through Arrays
* Break Statement
* Continue Statement

---

# 🔹 What is a Loop?

A loop is a control structure that repeatedly executes a block of code while a condition remains true.

Instead of:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

We can use:

```javascript
for(let i = 1; i <= 5; i++){
    console.log(i);
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

# 🔹 The For Loop

The most commonly used loop in JavaScript.

### Syntax

```javascript
for(initialization; condition; increment/decrement){
    // code block
}
```

---

# Understanding the Three Parts

### 1. Initialization

```javascript
let i = 0;
```

Runs only once when the loop starts.

---

### 2. Condition

```javascript
i < 5
```

Checked before every iteration.

If true → execute loop.

If false → stop loop.

---

### 3. Increment / Decrement

```javascript
i++
```

Updates the loop variable after each iteration.

---

# Example

```javascript
for(let i = 1; i <= 5; i++){
    console.log(i);
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

# Loop Execution Flow

```javascript
for(let i = 1; i <= 3; i++){
    console.log(i);
}
```

Step-by-step:

```text
i = 1 → condition true → print 1
i = 2 → condition true → print 2
i = 3 → condition true → print 3
i = 4 → condition false → stop
```

---

# 🔹 Printing Tables

Example:

```javascript
for(let i = 1; i <= 10; i++){
    console.log(`2 x ${i} = ${2 * i}`);
}
```

Output:

```text
2 x 1 = 2
2 x 2 = 4
...
2 x 10 = 20
```

---

# 🔹 Nested Loops

A loop inside another loop.

### Syntax

```javascript
for(){
    for(){
        
    }
}
```

---

# Example

```javascript
for(let i = 1; i <= 3; i++){

    for(let j = 1; j <= 3; j++){

        console.log(i, j);

    }

}
```

Output:

```text
1 1
1 2
1 3

2 1
2 2
2 3

3 1
3 2
3 3
```

---

# Multiplication Table Using Nested Loop

```javascript
for(let i = 1; i <= 10; i++){

    for(let j = 1; j <= 10; j++){

        console.log(`${i} * ${j} = ${i*j}`);

    }

}
```

---

# 🔹 Looping Through Arrays

Arrays are one of the most common structures used with loops.

Example:

```javascript
const fruits = ["Apple", "Banana", "Mango"];
```

---

### Accessing Array Elements

```javascript
for(let i = 0; i < fruits.length; i++){

    console.log(fruits[i]);

}
```

Output:

```text
Apple
Banana
Mango
```

---

# Understanding length

```javascript
fruits.length
```

Returns:

```text
3
```

This helps determine when to stop the loop.

---

# Why Arrays and Loops Go Together

Real-world examples:

### E-Commerce

```text
Product List
```

### Social Media

```text
Posts
Comments
Notifications
```

### Messaging Apps

```text
Chat Messages
Contacts
```

Almost every collection of data is processed using loops.

---

# 🔹 Break Statement

The `break` statement immediately terminates a loop.

### Syntax

```javascript
break;
```

---

# Example

```javascript
for(let i = 1; i <= 10; i++){

    if(i === 5){
        break;
    }

    console.log(i);

}
```

Output:

```text
1
2
3
4
```

Loop stops completely when `i` becomes 5.

---

# Execution Flow

```text
1 → print
2 → print
3 → print
4 → print
5 → break
Loop Ends
```

---

# Real-World Example of Break

Searching a user:

```javascript
for(let i = 0; i < users.length; i++){

    if(users[i].id === targetId){
        console.log("Found");
        break;
    }

}
```

Once user is found:

```text
No need to continue searching
```

---

# 🔹 Continue Statement

The `continue` statement skips the current iteration and moves to the next one.

### Syntax

```javascript
continue;
```

---

# Example

```javascript
for(let i = 1; i <= 5; i++){

    if(i === 3){
        continue;
    }

    console.log(i);

}
```

Output:

```text
1
2
4
5
```

Only 3 is skipped.

---

# Execution Flow

```text
1 → print
2 → print
3 → skip
4 → print
5 → print
```

---

# Break vs Continue

| Feature                  | Break | Continue |
| ------------------------ | ----- | -------- |
| Stops Loop               | ✅ Yes | ❌ No     |
| Skips Current Iteration  | ❌ No  | ✅ Yes    |
| Continues Remaining Loop | ❌ No  | ✅ Yes    |

---

### Break Example

```javascript
if(i === 5){
    break;
}
```

Output:

```text
1
2
3
4
```

---

### Continue Example

```javascript
if(i === 5){
    continue;
}
```

Output:

```text
1
2
3
4
6
7
8
9
10
```

---

# Common Mistakes

## Infinite Loops

```javascript
for(let i = 1; i > 0; i++){

}
```

Condition never becomes false.

---

## Wrong Array Condition

```javascript
for(let i = 0; i <= arr.length; i++)
```

Should be:

```javascript
for(let i = 0; i < arr.length; i++)
```

Because last index is:

```text
length - 1
```

---

# Real-World Applications

## E-Commerce

* Display products
* Process cart items

---

## Social Media

* Show posts
* Show comments

---

## Games

* Update player positions
* Process enemies

---

## Dashboards

* Generate reports
* Analyze data

---

## APIs

* Process response arrays

Example:

```javascript
users.forEach(user => {
    console.log(user.name);
});
```

---

# Common Interview Questions

### What is a For Loop?

A loop that repeatedly executes code until a condition becomes false.

---

### Difference Between Break and Continue?

Break stops the entire loop.

Continue skips only the current iteration.

---

### Why Use Nested Loops?

To work with two-dimensional data or repeated combinations.

---

### Why Use Arrays with Loops?

Loops allow processing every element in an array efficiently.

---

# 🔑 Key Learnings

* Learned how For Loops work.
* Understood initialization, condition, and increment.
* Explored loop execution flow.
* Learned Nested Loops.
* Generated multiplication tables.
* Iterated through arrays.
* Learned how Break terminates loops.
* Learned how Continue skips iterations.
* Compared Break vs Continue.
* Connected loops to real-world development.

---

# 📚 Summary

Today's session introduced the For Loop, one of the most commonly used looping structures in JavaScript. I learned how loops automate repetitive tasks and how the initialization, condition, and increment sections work together to control execution.

I also explored nested loops, array iteration, and the difference between Break and Continue. Understanding these concepts made it clear how developers process large collections of data efficiently. Since loops are used everywhere—from product listings and user records to games and APIs—this session strengthened one of the most important programming fundamentals.

---

## ✅ Progress

**Day 15**
**Topic: For Loop, Break & Continue in JavaScript**
