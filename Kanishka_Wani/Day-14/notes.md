# Day 14 - JavaScript DOM Basics 🚀

## Lecture 31 - Introduction to DOM

---

## What is DOM?

DOM stands for **Document Object Model**.

It is a programming interface provided by the browser that represents an HTML document as a tree-like structure of objects.

Using JavaScript, we can:

* Access HTML elements
* Modify content
* Change styles
* Add or remove elements
* Handle user interactions

In simple words:

> DOM allows JavaScript to talk with HTML.

---

## Why Learn DOM?

Before learning frameworks like React, Angular, or Vue, it is important to understand how the browser works behind the scenes.

All frameworks eventually interact with the DOM.

Understanding DOM helps in:

* Building interactive websites
* Manipulating page content dynamically
* Understanding how frameworks work internally

---

## Browser Window Object

The browser provides a global object called:

```javascript
window
```

Everything inside the browser exists under the window object.

Examples:

```javascript
window.document
window.console
window.alert()
```

---

## DOM Tree Structure

A webpage is organized as a tree structure.

```text
Window
 └── Document
      └── HTML
           ├── Head
           │     └── Title
           └── Body
                 ├── Div
                 ├── H1
                 ├── P
                 └── UL
```

Every item in this tree is called a:

```text
Node
```

---

## Exploring DOM in Browser Console

### View Document

```javascript
console.log(document)
```

Shows the HTML document.

---

### View Document as Object

```javascript
console.dir(document)
```

Displays all properties and methods of the document object.

Useful for understanding the DOM deeply.

---

## Selecting Elements

### Get Element By ID

```javascript
document.getElementById("title")
```

Returns the element with the given ID.

Example:

```javascript
const heading = document.getElementById("title")
```

---

## Changing Content

### Using innerHTML

```javascript
heading.innerHTML = "JavaScript DOM"
```

Updates the content of the selected element.

---

## My Practice HTML Document

```html
<h1 id="title" class="heading">
    DOM Learnings
    <span style="display:none;">test text</span>
</h1>
```

Practice:

```javascript
document.getElementById("title")
```

```javascript
document.getElementById("title").innerHTML = "Learning DOM"
```

---

# Lecture 32 - DOM Selectors

---

## Accessing Attributes

### Get Attribute

```javascript
document.getElementById("title").getAttribute("id")
```

Output:

```text
title
```

---

### Set Attribute

```javascript
document.getElementById("title").setAttribute("class","test")
```

Changes the class attribute.

---

## Styling Elements

```javascript
const title = document.getElementById("title")

title.style.backgroundColor = "green"
title.style.padding = "15px"
title.style.borderRadius = "10px"
```

---

## innerText vs textContent vs innerHTML

### innerText

Returns only visible text.

```javascript
title.innerText
```

Output:

```text
DOM Learnings
```

---

### textContent

Returns all text, including hidden text.

```javascript
title.textContent
```

Output:

```text
DOM Learnings test text
```

---

### innerHTML

Returns complete HTML inside an element.

```javascript
title.innerHTML
```

Output:

```html
DOM Learnings <span style="display:none;">test text</span>
```

---

## querySelector()

Selects the first matching element.

### Select by ID

```javascript
document.querySelector("#title")
```

### Select by Class

```javascript
document.querySelector(".heading")
```

### Select by Tag

```javascript
document.querySelector("h2")
```

### Select Input

```javascript
document.querySelector('input[type="password"]')
```

---

## querySelectorAll()

Returns all matching elements as a NodeList.

```javascript
document.querySelectorAll("h2")
```

Output:

```text
NodeList(2)
```

---

### Access Elements

```javascript
const headings = document.querySelectorAll("h2")

headings[0].style.color = "yellow"
```

---

### Using forEach

```javascript
headings.forEach((item) => {
    item.style.color = "orange"
})
```

---

## NodeList

A collection of nodes returned by:

```javascript
document.querySelectorAll()
```

Example:

```javascript
const listItems = document.querySelectorAll("li")
```

NodeList supports:

```javascript
forEach()
```

Example:

```javascript
listItems.forEach((item) => {
    item.style.color = "cyan"
})
```

---

## HTMLCollection

Returned by:

```javascript
document.getElementsByClassName()
```

Example:

```javascript
document.getElementsByClassName("list-item")
```

Output:

```text
HTMLCollection
```

---

## HTMLCollection Limitation

This does not support:

```javascript
forEach()
```

❌ Directly

```javascript
items.forEach()
```

---

## Convert HTMLCollection to Array

```javascript
const items = document.getElementsByClassName("list-item")

const myArray = Array.from(items)
```

Now array methods can be used.

```javascript
myArray.forEach((item) => {
    item.style.color = "red"
})
```

---

# My Practice

## HTML Structure Used

```html
<div>
    <h1 id="title" class="heading">
        DOM Learnings
        <span style="display:none;">test text</span>
    </h1>

    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    <h2>Lorem ipsum dolor sit.</h2>

    <p>Lorem ipsum dolor sit amet.</p>

    <input type="password">

    <ul>
        <li class="list-item">one</li>
        <li class="list-item">two</li>
        <li class="list-item">three</li>
        <li class="list-item">four</li>
    </ul>
</div>
```

---

## What I Practiced

* Understanding DOM structure
* Exploring document object in browser console
* Using getElementById()
* Using getAttribute() and setAttribute()
* Styling elements with JavaScript
* Understanding innerText, textContent and innerHTML
* Using querySelector()
* Using querySelectorAll()
* Working with NodeList
* Working with HTMLCollection
* Converting HTMLCollection into Array
* Manipulating elements on a custom HTML page
* Practicing selectors on the Wikipedia JavaScript page

---

# Day 14 Summary

Today I entered the world of DOM and learned how JavaScript interacts with HTML pages.

I understood the DOM tree structure, browser window object, document object, different selectors, content manipulation methods, NodeList, HTMLCollection, and dynamic styling using JavaScript.

I also practiced DOM manipulation on my own HTML document and explored a real-world webpage (Wikipedia) using browser developer tools.

This was my first step from writing JavaScript logic to making web pages interactive.
