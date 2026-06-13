# Day 12 - JavaScript Loops 🚀

## Lecture 27 - For Loop, Break & Continue

---

# Why Loops?

Loops help us execute the same block of code multiple times without writing it repeatedly.

Without Loop:

```javascript
console.log("Lap Completed");
console.log("Lap Completed");
console.log("Lap Completed");
console.log("Lap Completed");
console.log("Lap Completed");
```

With Loop:

```javascript
for (let lap = 1; lap <= 5; lap++) {
    console.log("Lap Completed");
}
```

---

# For Loop

## Syntax

```javascript
for (initialization; condition; increment/decrement) {
    // code
}
```

Example:

```javascript
for (let lap = 1; lap <= 5; lap++) {
    console.log(`Lap ${lap}`);
}
```

Output:

```javascript
Lap 1
Lap 2
Lap 3
Lap 4
Lap 5
```

---

# Understanding Each Part

```javascript
for (let lap = 1; lap <= 5; lap++) {
    console.log(lap);
}
```

### Initialization

```javascript
let lap = 1;
```

Runs only once.

### Condition

```javascript
lap <= 5
```

Checked before every iteration.

### Increment

```javascript
lap++
```

Runs after every iteration.

---

# Reverse Loop

```javascript
for (let lap = 5; lap >= 1; lap--) {
    console.log(lap);
}
```

Output:

```javascript
5
4
3
2
1
```

---

# Even Numbers

```javascript
for (let speed = 0; speed <= 20; speed += 2) {
    console.log(speed);
}
```

Output:

```javascript
0
2
4
6
8
10
12
14
16
18
20
```

---

# Odd Numbers

```javascript
for (let speed = 1; speed <= 20; speed += 2) {
    console.log(speed);
}
```

Output:

```javascript
1
3
5
7
9
11
13
15
17
19
```

---

# break Statement

Stops the loop immediately.

Example:

```javascript
for (let lap = 1; lap <= 10; lap++) {

    if (lap === 6) {
        break;
    }

    console.log(lap);
}
```

Output:

```javascript
1
2
3
4
5
```

Loop terminates as soon as condition becomes true.

---

# Real-Life Example of break

Car inspection stops when a faulty car is found.

```javascript
for (let car = 1; car <= 10; car++) {

    if (car === 4) {
        console.log("Fault Detected");
        break;
    }

    console.log(`Checking Car ${car}`);
}
```

Output:

```javascript
Checking Car 1
Checking Car 2
Checking Car 3
Fault Detected
```

---

# continue Statement

Skips current iteration and moves to the next one.

```javascript
for (let car = 1; car <= 5; car++) {

    if (car === 3) {
        continue;
    }

    console.log(car);
}
```

Output:

```javascript
1
2
4
5
```

Car 3 was skipped.

---

# Real-Life Example of continue

Skip a car that's already sold.

```javascript
for (let car = 1; car <= 5; car++) {

    if (car === 2) {
        continue;
    }

    console.log(`Display Car ${car}`);
}
```

Output:

```javascript
Display Car 1
Display Car 3
Display Car 4
Display Car 5
```

---

# Lecture 28 - While Loop & Do While Loop

---

# While Loop

A while loop runs as long as the condition remains true.

## Syntax

```javascript
while (condition) {
    // code
}
```

Example:

```javascript
let fuel = 5;

while (fuel > 0) {
    console.log(`Fuel Left: ${fuel}`);
    fuel--;
}
```

Output:

```javascript
Fuel Left: 5
Fuel Left: 4
Fuel Left: 3
Fuel Left: 2
Fuel Left: 1
```

---

# Infinite Loop

Danger ⚠️

```javascript
let fuel = 5;

while (fuel > 0) {
    console.log(fuel);
}
```

Reason:

```javascript
fuel--;
```

is missing.

Condition never becomes false.

---

# Do While Loop

Executes at least once, even if condition is false.

## Syntax

```javascript
do {
    // code
} while (condition);
```

---

# Example

```javascript
let lap = 1;

do {
    console.log(`Lap ${lap}`);
    lap++;
} while (lap <= 5);
```

Output:

```javascript
Lap 1
Lap 2
Lap 3
Lap 4
Lap 5
```

---

# Difference Between While and Do While

### While Loop

Checks condition first.

```javascript
let score = 0;

while (score > 0) {
    console.log("Playing");
}
```

Output:

```javascript
No Output
```

---

### Do While Loop

Runs first, checks later.

```javascript
let score = 0;

do {
    console.log("Playing");
} while (score > 0);
```

Output:

```javascript
Playing
```

---

# When To Use What?

### for Loop

Use when number of iterations is known.

Example:

```javascript
for (let i = 1; i <= 10; i++) {}
```

---

### while Loop

Use when number of iterations is unknown.

Example:

```javascript
while (fuel > 0) {}
```

---

### do while Loop

Use when code must run at least once.

Example:

```javascript
do {
    showMenu();
} while (userChoice !== "exit");
```

---

# Key Takeaways

✅ for loop

✅ Initialization, Condition, Increment

✅ break Statement

✅ continue Statement

✅ while Loop

✅ Infinite Loop Concept

✅ do while Loop

✅ Difference Between while and do while

### Final Understanding

Loops are all about automation.

Instead of writing the same code repeatedly, we let JavaScript repeat it for us until a condition becomes false.

A developer's productivity increases significantly once loops become second nature.
