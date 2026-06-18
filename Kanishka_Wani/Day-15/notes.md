# Day 15 - DOM Traversal, Creating, Editing & Removing Elements 🚀

## Lecture 33 & 34

---

# DOM Traversal

DOM Traversal means navigating between elements in the DOM tree.

---

## Sample HTML

```html
<div class="parent">
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
</div>
```

---

## Selecting Parent Element

```javascript
const parent = document.querySelector('.parent')
```

---

## Accessing Children

```javascript
console.log(parent.children)
```

Returns an HTMLCollection containing all child elements.

---

### Access Specific Child

```javascript
console.log(parent.children[1].innerHTML)
```

Output:

```text
Tuesday
```

---

## Loop Through Children

```javascript
for(let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML)
}
```

Output:

```text
Monday
Tuesday
Wednesday
Thursday
```

---

## Styling Child Elements

```javascript
parent.children[1].style.color = "orange"
```

Changes Tuesday's color.

---

## First and Last Child

### First Element

```javascript
parent.firstElementChild
```

Output:

```text
Monday
```

---

### Last Element

```javascript
parent.lastElementChild
```

Output:

```text
Thursday
```

---

## Access Parent From Child

```javascript
const dayOne = document.querySelector('.day')

console.log(dayOne.parentElement)
```

Returns the parent div.

---

## Access Next Sibling

```javascript
console.log(dayOne.nextElementSibling)
```

Output:

```text
Tuesday
```

---

## Child Nodes

```javascript
console.log(parent.childNodes)
```

Returns all nodes including:

* Elements
* Text nodes
* Line breaks
* Spaces

This helps understand how browsers actually read HTML.

---

# Creating Elements

JavaScript can create elements dynamically.

---

## Create Element

```javascript
const div = document.createElement('div')
```

---

## Add Class

```javascript
div.className = "main"
```

---

## Add ID

```javascript
div.id = Math.round(Math.random() * 10 + 1)
```

---

## Set Attributes

```javascript
div.setAttribute("title","generated title")
```

---

## Apply Styling

```javascript
div.style.backgroundColor = "green"
div.style.padding = "12px"
```

---

## Add Text (Basic Way)

```javascript
div.innerText = "Chai aur Code"
```

---

## Add Text (Optimized Way)

```javascript
const addText = document.createTextNode("Chai aur Code")

div.appendChild(addText)
```

Why preferred?

* Better performance
* Avoids unnecessary DOM traversal
* Recommended for larger projects

---

## Add Element to Page

```javascript
document.body.appendChild(div)
```

---

# Adding New List Items

Initial HTML

```html
<ul class="language">
    <li>JavaScript</li>
</ul>
```

---

## Method 1 - Using innerHTML

```javascript
function addLanguage(langName){
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
```

Usage:

```javascript
addLanguage("Python")
addLanguage("TypeScript")
```

---

## Method 2 - Optimized Approach

```javascript
function addOptiLanguage(langName){
    const li = document.createElement('li')

    li.appendChild(
        document.createTextNode(langName)
    )

    document.querySelector('.language')
            .appendChild(li)
}
```

Usage:

```javascript
addOptiLanguage("GoLang")
```

Advantages:

* Faster
* More efficient
* Preferred in real projects

---

# Editing Elements

---

## Replace Existing Element

Select second list item:

```javascript
const secondLang =
document.querySelector("li:nth-child(2)")
```

Create new element:

```javascript
const newLi = document.createElement('li')

newLi.textContent = "Mojo"
```

Replace:

```javascript
secondLang.replaceWith(newLi)
```

Result:

```text
Python → Mojo
```

---

## Using outerHTML

Replace entire element:

```javascript
firstLang.outerHTML =
'<li>TypeScript</li>'
```

Unlike innerHTML, outerHTML replaces the complete element itself.

---

## textContent

```javascript
element.textContent = "Updated Text"
```

Changes text content.

---

## innerText

```javascript
element.innerText = "Updated Text"
```

Also updates text content.

---

# Removing Elements

Select last item:

```javascript
const lastLang =
document.querySelector('li:last-child')
```

Remove:

```javascript
lastLang.remove()
```

Deletes the element from the DOM.

---

# Important Methods Learned

## Traversal

```javascript
parent.children
parent.firstElementChild
parent.lastElementChild
parentElement
nextElementSibling
childNodes
```

---

## Creation

```javascript
createElement()
createTextNode()
appendChild()
setAttribute()
```

---

## Editing

```javascript
replaceWith()
outerHTML
innerText
textContent
```

---

## Removal

```javascript
remove()
```

---

# What I Practiced

* DOM Traversal
* Parent and Child Relationships
* HTMLCollection
* childNodes
* Creating Elements Dynamically
* Applying Attributes and Styles
* createTextNode()
* appendChild()
* Adding List Items
* replaceWith()
* outerHTML
* Removing Elements
* Building and Modifying DOM Structures with JavaScript

---

# Day 15 Summary

Today I learned how to navigate through the DOM tree using parent, child, and sibling relationships. I explored HTMLCollection, childNodes, and understood how browsers represent HTML internally.

I also learned how to create new elements dynamically, add them to the page, edit existing content using replaceWith() and outerHTML, and remove elements using remove().

This completed my DOM fundamentals journey and gave me the confidence to start building real-world JavaScript projects.
