## Lecture 14 — Arrays Basics

### What is an Array?

* Arrays are used to store multiple values in a single variable.
* Arrays can contain numbers, strings, booleans, objects, and even other arrays.

### Creating Arrays

```js
const myArr = [0, 1, 2, 3, 4, 5];
const heroes = ["Ironman", "Thor", "Spiderman"];
```

### Accessing Elements

```js
console.log(myArr[0]);
console.log(myArr[2]);
```

### Array Methods

#### push()

Adds element at the end.

```js
myArr.push(6);
```

#### pop()

Removes last element.

```js
myArr.pop();
```

#### unshift()

Adds element at the beginning.

```js
myArr.unshift(9);
```

#### shift()

Removes first element.

```js
myArr.shift();
```

### Checking Values

```js
myArr.includes(3);
myArr.indexOf(4);
```

### Converting Array to String

```js
const newArr = myArr.join();
```

### Slice vs Splice

#### slice()

```js
const arr = [0,1,2,3,4,5];

console.log(arr.slice(1,3));
```

* Returns selected portion.
* Does NOT modify original array.

#### splice()

```js
const arr = [0,1,2,3,4,5];

console.log(arr.splice(1,3));
```

* Removes selected portion.
* Modifies original array.

### Key Learning

* Arrays are reference-type objects.
* `slice()` preserves original array.
* `splice()` changes original array.
* Array methods are heavily used in real projects.

---

## Lecture 15 — Advanced Array Operations

### Combining Arrays

#### push() Problem

```js
marvelHeroes.push(dcHeroes);
```

* Creates nested array.

#### concat()

```js
const allHeroes = marvelHeroes.concat(dcHeroes);
```

* Returns a new combined array.

### Spread Operator (...)

```js
const allHeroes = [...marvelHeroes, ...dcHeroes];
```

* Modern and preferred way.
* Expands array elements individually.

### Flat Arrays

```js
const anotherArray = [1,2,3,[4,5],6,[7,8,[9,10]]];

const realArray = anotherArray.flat(Infinity);
```

* Removes nested levels.
* Creates a single flat array.

### Array Utility Methods

#### Array.isArray()

```js
Array.isArray("Hitesh");
```

* Checks if value is an array.

#### Array.from()

```js
Array.from("Hitesh");
```

Output:

```js
['H','i','t','e','s','h']
```

#### Array.of()

```js
const score1 = 100;
const score2 = 200;
const score3 = 300;

Array.of(score1, score2, score3);
```

Output:

```js
[100, 200, 300]
```

### Important Concepts

* `concat()` combines arrays.
* Spread operator (`...`) is cleaner and widely used.
* `flat()` handles nested arrays.
* `Array.from()` converts iterable values into arrays.
* `Array.of()` creates arrays from given values.

---

## Quick Revision

### Lecture 14

✅ Arrays Basics
✅ push()
✅ pop()
✅ shift()
✅ unshift()
✅ includes()
✅ indexOf()
✅ join()
✅ slice() vs splice()

### Lecture 15

✅ concat()
✅ Spread Operator (...)
✅ flat()
✅ Array.isArray()
✅ Array.from()
✅ Array.of()

---

## Summary

Lecture 14 introduced the fundamentals of arrays and important methods used to add, remove, search, and manipulate data. It also covered the crucial difference between `slice()` and `splice()`.

Lecture 15 focused on combining arrays, handling nested arrays, and using utility methods like `Array.from()`, `Array.of()`, and `Array.isArray()`, which are commonly used in modern JavaScript development.
