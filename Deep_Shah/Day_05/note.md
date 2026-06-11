# Lecture 10 - Memory in JavaScript

## Why Learn Memory?

Understanding memory helps us know:
- How data is stored
- Why some values change and others don't
- Common interview questions
- How JavaScript handles variables behind the scenes

---

## Two Types of Memory

### 1. Stack Memory
Used for:
- Primitive Data Types
  - String
  - Number
  - Boolean
  - Null
  - Undefined
  - Symbol
  - BigInt

### 2. Heap Memory
Used for:
- Non-Primitive (Reference) Types
  - Object
  - Array
  - Function

---

## Stack Memory (Copy)

When a primitive value is assigned to another variable, a COPY is created.

Example:

```js
let myYoutubeName = "hiteshchoudhary"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(myYoutubeName) // hiteshchoudhary
console.log(anotherName)   // chaiaurcode
```

### What Happens?

```text
Stack

myYoutubeName  -> "hiteshchoudhary"

anotherName    -> "hiteshchoudhary"
                 (copy)

anotherName changed to:
                 "chaiaurcode"
```

Original value remains unchanged because only a copy was passed.

### Key Point

✅ Primitive types get a copy of the value.

---

## Heap Memory (Reference)

Objects, Arrays, and Functions are stored in Heap Memory.

When assigned to another variable, a REFERENCE is passed.

Example:

```js
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dev@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
```

Output:

```js
dev@gmail.com
dev@gmail.com
```

---

## What Happens?

```text
Stack

userOne ----\
             \
              ---> Heap Object
             /
userTwo ----/

Heap

{
  email: "dev@gmail.com",
  upi: "user@ybl"
}
```

Both variables point to the same object.

Changing one changes the original object.

### Key Point

✅ Non-Primitive types share references.

---

## Stack vs Heap

| Stack Memory | Heap Memory |
|-------------|------------|
| Primitive Types | Reference Types |
| Copy of value | Reference of value |
| Changes don't affect original | Changes affect original |
| Faster access | Used for complex data |

---

## Interview Question

### Why does changing an object affect another variable?

Because objects are stored in Heap Memory and variables store references, not copies.

---

## Quick Revision

### Stack Memory
- Used by Primitive Data Types
- Gives a copy
- Safe from accidental changes

### Heap Memory
- Used by Objects, Arrays, Functions
- Gives reference
- Changes affect all references

---

## Biggest Takeaway

Primitive Data Types → Copy (Stack)

Reference Data Types → Reference (Heap)

This is the foundation for understanding objects, arrays, functions, and JavaScript memory behavior.