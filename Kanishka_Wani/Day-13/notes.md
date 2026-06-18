# Day 13 - JavaScript Notes 🚀

## Lecture 29 - Advanced Loops in JavaScript

In this lecture, I learned modern ways of iterating through arrays, strings, objects, and collections in JavaScript.

---

# for...of Loop

The `for...of` loop is used to iterate over iterable objects like:

* Arrays
* Strings
* Maps

Syntax:

```javascript
for (const value of iterable) {
    // code
}
```

Example:

```javascript
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}
```

Output:

```javascript
1
2
3
4
5
```

---

## Using for...of with Strings

```javascript
const greetings = "Hello World"

for (const char of greetings) {
    console.log(char);
}
```

Each character is accessed one by one.

---

# Maps in JavaScript

A Map stores key-value pairs.

```javascript
const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
```

Maps do not allow duplicate keys.

---

## Iterating Maps

```javascript
for (const [key, value] of map) {
    console.log(key, value);
}
```

Output:

```javascript
IN India
USA United States of America
FR France
```

---

# Why for...of Doesn't Work on Objects

```javascript
const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}
```

```javascript
for (const value of myObject) {
}
```

This gives an error because plain objects are not iterable.

---

# for...in Loop

The `for...in` loop is mainly used for objects.

It returns keys.

Example:

```javascript
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby"
}

for (const key in myObject) {
    console.log(key);
}
```

Output:

```javascript
js
cpp
rb
```

---

## Accessing Values

```javascript
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
```

---

## for...in with Arrays

```javascript
const programming = ["js", "java", "python"]

for (const key in programming) {
    console.log(key);
}
```

Output:

```javascript
0
1
2
```

Array indexes are returned because indexes are keys.

---

# forEach Loop

`forEach()` is an array method.

It executes a callback function for each element.

Syntax:

```javascript
array.forEach(function(item){
    console.log(item);
})
```

---

## Arrow Function

```javascript
coding.forEach((item) => {
    console.log(item);
})
```

---

## Passing Function Reference

```javascript
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
```

---

## Parameters Available

```javascript
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
```

Parameters:

* item
* index
* complete array

---

## Arrays of Objects

Very common when working with APIs and databases.

```javascript
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
```

```javascript
myCoding.forEach((item) => {
    console.log(item.languageName);
})
```

---

# Lecture 30 - Filter, Map and Reduce

These are some of the most important array methods in JavaScript.

---

# forEach Does Not Return Values

```javascript
const values = coding.forEach((item) => {
    return item
})

console.log(values);
```

Output:

```javascript
undefined
```

`forEach()` always returns undefined.

---

# filter()

Used to create a new array based on a condition.

Syntax:

```javascript
const newArray = array.filter((item) => {
    return condition
})
```

---

## Example

```javascript
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => {
    return num > 4
})
```

Output:

```javascript
[5,6,7,8,9,10]
```

---

## Important Note

When using `{}` with arrow functions, use `return`.

```javascript
(num) => {
    return num > 4
}
```

Without return, it will not work.

---

# Filtering Objects

```javascript
let userBooks = books.filter(
    (bk) => bk.genre === "History"
)
```

---

## Multiple Conditions

```javascript
userBooks = books.filter(
    (bk) => bk.publish >= 1995 && bk.genre === "History"
)
```

---

# map()

Used to transform data.

It always returns a new array.

Example:

```javascript
const newNums = myNums.map(
    (num) => num + 10
)
```

Output:

```javascript
[11,12,13,14,15]
```

---

# Method Chaining

One method can be attached after another.

```javascript
const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
```

This creates clean and readable code.

---

# reduce()

Used to combine all values into a single value.

Examples:

* Sum
* Total Price
* Average
* Product

---

## Syntax

```javascript
array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, initialValue)
```

---

## Example

```javascript
const myNums = [1,2,3]

const total = myNums.reduce(
    (acc, curr) => acc + curr,
    0
)
```

Output:

```javascript
6
```

---

# Shopping Cart Example

```javascript
const priceToPay = shoppingCart.reduce(
    (acc, item) => acc + item.price,
    0
)
```

Useful for calculating:

* Cart Total
* Invoice Amount
* Order Value

---

# Key Learnings

* Learned `for...of` loop.
* Learned how Maps work.
* Understood iterable and non-iterable objects.
* Learned `for...in` loop.
* Practiced `forEach()`.
* Worked with arrays of objects.
* Learned why `forEach()` doesn't return values.
* Learned `filter()`.
* Learned `map()`.
* Learned method chaining.
* Learned `reduce()`.
* Built logic similar to real-world applications such as shopping carts and API data processing.

# Overall Day 13 Summary

Today I learned advanced array iteration techniques in JavaScript. I explored `for...of`, `for...in`, and `forEach` loops and understood where each one should be used. I also learned the powerful array methods `filter`, `map`, and `reduce`, which are widely used in real-world development for handling API data, transforming arrays, filtering records, and calculating totals. These methods made my code cleaner, shorter, and easier to read.
