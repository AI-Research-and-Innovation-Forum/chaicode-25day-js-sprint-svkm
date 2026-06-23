# JavaScript Higher Order Functions - Complete Notes 🚀

## 📌 What are Higher Order Functions?

A Higher Order Function is a function that:

* Takes another function as an argument
* Returns a function
* Or both

Examples:

```javascript
forEach()
map()
filter()
reduce()
```

These functions help us write cleaner and more readable code.

---

# 🚗 Our Car Dealership Data

```javascript
const cars = [
    {
        name: "Toyota Camry",
        price: 4500000,
        electric: false
    },
    {
        name: "Tesla Model 3",
        price: 6000000,
        electric: true
    },
    {
        name: "Honda City",
        price: 1800000,
        electric: false
    },
    {
        name: "BYD Seal",
        price: 5000000,
        electric: true
    }
];
```

---

# 🔥 forEach()

Used to perform an action on every element.

```javascript
cars.forEach(function(car) {
    console.log(car.name);
});
```

### Output

```javascript
Toyota Camry
Tesla Model 3
Honda City
BYD Seal
```

---

## Arrow Function Version

```javascript
cars.forEach((car) => {
    console.log(car.name);
});
```

---

## Important Point

`forEach()` does NOT return a new array.

```javascript
const result = cars.forEach(
    (car) => car.name
);

console.log(result);
```

### Output

```javascript
undefined
```

---

# 🗺️ map()

Creates and returns a NEW array.

```javascript
const carNames = cars.map(
    (car) => car.name
);
```

```javascript
console.log(carNames);
```

### Output

```javascript
[
  "Toyota Camry",
  "Tesla Model 3",
  "Honda City",
  "BYD Seal"
]
```

---

## Modifying Values Using map()

```javascript
const discountedPrices =
cars.map((car) => {
    return car.price - 50000;
});
```

```javascript
console.log(discountedPrices);
```

### Output

```javascript
[
  4450000,
  5950000,
  1750000,
  4950000
]
```

---

## Chaining map()

```javascript
const pricesInLakhs =
cars
.map((car) => car.price)
.map((price) => price / 100000);
```

### Output

```javascript
[
  45,
  60,
  18,
  50
]
```

---

# 🎯 filter()

Returns only the elements that satisfy a condition.

```javascript
const electricCars =
cars.filter(
    (car) => car.electric
);
```

```javascript
console.log(electricCars);
```

### Output

```javascript
[
  {
    name: "Tesla Model 3",
    price: 6000000,
    electric: true
  },
  {
    name: "BYD Seal",
    price: 5000000,
    electric: true
  }
]
```

---

## Filter Expensive Cars

```javascript
const premiumCars =
cars.filter(
    (car) => car.price > 4000000
);
```

### Output

```javascript
[
  Toyota Camry,
  Tesla Model 3,
  BYD Seal
]
```

---

## Difference Between map() and filter()

### map()

Transforms every element.

```javascript
const names =
cars.map(
    (car) => car.name
);
```

Result:

```javascript
[
  "Toyota Camry",
  "Tesla Model 3",
  "Honda City",
  "BYD Seal"
]
```

---

### filter()

Selects only matching elements.

```javascript
const electricCars =
cars.filter(
    (car) => car.electric
);
```

Result:

```javascript
[
  Tesla Model 3,
  BYD Seal
]
```

---

# ➕ reduce()

Used to combine all elements into a single value.

---

## Total Inventory Value

```javascript
const totalValue =
cars.reduce(
    (accumulator, car) => {
        return accumulator +
               car.price;
    },
    0
);
```

```javascript
console.log(totalValue);
```

### Output

```javascript
17300000
```

---

## Understanding reduce()

```javascript
const numbers =
[10, 20, 30];
```

```javascript
const sum =
numbers.reduce(
    (acc, curr) =>
        acc + curr,
    0
);
```

### Iteration Table

| acc | curr | Result |
| --- | ---- | ------ |
| 0   | 10   | 10     |
| 10  | 20   | 30     |
| 30  | 30   | 60     |

Final Answer:

```javascript
60
```

---

## Calculate Total Revenue

```javascript
const soldCars = [
    {
        name: "Toyota Camry",
        sold: 10,
        price: 4500000
    },
    {
        name: "Honda City",
        sold: 15,
        price: 1800000
    }
];
```

```javascript
const revenue =
soldCars.reduce(
    (acc, car) => {
        return acc +
        (car.sold * car.price);
    },
    0
);
```

### Output

```javascript
72000000
```

---

# 🚀 Chaining filter() + map()

Find electric car names only.

```javascript
const electricCarNames =
cars
.filter(
    (car) => car.electric
)
.map(
    (car) => car.name
);
```

### Output

```javascript
[
  "Tesla Model 3",
  "BYD Seal"
]
```

---

# 🌟 Real World Uses

### forEach()

* Display products
* Send notifications
* Update UI

### map()

* Convert API data
* Format data
* Create new arrays

### filter()

* Search systems
* Product filtering
* User filtering

### reduce()

* Total cart amount
* Revenue calculation
* Statistics

---

# 📝 Quick Revision

✅ Higher Order Functions work with other functions

✅ forEach() performs actions on every element

✅ map() creates a new transformed array

✅ filter() selects matching elements

✅ reduce() combines all elements into one value

✅ Methods can be chained together

---

# 🎯 One-Line Summary

> Higher Order Functions make JavaScript more powerful by allowing us to transform, filter, and combine data with clean and readable code.
