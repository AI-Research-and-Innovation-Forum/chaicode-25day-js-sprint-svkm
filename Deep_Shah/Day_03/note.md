# Day 03 - Type Conversion & Operations

## Lecture 06 - Type Conversion

Today I learned how JavaScript converts values from one data type to another.

### Number Conversion

```js
let score = "33";
console.log(Number(score));
```

* String numbers can be converted to Number.
* Invalid numeric strings return `NaN`.

Examples:

```js
Number("33")      // 33
Number("33abc")   // NaN
```

### Boolean Conversion

```js
Boolean(1)   // true
Boolean(0)   // false
Boolean("")  // false
Boolean("JS") // true
```

### String Conversion

```js
String(123) // "123"
```

### Key Learning

JavaScript performs automatic type conversion in many situations, so understanding conversions helps avoid unexpected results.

---

## Lecture 07 - Operations

### Arithmetic Operators

```js
+
-
*
/
%
**
```

Examples:

```js
2 + 2
2 - 2
2 * 2
2 / 2
2 % 2
2 ** 3
```

### String Concatenation

```js
let firstName = "Hello";
let lastName = " World";

console.log(firstName + lastName);
```

Output:

```text
Hello World
```

### Interesting JavaScript Behavior

```js
"1" + 2       // "12"
1 + "2"       // "12"
"1" + 2 + 2   // "122"
1 + 2 + "2"   // "32"
```

Rule:

* If a string appears first, values are treated as strings.
* If numbers come first, arithmetic happens first.

### Unary Plus

```js
+true   // 1
+""     // 0
```

Interesting, but not recommended for production code.

### Increment Operator

```js
let gameCounter = 100;
gameCounter++;
```

Output:

```js
101
```

Used in:

* Score counters
* Visitor counts
* Likes and views

### Prefix vs Postfix

```js
++x
```

Prefix:

* Increment first, then use value.

```js
x++
```

Postfix:

* Use current value first, then increment.

Need more practice with this concept.

---

## Key Takeaways

* Learned type conversion between String, Number and Boolean.
* Understood `NaN` and automatic conversions.
* Practiced arithmetic and string operations.
* Learned how JavaScript handles mixed data types.
* Explored increment operators and basic operator behavior.
* Readability is more important than writing tricky code.
