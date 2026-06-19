# JavaScript Arrays - Complete Notes 🚗

## What is an Array?

An array is a special JavaScript object used to store multiple values in a single variable.

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna"
];
```

Think of this as a list of vehicles available in a dealership.

---

# Why Arrays?

Without Arrays:

```javascript
const car1 = "Toyota Camry";
const car2 = "Honda City";
const car3 = "Hyundai Verna";
```

With Arrays:

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna"
];
```

Much cleaner and easier to manage.

---

# Accessing Elements

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna"
];

console.log(cars[0]);
console.log(cars[1]);
```

Output:

```javascript
Toyota Camry
Honda City
```

---

# Array Length

### How many vehicles are in stock?

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna",
    "Mahindra XUV700"
];

console.log(cars.length);
```

Output:

```javascript
4
```

---

# push()

### New vehicle arrived at dealership

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna"
];

cars.push("Kia Seltos");

console.log(cars);
```

Output:

```javascript
[
 "Toyota Camry",
 "Honda City",
 "Hyundai Verna",
 "Kia Seltos"
]
```

---

# pop()

### Last vehicle sold

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna",
    "Kia Seltos"
];

cars.pop();

console.log(cars);
```

Output:

```javascript
[
 "Toyota Camry",
 "Honda City",
 "Hyundai Verna"
]
```

---

# unshift()

### Priority vehicle added to front display

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna"
];

cars.unshift("Mercedes-Benz C-Class");

console.log(cars);
```

Output:

```javascript
[
 "Mercedes-Benz C-Class",
 "Toyota Camry",
 "Honda City",
 "Hyundai Verna"
]
```

---

# shift()

### Remove first displayed vehicle

```javascript
const cars = [
    "Mercedes-Benz C-Class",
    "Toyota Camry",
    "Honda City"
];

cars.shift();

console.log(cars);
```

Output:

```javascript
[
 "Toyota Camry",
 "Honda City"
]
```

---

# includes()

### Check if dealership has a specific car

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna"
];

console.log(cars.includes("Honda City"));
```

Output:

```javascript
true
```

---

# indexOf()

### Find parking slot position

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna"
];

console.log(cars.indexOf("Hyundai Verna"));
```

Output:

```javascript
2
```

---

# slice()

### Cars selected for weekend exhibition

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna",
    "BMW X5",
    "Audi A6"
];

console.log(cars.slice(1,4));
```

Output:

```javascript
[
 "Honda City",
 "Hyundai Verna",
 "BMW X5"
]
```

---

# splice()

### Replace an old model with a new one

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna"
];

cars.splice(1,1,"Tesla Model 3");

console.log(cars);
```

Output:

```javascript
[
 "Toyota Camry",
 "Tesla Model 3",
 "Hyundai Verna"
]
```

---

# Arrays Can Store Different Data Types

### Vehicle Information

```javascript
const carDetails = [
    "BMW X5",
    393,
    true,
    2025
];
```

Meaning:

```javascript
[
 Car Name,
 Horsepower,
 Available,
 Model Year
]
```

---

# Arrays of Objects

### Real-world Car Database

```javascript
const cars = [
    {
        name: "BMW X5",
        fuel: "Petrol",
        price: 95
    },
    {
        name: "Tesla Model 3",
        fuel: "Electric",
        price: 45
    }
];
```

Most APIs return data in this structure.

---

# Nested Arrays

### Multi-floor Showroom

```javascript
const showroom = [
    ["Toyota Camry", "Honda City"],
    ["BMW X5", "Audi A6"],
    ["Tesla Model 3", "BYD Seal"]
];

console.log(showroom[2][1]);
```

Output:

```javascript
BYD Seal
```

---

# Array Destructuring

### Top Selling Cars

```javascript
const topCars = [
    "Toyota Camry",
    "Tesla Model 3",
    "BMW X5"
];

const [first, second] = topCars;

console.log(first);
console.log(second);
```

Output:

```javascript
Toyota Camry
Tesla Model 3
```

---

# Skipping Elements

### Need only the second bestseller

```javascript
const topCars = [
    "Toyota Camry",
    "Tesla Model 3",
    "BMW X5"
];

const [, second] = topCars;

console.log(second);
```

Output:

```javascript
Tesla Model 3
```

---

# Rest Operator (...)

### Featured Vehicle + Remaining Stock

```javascript
const cars = [
    "Toyota Camry",
    "Tesla Model 3",
    "BMW X5",
    "Audi A6",
    "BYD Seal"
];

const [featuredCar, ...remainingCars] = cars;

console.log(featuredCar);
console.log(remainingCars);
```

Output:

```javascript
Toyota Camry

[
 "Tesla Model 3",
 "BMW X5",
 "Audi A6",
 "BYD Seal"
]
```

---

# Accessing Remaining Values

```javascript
console.log(remainingCars[0]);
```

Output:

```javascript
Tesla Model 3
```

---

# Arrays Are Objects

```javascript
const cars = [
    "Toyota Camry",
    "Honda City"
];

console.log(typeof cars);
```

Output:

```javascript
object
```

⭐ Common Interview Question

---

# Things I Explored Beyond the Lecture

✅ Arrays of Objects

✅ Nested Arrays

✅ Array Destructuring

✅ Skipping Elements

✅ Rest Operator (...)

✅ Accessing Rest Values

✅ Arrays as Objects

✅ Understanding Real-world Data Structures

---

# Key Takeaways

* Arrays store multiple values.
* Indexing starts from 0.
* Arrays are mutable.
* Arrays can contain any data type.
* Arrays can contain objects and other arrays.
* Destructuring helps extract values quickly.
* Rest operator collects remaining elements.
* Arrays are one of the most important data structures in JavaScript.

### Real Applications of Arrays

🚗 Vehicle Inventory Systems

🏢 Multi-floor Showroom Management

⚡ EV Databases

🏁 Racing Leaderboards

📊 Automobile Analytics Dashboards

🌐 API Responses

Mastering arrays means understanding how real applications organize data.
