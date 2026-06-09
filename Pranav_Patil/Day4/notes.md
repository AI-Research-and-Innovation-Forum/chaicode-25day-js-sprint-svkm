# 📅 Day 4 - JavaScript Datatypes & Conversion

## 🎥 Videos Covered

1. Datatype Conversion Confusion
2. Why String to Number Conversion is Confusing
3. Comparison of Datatypes in JavaScript

---

## 📚 What are Datatypes?

Datatypes define the type of value stored in a variable.

### Primitive Datatypes

* Number
* String
* Boolean
* Null
* Undefined
* Symbol
* BigInt

### Reference Datatypes

* Object
* Array
* Function

---

## 🔄 Type Conversion

JavaScript allows converting one datatype into another.

### String to Number

```javascript
let score = "33";
let valueInNumber = Number(score);
```

### Important Conversions

| Value             | Result |
| ----------------- | ------ |
| Number("33")      | 33     |
| Number("33abc")   | NaN    |
| Number(null)      | 0      |
| Number(undefined) | NaN    |
| Number(true)      | 1      |
| Number(false)     | 0      |

### NaN

`NaN` stands for **Not a Number**.

```javascript
typeof NaN
```

Output:

```javascript
number
```

---

## 🔤 Boolean Conversion

### Truthy Values

These convert to `true`:

```javascript
Boolean(1)
Boolean("Pranav")
Boolean([])
Boolean({})
```

### Falsy Values

These convert to `false`:

```javascript
Boolean(0)
Boolean("")
Boolean(null)
Boolean(undefined)
Boolean(NaN)
```

---

## 🔡 Number to String Conversion

```javascript
let num = 100;
let strNum = String(num);
```

Output:

```javascript
"100"
```

Type:

```javascript
string
```

---

## ➕ String and Number Confusion

### Example 1

```javascript
"1" + 2
```

Output:

```javascript
"12"
```

### Example 2

```javascript
"1" + 2 + 2
```

Output:

```javascript
"122"
```

Explanation:

```javascript
"1" + 2 = "12"
"12" + 2 = "122"
```

### Example 3

```javascript
1 + 2 + "2"
```

Output:

```javascript
"32"
```

Explanation:

```javascript
1 + 2 = 3
3 + "2" = "32"
```

---

## ⚖️ Comparison Operators

* `>`
* `<`
* `>=`
* `<=`
* `==`
* `===`
* `!=`

### Examples

```javascript
2 > 1
```

Output:

```javascript
true
```

```javascript
"2" > 1
```

Output:

```javascript
true
```

JavaScript converts `"2"` into `2`.

---

## 🚨 Null Comparison Confusion

```javascript
null > 0
```

Output:

```javascript
false
```

```javascript
null == 0
```

Output:

```javascript
false
```

```javascript
null >= 0
```

Output:

```javascript
true
```

### Reason

For comparison operations, JavaScript converts:

```javascript
null → 0
```

Therefore:

```javascript
0 >= 0
```

becomes:

```javascript
true
```

---

## 🚨 Undefined Comparison

```javascript
undefined > 0
```

Output:

```javascript
false
```

```javascript
undefined < 0
```

Output:

```javascript
false
```

```javascript
undefined == 0
```

Output:

```javascript
false
```

---

## 🎯 Difference Between == and ===

### Double Equals (==)

Checks only values.

```javascript
"2" == 2
```

Output:

```javascript
true
```

### Triple Equals (===)

Checks both value and datatype.

```javascript
"2" === 2
```

Output:

```javascript
false
```

Because:

```javascript
String !== Number
```

---

## 💡 Key Learnings

* JavaScript automatically performs type conversion.
* `Number(null)` returns `0`.
* `Number(undefined)` returns `NaN`.
* `true` becomes `1` and `false` becomes `0`.
* Strings combined with numbers often result in string concatenation.
* `==` checks only values.
* `===` checks both value and datatype.
* Avoid comparing `null` and `undefined` because results can be confusing.
* Use `===` in real-world projects for safer comparisons.

---

## 🚀 Day 4 Summary

Today I learned about JavaScript datatypes, type conversion, type coercion, and datatype comparisons. I explored confusing cases involving strings, numbers, `null`, and `undefined`, and understood why strict equality (`===`) is preferred in modern JavaScript development.
