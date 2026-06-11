# Day 07 - JavaScript Objects Deep Dive (Lecture 17 & 18)

## Topics Covered

* Singleton vs Non-Singleton Objects
* Creating Objects using Constructor
* Nested Objects
* Optional Chaining
* Merging Objects
* Object.assign()
* Spread Operator
* Array of Objects
* Object Methods
* hasOwnProperty()

---

# 1. Singleton vs Non-Singleton Objects

### Non-Singleton Object (Object Literal)

```javascript
const user = {}
```

### Singleton Object (Constructor Method)

```javascript
const user = new Object()
```

Both create objects, but:

* `new Object()` → Singleton Object
* `{}` → Non-Singleton Object

---

# 2. Adding Properties to Objects

```javascript
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser)
```

Output:

```javascript
{
  id: '123abc',
  name: 'Sam',
  isLoggedIn: false
}
```

---

# 3. Nested Objects

Objects can contain other objects.

```javascript
const regularUser = {
  email: "user@gmail.com",

  fullname: {
    userfullname: {
      firstname: "Hitesh",
      lastname: "Choudhary"
    }
  }
}
```

---

# 4. Accessing Nested Objects

```javascript
console.log(
  regularUser.fullname.userfullname.firstname
)
```

Output:

```javascript
Hitesh
```

---

# 5. Optional Chaining

Used to safely access nested properties.

```javascript
regularUser.fullname?.userfullname
```

Benefits:

* Prevents errors
* Useful when API data may be missing
* Returns undefined instead of crashing

---

# 6. Merging Objects using Object.assign()

```javascript
const obj1 = {
  1: "a",
  2: "b"
}

const obj2 = {
  3: "c",
  4: "d"
}

const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3)
```

Output:

```javascript
{
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd'
}
```

---

# 7. Why Use Empty Object in Object.assign()

```javascript
Object.assign({}, obj1, obj2)
```

Here:

* `{}` → Target Object
* `obj1`, `obj2` → Source Objects

Creates a new object instead of modifying original objects.

---

# 8. Merging Objects using Spread Operator

Modern and most-used approach.

```javascript
const obj3 = {
  ...obj1,
  ...obj2
}
```

Output:

```javascript
{
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd'
}
```

Preferred in modern JavaScript.

---

# 9. Array of Objects

Database data usually comes as an array of objects.

```javascript
const users = [
  {
    id: 1,
    email: "user@gmail.com"
  },
  {
    id: 2,
    email: "admin@gmail.com"
  }
]
```

Access:

```javascript
console.log(users[0].email)
```

Output:

```javascript
user@gmail.com
```

---

# 10. Object.keys()

Returns all keys of an object.

```javascript
Object.keys(tinderUser)
```

Output:

```javascript
[
  "id",
  "name",
  "isLoggedIn"
]
```

Returns an Array.

---

# 11. Object.values()

Returns all values of an object.

```javascript
Object.values(tinderUser)
```

Output:

```javascript
[
  "123abc",
  "Sam",
  false
]
```

---

# 12. Object.entries()

Converts object into key-value pairs.

```javascript
Object.entries(tinderUser)
```

Output:

```javascript
[
  ["id", "123abc"],
  ["name", "Sam"],
  ["isLoggedIn", false]
]
```

Each entry becomes an array.

---

# 13. hasOwnProperty()

Checks whether a property exists.

```javascript
tinderUser.hasOwnProperty("isLoggedIn")
```

Output:

```javascript
true
```

Example:

```javascript
tinderUser.hasOwnProperty("age")
```

Output:

```javascript
false
```

Useful before accessing object properties.

---

# Key Learnings

✅ Singleton vs Non-Singleton Objects

✅ Constructor-based Object Creation

✅ Nested Objects

✅ Optional Chaining (`?.`)

✅ Object.assign()

✅ Spread Operator (`...`)

✅ Array of Objects

✅ Object.keys()

✅ Object.values()

✅ Object.entries()

✅ hasOwnProperty()

---

# Summary

Today I learned advanced JavaScript Object concepts. I understood how objects can contain nested objects, how to safely access properties using optional chaining, and how to merge multiple objects using Object.assign() and the spread operator. I also learned useful object methods like Object.keys(), Object.values(), Object.entries(), and hasOwnProperty(), which are commonly used while working with APIs and database data.
