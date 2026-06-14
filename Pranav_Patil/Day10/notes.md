# 📅 Day 10 – Objects in JavaScript

## 🎥 Videos

1. **Objects in Depth in JavaScript | Chai aur JavaScript**
2. **Objects in JavaScript Part 2 | Chai aur JavaScript**

---

# 📚 Introduction

Today’s learning focused on **Objects**, one of the most important concepts in JavaScript. While arrays are used to store ordered collections of data, objects allow us to store data in **key-value pairs**, making it easier to represent real-world entities such as users, products, orders, and applications.

Objects are the backbone of JavaScript and are heavily used in APIs, databases, frameworks, and modern web development.

---

# 🔹 Creating Objects

### Object Literal

```javascript
const user = {
    name: "Pranav",
    age: 20,
    location: "Maharashtra"
};
```

---

### Accessing Object Properties

#### Dot Notation

```javascript
user.name;
```

#### Bracket Notation

```javascript
user["name"];
```

Bracket notation is useful when property names contain spaces or special characters.

---

# 🔹 Symbols in Objects

A Symbol can be used as a unique key inside an object.

```javascript
const mySym = Symbol("key1");

const user = {
    [mySym]: "myKey"
};
```

Symbols help create unique and hidden property identifiers.

---

# 🔹 Updating Object Values

```javascript
user.name = "Rahul";
```

Objects are mutable, meaning their values can be modified after creation.

---

# 🔹 Freezing Objects

```javascript
Object.freeze(user);
```

After freezing an object, its properties cannot be changed.

---

# 🔹 Adding Methods to Objects

Objects can contain functions.

```javascript
const user = {
    name: "Pranav",

    greet: function() {
        console.log("Hello");
    }
};
```

Calling the method:

```javascript
user.greet();
```

---

# 🔹 Using `this` Keyword

```javascript
const user = {
    username: "Pranav",

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}`);
    }
};
```

`this` refers to the current object.

---

# 🔹 Singleton Objects

Created using constructors.

```javascript
const user = new Object();
```

Object literals and singleton objects achieve similar goals but are created differently.

---

# 🔹 Nested Objects

Objects can contain other objects.

```javascript
const user = {
    fullname: {
        firstname: "Pranav",
        lastname: "Patil"
    }
};
```

Accessing nested values:

```javascript
user.fullname.firstname;
```

---

# 🔹 Combining Objects

### Using Object.assign()

```javascript
const obj3 = Object.assign({}, obj1, obj2);
```

---

### Using Spread Operator

```javascript
const obj3 = { ...obj1, ...obj2 };
```

Modern and preferred approach.

---

# 🔹 Useful Object Methods

### Object.keys()

Returns all keys.

```javascript
Object.keys(user);
```

Output:

```javascript
["name", "age"]
```

---

### Object.values()

Returns all values.

```javascript
Object.values(user);
```

---

### Object.entries()

Converts object into key-value arrays.

```javascript
Object.entries(user);
```

Output:

```javascript
[
  ["name", "Pranav"],
  ["age", 20]
]
```

---

### hasOwnProperty()

Checks whether a property exists.

```javascript
user.hasOwnProperty("name");
```

Output:

```javascript
true
```

---

# 🔹 Object Destructuring

Instead of repeatedly accessing properties:

```javascript
const course = {
    courseName: "JavaScript",
    price: 999
};

const { courseName } = course;
```

Now we can use:

```javascript
courseName
```

directly.

---

# 🔹 JSON Basics

Most APIs exchange data using JSON.

Example:

```json
{
    "name": "Pranav",
    "course": "JavaScript",
    "price": 999
}
```

JSON resembles JavaScript objects but follows strict formatting rules.

---

# 🌍 Real-World Applications

### User Profiles

* Name
* Email
* Age
* Address

### E-commerce Systems

* Product details
* Pricing
* Inventory

### APIs

* Sending and receiving data

### Social Media Platforms

* User information
* Posts
* Comments

### Authentication Systems

* User credentials
* Permissions

---

# 🔑 Key Learnings

* Learned how to create and access objects.
* Understood dot notation and bracket notation.
* Explored Symbols as unique object keys.
* Learned how to update and freeze objects.
* Added functions inside objects.
* Understood the `this` keyword.
* Explored nested objects and object merging.
* Learned useful methods like `Object.keys()`, `Object.values()`, and `Object.entries()`.
* Understood object destructuring.
* Got introduced to JSON and API data structures.

---

# 📚 Summary

Today's session helped me understand why objects are considered one of the most powerful features of JavaScript. Unlike arrays, objects allow data to be organized using meaningful keys, making applications easier to design and manage.

I learned how to create, modify, combine, and access objects efficiently. Concepts like object destructuring, the `this` keyword, and JSON showed me how objects are used extensively in modern web development and API communication.

The biggest takeaway from today's learning is that mastering objects is essential because almost every real-world application stores and manages data using object-based structures.

---

## ✅ Progress

**Day 10/25 Completed**
