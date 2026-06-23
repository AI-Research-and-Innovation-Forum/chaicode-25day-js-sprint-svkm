# Day 17 - JavaScript Events & Async JavaScript Fundamentals

## Lecture 36: Events in JavaScript

### What is an Event?

An event is an action that happens in the browser, either by the user or the browser itself.

Examples:

* Click
* Double Click
* Mouse Move
* Keyboard Press
* Form Submit
* Page Load

JavaScript can listen to these events and perform actions accordingly.

---

## Ways to Handle Events

### 1. Inline HTML (Not Recommended)

```html
<button onclick="alert('Clicked')">Click Me</button>
```

Problems:

* Mixes HTML and JavaScript
* Hard to maintain
* Not scalable

````

### 2. DOM Property Method

```js
document.getElementById('btn').onclick = function () {
    console.log("Button clicked");
}
````

Better than inline but still not preferred.

---

### 3. Event Listener (Best Practice)

```js
document.getElementById('btn').addEventListener('click', function () {
    console.log("Button clicked");
});
```

Advantages:

* Multiple listeners can be attached
* Supports event propagation
* More flexible and maintainable

---

## Event Object

Whenever an event occurs, JavaScript automatically creates an event object.

```js
document.getElementById('btn').addEventListener('click', function(e){
    console.log(e);
});
```

Useful Properties:

```js
e.type
e.target
e.currentTarget
e.clientX
e.clientY
e.timeStamp
e.defaultPrevented
```

---

## Event Propagation

### Event Bubbling (Default)

Flow:

```text
Child → Parent → Grandparent
```

Example:

```js
document.getElementById('images').addEventListener('click', function(){
    console.log("UL clicked");
}, false);

document.getElementById('owl').addEventListener('click', function(){
    console.log("OWL clicked");
}, false);
```

Output:

```text
OWL clicked
UL clicked
```

---

### Event Capturing

Flow:

```text
Grandparent → Parent → Child
```

Enable by passing true.

```js
addEventListener('click', function(){
}, true);
```

---

## stopPropagation()

Stops event propagation.

```js
e.stopPropagation();
```

Example:

```js
document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
    e.stopPropagation();
});
```

Now parent events won't execute.

---

## preventDefault()

Stops default browser behavior.

Example:

```js
document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
});
```

Without it:

```html
<a href="https://google.com">Google</a>
```

Clicking navigates to Google.

With preventDefault():

The link won't open.

---

## Image Removal Project

Concepts Used:

* Event Delegation
* Event Object
* DOM Traversal
* Element Removal

Code:

```js
document.querySelector('#images').addEventListener('click', function(e){

    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }

}, false);
```

### How it Works

Step 1:

```js
e.target
```

Returns the clicked element.

Example:

```html
<img id="owl">
```

If owl image is clicked:

```js
e.target
```

returns that image.

---

Step 2:

```js
e.target.tagName
```

Checks whether clicked element is IMG.

```js
if(e.target.tagName === 'IMG')
```

Prevents accidental deletion of other elements.

---

Step 3:

```js
e.target.parentNode
```

Gets the parent li element.

```html
<li>
   <img>
</li>
```

---

Step 4:

```js
removeIt.remove();
```

Removes the entire list item from DOM.

Result:

The clicked image disappears from the page.

---

## Event Delegation

Instead of attaching listeners to every image:

```js
image1.addEventListener(...)
image2.addEventListener(...)
image3.addEventListener(...)
```

Attach one listener to the parent.

```js
document.querySelector('#images')
```

Benefits:

* Better performance
* Cleaner code
* Works for dynamically added elements

---

# Lecture 37: Async JavaScript Fundamentals

## JavaScript Nature

JavaScript is:

* Single Threaded
* Synchronous

Meaning:

It executes one task at a time.

Example:

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

Execution happens line by line.

---

## Blocking Code

Blocking code stops execution until the task finishes.

Example:

```js
readLargeFile();
console.log("Done");
```

The second line waits until file reading completes.

---

## Non-Blocking Code

Allows other tasks to continue while waiting.

Example:

```js
setTimeout(() => {
    console.log("Task Complete");
}, 2000);

console.log("Running...");
```

Output:

```text
Running...
Task Complete
```

---

## Why Async JavaScript Exists

Operations like:

* API Calls
* Database Requests
* Timers
* File Reading

take time.

JavaScript delegates these tasks to Browser APIs or Node APIs.

---

## JavaScript Execution Model

Components:

### 1. Call Stack

Where JavaScript executes code.

```text
Call Stack
-----------
main()
functionA()
functionB()
```

Follows:

```text
LIFO
Last In First Out
```

---

### 2. Memory Heap

Stores variables and objects.

```js
let user = {
    name: "Kanishka"
};
```

Stored in Memory Heap.

---

### 3. Web APIs / Node APIs

Handle asynchronous tasks.

Examples:

```js
setTimeout()
fetch()
DOM Events
```

These run outside the JavaScript engine.

---

### 4. Task Queue

Stores callback functions waiting for execution.

Example:

```js
setTimeout(callback, 2000);
```

After 2 seconds:

```text
callback
↓
Task Queue
```

---

### 5. Event Loop

Continuously checks:

```text
Is Call Stack Empty?
```

If Yes:

Moves callbacks from queue to call stack.

```text
Task Queue
     ↓
Event Loop
     ↓
Call Stack
```

---

## Promise Queue (Microtask Queue)

Higher priority queue.

Used by:

```js
fetch()
Promise.then()
```

Priority:

```text
Promise Queue
      ↓
Task Queue
```

Promises execute before normal callbacks.

---

## Complete Flow

```text
Code
 ↓
Call Stack
 ↓
Web APIs
 ↓
Task Queue / Promise Queue
 ↓
Event Loop
 ↓
Call Stack
```

---

* preventDefault() prevents default browser actions.
* Event Delegation improves performance and scalability.
