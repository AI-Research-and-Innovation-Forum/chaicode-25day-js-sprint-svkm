
const numbers = [3, 10, 24, 90,15];
console.log("Original Array:", numbers);

// Map()
const mapResult = numbers.map(x => x + 1);

console.log("\nMAP () Result:");
console.log(mapResult);

// foreach()
console.log("\nforeach()Result:");

numbers.forEach(x => console.log(x));

// find()
const findResult = numbers.find(x => x > 20);

console.log("\n find()");
console.log(findResult);

// some()
const someResult = numbers.some(x => x > 50);

console.log("\nsome():");
console.log(someResult);