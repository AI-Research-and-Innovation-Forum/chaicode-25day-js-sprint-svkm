# 📅 Day 6 - Strings in JavaScript

## 🎯 What I Learned Today

Today's session focused on Strings in JavaScript. Strings are one of the most commonly used datatypes because almost every application deals with text, whether it's user names, emails, messages, URLs, or data from APIs.

---

# 📌 What is a String?

A string is a sequence of characters enclosed in quotes.

```javascript
const name = "Pranav";
const city = 'Pune';
```

JavaScript allows strings to be created using:
- Double Quotes (" ")
- Single Quotes (' ')
- Backticks (` `)

---

# 📌 String Concatenation

Combining multiple strings together.

### Traditional Way

```javascript
const firstName = "Pranav";
const lastName = "Patil";

console.log(firstName + " " + lastName);
```

Output:

```javascript
Pranav Patil
```

---

# 📌 Template Literals

Modern way of working with strings using backticks.

```javascript
const name = "Pranav";
const repoCount = 10;

console.log(`Hello my name is ${name} and I have ${repoCount} repositories.`);
```

Output:

```javascript
Hello my name is Pranav and I have 10 repositories.
```

### Why Use Template Literals?

- Cleaner syntax
- Easier to read
- Supports variable interpolation
- Supports multiline strings

---

# 📌 Creating Strings as Objects

```javascript
const gameName = new String('javascript');
```

This creates a String object instead of a primitive string.

Example:

```javascript
console.log(gameName[0]);
```

Output:

```javascript
j
```

---

# 📌 Useful String Properties & Methods

## length

Returns total number of characters.

```javascript
const name = "Pranav";

console.log(name.length);
```

Output:

```javascript
6
```

---

## toUpperCase()

Converts string to uppercase.

```javascript
console.log(name.toUpperCase());
```

Output:

```javascript
PRANAV
```

---

## charAt()

Returns character at a specific index.

```javascript
console.log(name.charAt(2));
```

Output:

```javascript
a
```

---

## indexOf()

Returns position of a character.

```javascript
console.log(name.indexOf('n'));
```

Output:

```javascript
3
```

---

# 📌 substring()

Extracts part of a string.

```javascript
const gameName = "javascript";

console.log(gameName.substring(0, 4));
```

Output:

```javascript
java
```

### Important

- Negative values are ignored.
- Starts from index 0.
- End index is excluded.

---

# 📌 slice()

Also extracts a portion of a string.

```javascript
const gameName = "javascript";

console.log(gameName.slice(0, 4));
```

Output:

```javascript
java
```

### Difference from substring()

`slice()` supports negative values.

```javascript
console.log(gameName.slice(-6));
```

Output:

```javascript
script
```

---

# 📌 trim()

Removes extra spaces from beginning and end.

```javascript
const userName = "   Pranav   ";

console.log(userName.trim());
```

Output:

```javascript
Pranav
```

Useful when taking user input from forms.

---

# 📌 replace()

Replaces a part of a string.

```javascript
const url = "https://google.com";

console.log(url.replace('google', 'youtube'));
```

Output:

```javascript
https://youtube.com
```

---

# 📌 includes()

Checks whether a string contains a value.

```javascript
const course = "JavaScript";

console.log(course.includes("Script"));
```

Output:

```javascript
true
```

---

# 📌 split()

Converts a string into an array.

```javascript
const sentence = "Learn JavaScript Daily";

console.log(sentence.split(" "));
```

Output:

```javascript
["Learn", "JavaScript", "Daily"]
```

---

# 📌 Real-World Example

Extracting a slug from a URL:

```javascript
const url = "https://github.com/pranavpatil";

const username = url.slice(url.lastIndexOf("/") + 1);

console.log(username);
```

Output:

```javascript
pranavpatil
```

### Why +1?

`lastIndexOf("/")` finds the position of the last `/`.

Adding `+1` moves to the next character, skipping the `/` itself.

---

# 💡 Key Takeaways

- Strings are used to store textual data.
- Template literals are preferred over string concatenation.
- `substring()` and `slice()` are used to extract parts of strings.
- `slice()` supports negative indexes.
- `trim()` removes unwanted spaces.
- `replace()` modifies string content.
- `includes()` checks for existence.
- `split()` converts strings into arrays.
- String methods make text manipulation much easier.

---

# 🚀 Day 6 Summary

Today's session showed how powerful JavaScript strings are. What looks like simple text can be manipulated, searched, transformed, and formatted using built-in methods. Understanding these methods is essential because strings are everywhere in web development—from user inputs and URLs to API responses and database records.

> Mastering strings means mastering how applications communicate with users.