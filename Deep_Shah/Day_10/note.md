# Day 10 Notes

## Lecture 20: Advanced Function Parameters & Data Handling

---

## 1. Rest Operator in Functions

Sometimes we don't know how many arguments will be passed to a function.

For example, in a shopping cart, users can add any number of products.

The Rest Operator (`...`) collects multiple arguments into a single array.

### Example

```javascript
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));
```

### Output

```javascript
[200, 400, 500]
```

### Key Point

```javascript
...num1
```

Collects all incoming values into an array.

---

## 2. Rest Operator with Normal Parameters

Parameters written before the Rest Operator receive values first.

Remaining values go into the Rest parameter.

### Example

```javascript
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 1000));
```

### Output

```javascript
[500, 1000]
```

### Explanation

```javascript
val1 = 200
val2 = 400
num1 = [500, 1000]
```

---

## 3. Rest vs Spread Operator

The same `...` syntax can act as:

### Rest Operator

Collects multiple values.

```javascript
function demo(...values) {
}
```

### Spread Operator

Expands values.

```javascript
const arr = [1, 2, 3];

console.log(...arr);
```

### Output

```javascript
1 2 3
```

### Difference

| Rest Operator      | Spread Operator           |
| ------------------ | ------------------------- |
| Collects values    | Expands values            |
| Used in parameters | Used while passing values |
| Returns array      | Expands array/object      |

---

## 4. Passing Objects to Functions

Objects can be passed directly to functions.

### Example

```javascript
const user = {
    username: "Hitesh",
    price: 199
};

function handleObject(anyObject) {

    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );

}

handleObject(user);
```

### Output

```javascript
Username is Hitesh and price is 199
```

---

## 5. Passing Object Directly

Creating a separate variable is optional.

### Example

```javascript
handleObject({
    username: "Sam",
    price: 399
});
```

### Output

```javascript
Username is Sam and price is 399
```

---

## 6. Importance of Property Names

Property names must match correctly.

### Example

```javascript
const user = {
    username: "Hitesh",
    price: 199
};

function handleObject(anyObject) {

    console.log(anyObject.prices);

}

handleObject(user);
```

### Output

```javascript
undefined
```

### Why?

Because:

```javascript
price
```

exists but

```javascript
prices
```

does not exist.

---

## 7. Passing Arrays to Functions

Arrays can also be passed as function arguments.

### Example

```javascript
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
```

### Output

```javascript
400
```

---

## 8. Passing Array Directly

Arrays can be passed directly without storing them in a variable.

### Example

```javascript
console.log(
    returnSecondValue([200, 400, 500, 1000])
);
```

### Output

```javascript
400
```

---

## 9. Generic Function Design

Instead of creating functions for one specific object or array, use generic parameter names.

### Example

```javascript
function handleObject(anyObject) {
}
```

Instead of:

```javascript
function handleObject(user) {
}
```

### Benefits

* Reusable code
* Flexible design
* Better for large projects
* Easier maintenance

---

## 10. Type Safety Concept

JavaScript does not automatically verify object structure.

### Example

```javascript
handleObject({
    username: "Sam"
});
```

If `price` is missing:

```javascript
undefined
```

may be returned.

### Solution

Use validation.

```javascript
if (!anyObject.price) {
    console.log("Price missing");
}
```

---

# Key Takeaways

### Lecture 20

✅ Rest Operator (`...args`)

✅ Rest vs Spread Operator

✅ Handling Unknown Number of Arguments

✅ Passing Objects to Functions

✅ Passing Arrays to Functions

✅ Accessing Object Properties

✅ Generic Function Design

✅ Type Safety Awareness

✅ Dynamic Data Handling

---

# Quick Revision

```text
Rest Operator (...) → Collect multiple arguments into an array

Spread Operator (...) → Expand array/object values

Object as Argument → Pass object into function

Array as Argument → Pass array into function

Generic Function → Works with different data

Type Safety → Verify required properties exist

return array[index] → Access specific value
```
