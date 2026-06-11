console.log("map() Example");

const arr1 = [5, 12, 18, 40];

const mapResult = arr1.map(x => x * 2);

console.log("Original Array:", arr1);
console.log("Result:", mapResult);

console.log("\nfilter() Example");

const arr2 = [5, 12, 18, 40];

const filterResult = arr2.filter(x => x > 15);

console.log("Original Array:", arr2);
console.log("Result:", filterResult);

console.log("\nreduce() Example");

const arr3 = [5, 12, 18, 40];

const reduceResult = arr3.reduce((sum, x) => sum + x, 0);

console.log("Original Array:", arr3);
console.log("Result:", reduceResult);

console.log("\nExample Summary");

console.log(arr1.map(x => x * 2));      // [10, 24, 36, 80]
console.log(arr2.filter(x => x > 15));  // [18, 40]
console.log(arr3.reduce((sum, x) => sum + x, 0)); // 75