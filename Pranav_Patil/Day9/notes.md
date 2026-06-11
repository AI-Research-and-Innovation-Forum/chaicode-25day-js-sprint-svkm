# 📅 Day 9 – Arrays in JavaScript

## 🎥 Videos

1. **Array in JavaScript | Chai aur JavaScript**
2. **Array Part 2 in JavaScript | Chai aur JavaScript**

---

# 📚 Introduction

Arrays are one of the most important data structures in JavaScript. They allow us to store multiple values in a single variable and provide powerful methods to manipulate and manage data efficiently.

Arrays are widely used in real-world applications for storing lists of users, products, messages, notifications, tasks, and much more.

---

# 🔹 Creating Arrays

### Using Array Literal

```javascript
const myArr = [1, 2, 3, 4, 5];
```

### Using Array Constructor

```javascript
const myArr2 = new Array(1, 2, 3, 4, 5);
```

---

# 🔹 Accessing Elements

Arrays use zero-based indexing.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
```

---

# 🔹 Common Array Methods

## push()

Adds element at the end.

```javascript
const arr = [1, 2, 3];

arr.push(4);

console.log(arr);
```

Output:

```javascript
[1, 2, 3, 4]
```

---

## pop()

Removes last element.

```javascript
arr.pop();
```

Output:

```javascript
[1, 2, 3]
```

---

## unshift()

Adds element at the beginning.

```javascript
arr.unshift(0);
```

Output:

```javascript
[0, 1, 2, 3]
```

---

## shift()

Removes first element.

```javascript
arr.shift();
```

Output:

```javascript
[1, 2, 3]
```

---

# 🔹 Searching Methods

## includes()

Checks whether a value exists.

```javascript
const arr = [1, 2, 3, 4];

arr.includes(3);
```

Output:

```javascript
true
```

---

## indexOf()

Returns index of an element.

```javascript
arr.indexOf(3);
```

Output:

```javascript
2
```

If not found:

```javascript
-1
```

---

# 🔹 Converting Arrays

## join()

Converts array into string.

```javascript
const arr = [1, 2, 3];

arr.join();
```

Output:

```javascript
"1,2,3"
```

---

# 🔹 Slice vs Splice

## slice()

* Does not modify original array.
* Returns selected portion.

```javascript
const arr = [0, 1, 2, 3, 4];

arr.slice(1, 3);
```

Output:

```javascript
[1, 2]
```

Original array remains unchanged.

---

## splice()

* Modifies original array.
* Removes selected elements.

```javascript
const arr = [0, 1, 2, 3, 4];

arr.splice(1, 3);
```

Output:

```javascript
[1, 2, 3]
```

Original array becomes:

```javascript
[0, 4]
```

---

# 🔹 Merging Arrays

## concat()

```javascript
const marvel = ["Thor", "Ironman"];
const dc = ["Batman", "Superman"];

const heroes = marvel.concat(dc);
```

Output:

```javascript
["Thor", "Ironman", "Batman", "Superman"]
```

---

## Spread Operator (...)

```javascript
const heroes = [...marvel, ...dc];
```

Modern and preferred approach.

---

# 🔹 Nested Arrays

```javascript
const anotherArray = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
```

---

## flat()

Converts nested arrays into a single array.

```javascript
anotherArray.flat(Infinity);
```

Output:

```javascript
[1,2,3,4,5,6,7,8,9]
```

---

# 🔹 Useful Array Methods

## Array.isArray()

Checks if value is an array.

```javascript
Array.isArray("Pranav");
```

Output:

```javascript
false
```

```javascript
Array.isArray([1,2,3]);
```

Output:

```javascript
true
```

---

## Array.from()

Creates array from iterable data.

```javascript
Array.from("Pranav");
```

Output:

```javascript
['P','r','a','n','a','v']
```

---

## Array.of()

Creates array from multiple values.

```javascript
Array.of(100, 200, 300);
```

Output:

```javascript
[100, 200, 300]
```

---

# 🌍 Real-World Applications

### E-commerce Websites

* Product listings
* Shopping carts

### Social Media Platforms

* Posts
* Comments
* Notifications

### Task Management Apps

* To-do lists
* Completed tasks

### Messaging Applications

* Chat history
* Contacts list

### Dashboard Systems

* Reports
* Analytics data

---

# 🔑 Key Learnings

* Learned different ways to create arrays.
* Understood array indexing and element access.
* Explored push(), pop(), shift(), and unshift().
* Learned searching using includes() and indexOf().
* Understood conversion using join().
* Mastered the difference between slice() and splice().
* Learned array merging using concat() and spread operator.
* Explored nested arrays and flat().
* Learned Array.isArray(), Array.from(), and Array.of().

---

# 📚 Summary

Today's learning was focused on Arrays, one of the most fundamental concepts in JavaScript. I learned how to create arrays, access elements, and manipulate data using various built-in methods. The most valuable concept was understanding the difference between slice() and splice(), as both seem similar but behave very differently.

I also explored modern techniques such as the spread operator for merging arrays and flat() for handling nested arrays. These methods make working with large collections of data much easier and more efficient.

Arrays are everywhere in real-world applications—from product lists and notifications to chat messages and user data. Understanding these concepts has strengthened my JavaScript foundation and will help me manage data more effectively in future projects.

---

## ✅ Progress

**Day 9/25 Completed**
