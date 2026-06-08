# JavaScript Notes – Numbers & Math

## Number Data Type
JavaScript provides the `Number` data type for numeric values.

### Important Number Properties
- `Number.MAX_VALUE` – Largest possible number.
- `Number.MIN_VALUE` – Smallest positive number.
- `Number.MAX_SAFE_INTEGER` – Maximum safe integer.
- `Number.MIN_SAFE_INTEGER` – Minimum safe integer.
- `Number.EPSILON` – Smallest difference between two representable numbers.

## Math Object
JavaScript includes a built-in `Math` object with useful mathematical functions.

### Common Methods

#### 1. Math.abs()
Returns the absolute value.

```js
Math.abs(-4); // 4
Math.abs(4);  // 4
```

#### 2. Math.round()
Rounds to the nearest integer.

```js
Math.round(4.3); // 4
Math.round(4.6); // 5
```

#### 3. Math.ceil()
Always rounds upward.

```js
Math.ceil(4.2); // 5
```

#### 4. Math.floor()
Always rounds downward.

```js
Math.floor(4.9); // 4
```

### Other Useful Math Methods
- `Math.sqrt()` – Square root
- `Math.pow()` – Power calculation
- `Math.sign()` – Sign of a number
- `Math.sin()` – Sine value
- `Math.cos()` – Cosine value

## Key Points
- Numbers in JavaScript have built-in properties and methods.
- `Math` is a built-in object for mathematical operations.
- `abs()`, `round()`, `ceil()`, and `floor()` are frequently used in programs.
- `MAX_SAFE_INTEGER` is important when working with large integers.

---

