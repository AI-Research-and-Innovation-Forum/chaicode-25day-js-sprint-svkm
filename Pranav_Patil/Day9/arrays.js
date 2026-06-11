// Array

const myArr = [1, 2, 3, 4, 5];
const myHeros = ["Batman", "Superman", "Spiderman"];
const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArr[1]); // 2

// Array Methods

// push
myArr.push(6);
console.log(myArr); // [1, 2, 3, 4, 5, 6]

// pop
myArr.pop();
console.log(myArr); // [1, 2, 3, 4, 5]

// unshift / shift - adds / removes element from the beginning of the array
myArr.unshift(9);
console.log(myArr); // [9, 1, 2, 3, 4, 5]
myArr.shift();
console.log(myArr); // [1, 2, 3, 4, 5]

console.log(myArr.includes(9)); // false
console.log(myArr.includes(3)); // true

// indexOf
console.log(myArr.indexOf(5)); // 4
console.log(myArr.indexOf(9)); // -1 : not found
console.log(myArr);

const newArr = myArr.join() // join(separator) : converts the array into a string, with elements separated by the specified separator (default is comma)
console.log(newArr); // "1,2,3,4,5"
console.log(typeof newArr); // "string"


// Slice , Splice

console.log("A",myArr);

const myn1 = myArr.slice(1, 3); // slice(startIndex, endIndex) : returns a new array containing the elements from startIndex to endIndex (exclusive) without modifying the original array
console.log("B",myn1); // [2, 3]

const myn2 = myArr.splice(1, 3); // splice(startIndex, deleteCount) : removes elements from the original array and returns the removed elements
console.log("C",myn2); // [2, 3, 4]

console.log("D",myArr); // [1, 5] : splice modifies the original array, while slice does not.

const marvelHeros = ["Ironman", "Thor", "Hulk", "Captain America"];
const dcHeros = ["Batman", "Superman", "Wonder Woman", "Flash"];

// marvelHeros.push(dcHeros) // This adds the entire dcHeros array as a single element to marvelHeros
// console.log(marvelHeros); // ["Ironman", "Thor", "Hulk", "Captain America", ["Batman", "Superman", "Wonder Woman", "Flash"]]

const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros); // ["Ironman", "Thor", "Hulk", "Captain America", "Batman", "Superman", "Wonder Woman", "Flash"]

// spread

const allHeros2 = [...marvelHeros, ...dcHeros];
console.log(allHeros2); // ["Ironman", "Thor", "Hulk", "Captain America", "Batman", "Superman", "Wonder Woman", "Flash"]

const a1 = [1, 2, 3, [4, 5, 6], 7, 8, [9,[5,6,7]]]; // an array with nested arrays
const a2 = a1.flat(Infinity); // flat with Infinity flattens the array to any depth
console.log(a2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7] 


console.log(Array.isArray("Pranav")); // false
console.log(Array.from("Pranav")); // ["P", "r", "a", "n", "a", "v"] : creates an array from an iterable or array-like object
console.log(Array.from({name : "Pranav"})); // intresting : creates an array from an object with a length property, but since the object doesn't have a length property, it returns an empty array []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [100, 200, 300] : creates a new array instance with a variable number of arguments, regardless of the number or type of the arguments. It is similar to using the Array constructor with multiple arguments, but it does not have the special behavior when a single numeric argument is passed.




