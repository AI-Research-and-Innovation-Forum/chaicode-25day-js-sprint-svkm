# Day 06 - JavaScript Notes

## Lecture 14 - Arrays

### What is an Array?

Array is a data structure used to store multiple values in a single variable.

JavaScript arrays are:

* Resizable (size can be changed)
* Can store elements of different datatypes
* Indexed starting from 0

### How to Declare Arrays

```javascript
const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["shaktiman", "naagraj", "bheem"]

const myArr2 = new Array(1, 2, 3, 4)
```

### Accessing Array Elements

```javascript
console.log(myArr[0])
console.log(myHeros[0])
```

---

## Array Methods

### push()

Adds element at the end of array.

```javascript
myArr.push(6)
myArr.push(7)
```

### pop()

Removes last element from array.

```javascript
myArr.pop()
```

### unshift()

Adds element at the beginning of array.

```javascript
myArr.unshift(9)
```

Note:

When array has many elements, unshift() can be time consuming because all indexes need to be shifted.

### shift()

Removes first element from array.

```javascript
myArr.shift()
```

### includes()

Checks whether a value exists in array.

```javascript
myArr.includes(9)
```

### indexOf()

Returns index of a value.

```javascript
myArr.indexOf(3)
```

### join()

Converts array into string.

```javascript
const newArr = myArr.join()
```

```javascript
typeof newArr // string
typeof myArr  // object
```

---

## slice() vs splice()

Consider:

```javascript
const arr = [0, 1, 2, 3, 4, 5]
```

### slice()

```javascript
const result = arr.slice(1, 3)

console.log(result) // [1, 2]
console.log(arr)    // [0, 1, 2, 3, 4, 5]
```

Properties:

* Does not modify original array.
* End index is not included.
* Returns a copy of selected elements.

### splice()

```javascript
const result = arr.splice(1, 3)

console.log(result) // [1, 2, 3]
console.log(arr)    // [0, 4, 5]
```

Properties:

* Modifies original array.
* Removes elements from original array.
* Returns removed elements.

### Difference Between slice() and splice()

| slice()                          | splice()                     |
| -------------------------------- | ---------------------------- |
| Original array remains unchanged | Original array gets modified |
| End index is not included        | Removes specified elements   |
| Returns copied elements          | Returns removed elements     |

---

## Lecture 15 - Array Part 2

### Combining Arrays

```javascript
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
```

### push()

```javascript
marvel_heros.push(dc_heros)
```

Output:

```javascript
[
  "thor",
  "ironman",
  "spiderman",
  ["superman", "flash", "batman"]
]
```

The entire dc_heros array is added as a single element.

### concat()

```javascript
const allHeros = marvel_heros.concat(dc_heros)
```

Output:

```javascript
[
  "thor",
  "ironman",
  "spiderman",
  "superman",
  "flash",
  "batman"
]
```

Elements from both arrays are combined into one new array.

### Difference Between push() and concat()

push():

* Adds array as a single element.
* Modifies original array.

concat():

* Combines elements of arrays.
* Returns a new array.
* Does not modify original array.

---

## Spread Operator (...)

Modern way to combine arrays.

```javascript
const all_new_heros = [...marvel_heros, ...dc_heros]
```

Why it is preferred:

* Cleaner syntax.
* Easy to combine multiple arrays.
* More commonly used in modern JavaScript.

---

## flat()

Used to remove nested arrays.

```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
```

Output:

```javascript
[1, 2, 3, 4, 5, 6, 7, 4, 5]
```

Infinity means flatten all nesting levels.

Why use flat()?

* Removes nested arrays.
* Creates a single-level array.
* Useful when dealing with deeply nested arrays.

---

## Array Utility Methods

### Array.isArray()

Checks whether a value is an array.

```javascript
Array.isArray("kanishka")
```

### Array.from()

Creates array from iterable values.

```javascript
Array.from("kanishka")
```

Output:

```javascript
['k', 'a', 'n', 'i', 's', 'h', 'k', 'a']
```

Interesting:

```javascript
Array.from({ name: "kanishka" })
```

Returns an empty array because JavaScript does not know whether to create an array from keys or values.

### Array.of()

Creates array from multiple values.

```javascript
let score1 = 100
let score2 = 200
let score3 = 300

Array.of(score1, score2, score3)
```

Output:

```javascript
[100, 200, 300]
```

---

# Overall Day 06 Summary

Today I learned:

* Arrays are resizable and can store different datatypes.
* How to create and access arrays.
* Important array methods like push(), pop(), shift(), unshift(), includes(), indexOf() and join().
* Difference between slice() and splice().
* Difference between push() and concat().
* How spread operator (...) is used to combine arrays.
* Why spread operator is preferred in modern JavaScript.
* How to flatten nested arrays using flat().
* Utility methods like Array.isArray(), Array.from() and Array.of().

Day 06 completed ✅
