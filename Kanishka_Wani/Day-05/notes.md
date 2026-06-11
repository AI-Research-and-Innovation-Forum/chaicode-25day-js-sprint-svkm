# Day 05 - JavaScript Notes

## Lecture 11 - Strings

### How to Declare Strings

```javascript
const name = "Kanishka";
const city = 'Latur';
```

Using String Object:

```javascript
const gameName = new String("Kanishka");
```

### String Interpolation (Template Literals)

Instead of:

```javascript
console.log(name + " Wani");
```

Use:

```javascript
console.log(`Hello my name is ${name}`);
```

### String Methods

#### Length

```javascript
name.length
```

#### Uppercase

```javascript
name.toUpperCase()
```

#### Character at Index

```javascript
name.charAt(0)
```

#### Index of Character

```javascript
name.indexOf('a')
```

### Summary

* Strings are used to store text.
* Can be declared using single quotes, double quotes, or String object.
* Template literals use backticks (` `) and `${}` for variable interpolation.
* Useful methods include length, toUpperCase(), charAt(), and indexOf().

---

## Lecture 12 - Numbers and Math

### How to Declare Numbers

```javascript
const score = 100;
const balance = 99.99;
```

Using Number Object:

```javascript
const marks = new Number(100);
```

### Number Methods

#### Convert to String

```javascript
score.toString()
```

#### Length

```javascript
score.toString().length
```

#### Fixed Decimal Places

```javascript
score.toFixed(2)
```

#### Precision

```javascript
score.toPrecision(3)
```

#### Locale Format

```javascript
score.toLocaleString('en-IN')
```

### Math Methods

```javascript
Math.round(4.6)
Math.floor(4.6)
Math.ceil(4.2)
Math.pow(2, 3)
Math.sqrt(16)
Math.max(1, 5, 3, 9, 2)
Math.min(1, 5, 3, 9, 2)
Math.random()
```

Random Number in Range:

```javascript
Math.floor(Math.random() * 10) + 1
```

### Summary

* Numbers are used to store numeric values.
* Number methods help in formatting and precision handling.
* Math object provides useful mathematical operations.
* Math.random() is commonly used for generating random values.

---

## Lecture 13 - Dates in JavaScript

### How to Declare Dates

Current Date and Time:

```javascript
const myDate = new Date();
```

Specific Date:

```javascript
const date = new Date("2026-06-05");
```

### Date Methods

```javascript
myDate.toString()
myDate.toDateString()
myDate.toTimeString()
myDate.toLocaleString()
myDate.toISOString()
```

### Summary

* Date object is used to work with dates and time.
* new Date() creates the current date and time.
* Different methods provide different date formats.
* Useful for timestamps, scheduling, and displaying date/time information.

---

# Overall Day 05 Summary

Today I learned:

* String declaration and template literals.
* Important string methods.
* Number declaration and number methods.
* Math object and common mathematical operations.
* Random number generation.
* Creating and formatting dates using the Date object.

Day 05 completed ✅
Code pushed on GitHub 🚀
