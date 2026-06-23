# JavaScript Functions - Complete Notes 🚀

## 📌 What is a Function?

A function is a **reusable block of code** that performs a specific task.

```javascript
function welcomeCustomer() {
    console.log("Welcome to AutoHub Motors");
}
```

**Think of a function as a machine that takes input, processes it, and gives output.**

---

## 🚗 Why Functions?

### Without Functions

```javascript
console.log("Welcome to AutoHub Motors");
console.log("Welcome to AutoHub Motors");
console.log("Welcome to AutoHub Motors");
```

### With Functions

```javascript
function welcomeCustomer() {
    console.log("Welcome to AutoHub Motors");
}

welcomeCustomer();
```

✅ Cleaner Code

✅ Better Reusability

✅ Easy Maintenance

---

## 🔥 Calling a Function

Creating a function does **not** execute it.

```javascript
function welcomeCustomer() {
    console.log("Welcome to AutoHub Motors");
}

welcomeCustomer();
```

### Output

```javascript
Welcome to AutoHub Motors
```

---

## 📥 Function Parameters

Parameters act as **placeholders** for values.

```javascript
function showCar(carName) {
    console.log(carName);
}
```

---

## 📤 Function Arguments

Arguments are the **actual values** passed to a function.

```javascript
showCar("Toyota Camry");
```

### Output

```javascript
Toyota Camry
```

---

## ⚡ Parameters vs Arguments

```javascript
function showCar(carName) {
    console.log(carName);
}
```

### Parameter

```javascript
carName
```

### Argument

```javascript
showCar("Honda City");
```

---

## 🎯 How Arguments Affect Output

```javascript
function showCar(carName) {
    console.log(carName);
}
```

### String Argument

```javascript
showCar("Hyundai Verna");
```

**Output**

```javascript
Hyundai Verna
```

### Number Argument

```javascript
showCar(2025);
```

**Output**

```javascript
2025
```

### No Argument

```javascript
showCar();
```

**Output**

```javascript
undefined
```

---

## 🚘 Multiple Parameters

```javascript
function carDetails(carName, price) {
    console.log(`${carName} costs ₹${price}`);
}
```

```javascript
carDetails("Toyota Camry", 4500000);
```

### Output

```javascript
Toyota Camry costs ₹4500000
```

---

## 🔙 Return Keyword

The `return` keyword sends a value back from a function.

```javascript
function calculatePrice(price, tax) {
    return price + tax;
}
```

```javascript
const finalPrice =
    calculatePrice(1000000, 50000);

console.log(finalPrice);
```

### Output

```javascript
1050000
```

---

## ❌ Code After Return

```javascript
function calculatePrice(price, tax) {
    return price + tax;

    console.log("This will never run");
}
```

⚠️ Anything written after `return` will never execute.

---

## 🎁 Default Parameters

```javascript
function assignCustomer(
    customerName = "Guest"
) {
    return `${customerName} booked a car`;
}
```

```javascript
console.log(assignCustomer());
```

### Output

```javascript
Guest booked a car
```

---

## 📦 Rest Operator (...)

Used when the number of arguments is unknown.

```javascript
function selectedAccessories(
    ...accessories
) {
    return accessories;
}
```

```javascript
console.log(
    selectedAccessories(
        "Dash Cam",
        "Seat Cover",
        "Alloy Wheels"
    )
);
```

### Output

```javascript
[
  "Dash Cam",
  "Seat Cover",
  "Alloy Wheels"
]
```

---

## 🏎️ Passing Objects to Functions

```javascript
const car = {
    name: "Honda City",
    price: 1500000
};
```

```javascript
function displayCar(carDetails) {
    console.log(
        `${carDetails.name} costs ₹${carDetails.price}`
    );
}
```

### Output

```javascript
Honda City costs ₹1500000
```

---

## 📋 Passing Arrays to Functions

```javascript
const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna"
];
```

```javascript
function firstCar(cars) {
    return cars[0];
}
```

### Output

```javascript
Toyota Camry
```

---

## 🧠 Function Declaration

```javascript
function calculateMileage(
    distance,
    fuel
) {
    return distance / fuel;
}
```

```javascript
console.log(
    calculateMileage(500, 25)
);
```

### Output

```javascript
20
```

---

## 🚀 Function Expression

```javascript
const calculateEMI =
function(amount) {
    return amount / 12;
};
```

```javascript
console.log(
    calculateEMI(240000)
);
```

### Output

```javascript
20000
```

---

## ⚠️ Hoisting Difference

### Function Declaration

```javascript
console.log(calculateTax(1000));

function calculateTax(amount) {
    return amount * 0.18;
}
```

✅ Works Successfully

### Function Expression

```javascript
console.log(calculateTax(1000));

const calculateTax =
function(amount) {
    return amount * 0.18;
};
```

❌ Throws an Error

---

## 🌍 Real-World Uses

* Vehicle Booking Systems
* Payment Processing
* Inventory Management
* Authentication Systems
* Form Validation
* API Calls

---

## 📝 Quick Revision

✅ Functions make code reusable

✅ Parameters receive values

✅ Arguments send values

✅ Return sends data back

✅ Default parameters prevent undefined

✅ Rest operator handles multiple arguments

✅ Objects and arrays can be passed into functions

✅ Function declarations and expressions behave differently

---

# 🎯 One-Line Summary

> **Functions are reusable blocks of code that take input, perform an action, and optionally return a result.**
