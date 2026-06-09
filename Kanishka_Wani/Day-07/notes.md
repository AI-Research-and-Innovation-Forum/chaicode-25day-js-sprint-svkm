# Day 07 - JavaScript Notes 🚀

## Lecture 16 - Objects in JavaScript

### What is an Object?

An object is a collection of key-value pairs used to store related data.

```javascript
const user = {
    name: "Kanishka",
    age: 20
}
```

---

### Object Literals

The most common way to create objects.

```javascript
const JsUser = {
    name: "Kanishka",
    age: 20
}
```

---

### Using Symbols as Keys

```javascript
const mySym = Symbol("key1")

const JsUser = {
    [mySym]: "mykey1"
}
```

To use a Symbol as an object key, it must be wrapped in square brackets.

---

### Accessing Object Properties

#### Dot Notation

```javascript
JsUser.email
```

#### Bracket Notation

```javascript
JsUser["email"]
```

Bracket notation is required when:

```javascript
JsUser["full name"]
```

because keys containing spaces cannot be accessed using dot notation.

---

### Updating Values

```javascript
JsUser.email = "kanishka@gmail.com"
```

Object properties can be modified after creation.

---

### Freezing an Object

```javascript
Object.freeze(JsUser)
```

After freezing, object properties cannot be modified.

---

### Adding Methods to Objects

Objects can store functions.

```javascript
JsUser.greeting = function(){
    console.log("Hello JS User")
}
```

---

### Using `this` Keyword

```javascript
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
```

`this` refers to the current object.

---

## Lecture 17 - Objects Deep Dive

### Singleton Object

Created using constructor.

```javascript
const tinderUser = new Object()
```

---

### Object Literal

```javascript
const tinderUser = {}
```

---

### Nested Objects

Objects can contain other objects.

```javascript
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Kanishka",
            lastName: "Wani"
        }
    }
}
```

Accessing nested values:

```javascript
regularUser.fullName.userFullName.firstName
```

---

### Combining Objects

#### Using Object.assign()

```javascript
const obj3 = Object.assign({}, obj1, obj2, obj4)
```

---

#### Using Spread Operator

```javascript
const obj3 = {...obj1, ...obj2}
```

Spread syntax is cleaner and commonly used.

---

### Objects Inside Arrays

```javascript
const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "kd@gmail.com"
    }
]
```

Accessing data:

```javascript
users[1].email
```

---

### Useful Object Methods

#### Object.keys()

Returns all keys.

```javascript
Object.keys(tinderUser)
```

---

#### Object.values()

Returns all values.

```javascript
Object.values(tinderUser)
```

---

#### Object.entries()

Returns key-value pairs as arrays.

```javascript
Object.entries(tinderUser)
```

---

#### hasOwnProperty()

Checks whether a property exists.

```javascript
tinderUser.hasOwnProperty("isLoggedIn")
```

Returns `true` or `false`.

---

## Lecture 18 - Object Destructuring & APIs

### Object Destructuring

Used to extract values from objects.

```javascript
const course = {
    coursename: "javascript series",
    price: "999",
    courseInstructor: "hitesh"
}
```

---

### Basic Destructuring

```javascript
const { courseInstructor } = course
```

---

### Renaming While Destructuring

```javascript
const { courseInstructor: instructor } = course
```

Now we can use:

```javascript
console.log(instructor)
```

instead of:

```javascript
console.log(course.courseInstructor)
```

---

## Introduction to APIs

API stands for Application Programming Interface.

APIs allow applications to communicate and exchange data.

Most modern APIs send data in JSON format.

---

### JSON Format

JSON looks similar to JavaScript objects.

```json
{
    "coursename": "javascript series",
    "price": "999",
    "courseInstructor": "hitesh"
}
```

---

### JSON Array Format

Sometimes APIs return arrays of objects.

```json
[
    {},
    {},
    {}
]
```

This is very common when fetching data from servers.

---

# Key Learnings

* Created objects using object literals.
* Learned singleton objects using constructors.
* Accessed object properties using dot and bracket notation.
* Used Symbols as object keys.
* Updated and froze objects.
* Added methods inside objects.
* Used `this` keyword.
* Worked with nested objects.
* Merged multiple objects using `Object.assign()` and spread operator.
* Explored important object methods.
* Learned object destructuring.
* Understood JSON structure and API basics.

# Overall Day 07 Summary

Today I explored JavaScript Objects in depth. I learned different ways to create objects, access and modify properties, use Symbols, add methods, work with nested objects, merge multiple objects, and use useful object methods. I also learned object destructuring, which makes code cleaner and easier to read. Finally, I got an introduction to APIs and understood how data is commonly exchanged using JSON format.
