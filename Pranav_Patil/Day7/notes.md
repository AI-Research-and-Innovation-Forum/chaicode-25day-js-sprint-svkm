# 📅 Day 7 – Number and Maths in JavaScript

## 🎥 Video

**Number and Maths in JavaScript | Chai aur JavaScript**

---

## 📚 Introduction

In this lecture, I learned how JavaScript handles numbers and mathematical operations. JavaScript provides the **Number** object and the **Math** object, which contain useful methods for performing calculations, formatting numbers, rounding values, and generating random numbers.

These concepts are widely used in real-world applications such as calculators, e-commerce websites, games, OTP generation systems, and data analysis.

---

## 🔢 Number in JavaScript

### Creating Numbers

```javascript
const score = 400;
const balance = new Number(100);
```

* `score` is a primitive number.
* `balance` is a Number object.

---

## Important Number Methods

### 1. toString()

Converts a number into a string.

```javascript
const score = 400;
score.toString();
```

### 2. toFixed()

Controls the number of digits after the decimal point.

```javascript
const num = 123.456;
num.toFixed(2); // 123.46
```

### 3. toPrecision()

Returns a number with a specified total length.

```javascript
const num = 123.8966;
num.toPrecision(4);
```

### 4. toLocaleString()

Formats numbers according to a region.

```javascript
const num = 1000000;
num.toLocaleString();
```

Output:

```javascript
1,000,000
```

Indian Format:

```javascript
num.toLocaleString('en-IN');
```

Output:

```javascript
10,00,000
```

---

## 🧮 Math Object

The `Math` object provides built-in mathematical functions.

### Absolute Value

```javascript
Math.abs(-10);
```

Output:

```javascript
10
```

---

### Round

```javascript
Math.round(4.6);
```

Output:

```javascript
5
```

---

### Ceiling

Rounds up to the next integer.

```javascript
Math.ceil(4.2);
```

Output:

```javascript
5
```

---

### Floor

Rounds down to the previous integer.

```javascript
Math.floor(4.9);
```

Output:

```javascript
4
```

---

### Minimum Value

```javascript
Math.min(4, 3, 8, 6);
```

Output:

```javascript
3
```

---

### Maximum Value

```javascript
Math.max(4, 3, 8, 6);
```

Output:

```javascript
8
```

---

## 🎲 Random Numbers

### Basic Random Number

```javascript
Math.random();
```

Returns a random number between:

```javascript
0 and 1
```

Example:

```javascript
0.3456
0.8734
0.1123
```

---

### Random Number Between 1 and 10

```javascript
Math.floor(Math.random() * 10) + 1;
```

---

### Random Number Within a Range

Formula:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

Example:

```javascript
const min = 10;
const max = 20;

Math.floor(Math.random() * (max - min + 1)) + min;
```

Output:

```javascript
Any random number between 10 and 20
```

---

## 🌍 Real-World Applications

### E-commerce Websites

* Price formatting
* Discount calculations
* Tax calculations

### Games

* Dice rolling
* Random enemy spawning
* Random rewards

### OTP Systems

* Generating random verification codes

### Finance Applications

* Interest calculations
* Currency formatting

### Statistics & Analytics

* Data calculations
* Percentage calculations

---

## 🔑 Key Learnings

* Learned about primitive numbers and Number objects.
* Used methods like `toString()`, `toFixed()`, `toPrecision()`, and `toLocaleString()`.
* Explored the Math object and its functions.
* Understood rounding techniques using `round()`, `ceil()`, and `floor()`.
* Learned to find minimum and maximum values.
* Generated random numbers using `Math.random()`.
* Created random values within a custom range.

---

## 🚀 Day 7 Reflection

Today's session showed that numbers are much more than simple calculations in JavaScript. The built-in Number and Math methods make it easier to format values, perform calculations, and create dynamic features. These concepts will be extremely useful while building real-world applications and JavaScript projects.

**Progress: Day 7/25 Completed ✅**
