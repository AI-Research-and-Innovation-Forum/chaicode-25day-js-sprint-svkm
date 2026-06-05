# Day 04 - JavaScript Comparison, Datatypes Summary and Memory

## Lecture 8: Comparison

### Important Notes

* For comparison with same datatype, JS gives normal results.
* But when comparing different datatypes, JS converts values and results can become unpredictable.
* TypeScript does not allow many of these confusing comparisons.
* JavaScript can give unexpected results while comparing different datatypes.
* Comparison operator and equality operator work differently.
* Use strict check (`===`) for clean code.
* Avoid comparing different datatypes.

### Examples

```js
null > 0      // false
null == 0     // false
null >= 0     // true

undefined == 0   // false
undefined > 0    // false
undefined >= 0   // false
```

### Strict Check

```js
5 === 5      // true
"5" === 5    // false
```

---

## Lecture 9: Datatypes Summary

### Datatypes are divided into two categories

Based on how data is stored in memory and how it gets accessed.

### 1. Primitive Datatypes

* String
* Number
* Boolean
* Null
* Undefined
* Symbol
* BigInt

### 2. Reference (Non-Primitive) Datatypes

* Array
* Object
* Function

### Notes

* JavaScript is a dynamically typed language.
* No need to declare variable types like int, string, boolean, etc.

### Symbol Example

```js
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)
```

### Array Example

```js
const heroes = ["shaktiman", "naagraj", "doga"]
```

### Result of typeof Operator

```js
typeof "Kanishka"      // string
typeof 10              // number
typeof true            // boolean
typeof undefined       // undefined
typeof null            // object
typeof Symbol('123')   // symbol
typeof 123n            // bigint
typeof []              // object
typeof {}              // object
typeof function(){}    // function
```

### Notes

* typeof null gives "object".
* Arrays are objects in JavaScript.
* Functions have their own type: "function".

---

## Lecture 10: Memory

### Stack and Heap Memory

#### Stack Memory

* All primitive datatypes use Stack Memory.
* Stack Memory gives a copy of the value.

#### Heap Memory

* All non-primitive datatypes use Heap Memory.
* Heap Memory gives reference.

### Summary

* Primitive → Stack Memory → Copy
* Non-Primitive → Heap Memory → Reference
