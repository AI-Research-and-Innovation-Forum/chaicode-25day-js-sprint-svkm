# Higher Order Functions

Higher Order Functions are special functions in JavaScript that make working with arrays easier and more efficient. They help us perform operations on array elements without writing traditional loops.

The three most commonly used Higher Order Functions are:

* `map()`
* `filter()`
* `reduce()`

---

# 1. map()

## Definition

`map()` creates a new array by applying a transformation to every element of the original array.

## Syntax

```javascript
array.map((item) => {
    // transformation
});
```

## Example

```javascript
const arr = [5, 12, 18, 40];

const result = arr.map(x => x * 2);

console.log(result);
```

### Output

```javascript
[10, 24, 36, 80]
```

## Iteration Table

| Iteration | Index (i) | Current Element | Transformation (x × 2) | Result           |
| --------- | --------- | --------------- | ---------------------- | ---------------- |
| Start     | -         | -               | -                      | []               |
| 1         | 0         | 5               | 10                     | [10]             |
| 2         | 1         | 12              | 24                     | [10, 24]         |
| 3         | 2         | 18              | 36                     | [10, 24, 36]     |
| 4         | 3         | 40              | 80                     | [10, 24, 36, 80] |

## Explanation

The `map()` function visits each element of the array and applies the specified operation.

* 5 becomes 10
* 12 becomes 24
* 18 becomes 36
* 40 becomes 80

A new array containing the transformed values is returned.

### Use of map()

Use `map()` when you want to modify every element of an array.

---

# 2. filter()

## Definition

`filter()` creates a new array that contains only the elements that satisfy a specified condition.

## Syntax

```javascript
array.filter((item) => {
    return condition;
});
```

## Example

```javascript
const arr = [5, 12, 18, 40];

const result = arr.filter(x => x > 15);

console.log(result);
```

### Output

```javascript
[18, 40]
```

## Iteration Table

| Iteration | Index (i) | Current Element | Condition (x > 15) | Result   |
| --------- | --------- | --------------- | ------------------ | -------- |
| Start     | -         | -               | -                  | []       |
| 1         | 0         | 5               | False              | []       |
| 2         | 1         | 12              | False              | []       |
| 3         | 2         | 18              | True               | [18]     |
| 4         | 3         | 40              | True               | [18, 40] |

## Explanation

The condition used is `x > 15`.

* 5 is not greater than 15 ❌
* 12 is not greater than 15 ❌
* 18 is greater than 15 ✅
* 40 is greater than 15 ✅

Only the elements that satisfy the condition are included in the new array.

### Use of filter()

Use `filter()` when you want to select specific elements from an array based on a condition.

---

# 3. reduce()

## Definition

`reduce()` combines all elements of an array into a single value.

## Syntax

```javascript
array.reduce((accumulator, currentValue) => {
    return operation;
}, initialValue);
```

## Example

```javascript
const arr = [5, 12, 18, 40];

const result = arr.reduce((sum, x) => sum + x, 0);

console.log(result);
```

### Output

```javascript
75
```

## Iteration Table

| Iteration | Index (i) | Current Element | Accumulator Operation | Result |
| --------- | --------- | --------------- | --------------------- | ------ |
| Start     | -         | -               | 0                     | 0      |
| 1         | 0         | 5               | 0 + 5                 | 5      |
| 2         | 1         | 12              | 5 + 12                | 17     |
| 3         | 2         | 18              | 17 + 18               | 35     |
| 4         | 3         | 40              | 35 + 40               | 75     |

## Explanation

The initial accumulator value is 0.

* 0 + 5 = 5
* 5 + 12 = 17
* 17 + 18 = 35
* 35 + 40 = 75

The final value returned by `reduce()` is **75**.

### Use of reduce()

Use `reduce()` when you want to combine all array elements into a single value such as:

* Sum
* Average
* Maximum value
* Minimum value
* Product of all elements

---

# Quick Comparison

| Function | Purpose                               | Returns      |
| -------- | ------------------------------------- | ------------ |
| map()    | Modifies every element                | New Array    |
| filter() | Selects elements based on a condition | New Array    |
| reduce() | Combines all elements into one value  | Single Value |

---

# Easy Trick to Remember

* **map() → Modify**
* **filter() → Select**
* **reduce() → Combine**

---

# Example Summary

```javascript
const arr = [5, 12, 18, 40];

arr.map(x => x * 2);       // [10, 24, 36, 80]

arr.filter(x => x > 15);   // [18, 40]

arr.reduce((sum, x) => sum + x, 0); // 75
```

## Conclusion

Higher Order Functions help us write cleaner and shorter code.

* Use `map()` to transform data.
* Use `filter()` to select data.
* Use `reduce()` to combine data.

These functions are widely used in modern JavaScript, React, and Node.js applications.
