let arr = ["Hassan","Qasim",10];
let str = "Hello!"

// For of loops : Used on object (Not {} : Shows not iterable)

for(const element of arr)
{
    console.log(element);
}

for(const element of str)
{
    console.log(element);
}

// Map : Like HashMap

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India"); // Duplicate key is ignored by Map

console.log(map)

for(const key of map)
{
    console.log(key);
}

// Destructuring :
for(const [key,value] of map)
{
    console.log(key+"==>"+value);
}

// For in loop for objects :

obj1 = {"a" : 10,"b" : 20};

for(const key in obj1)
{
    console.log(key+"==>"+obj1[key]);
}

//  for...in Loop on Arrays ===
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    // for...in loops on arrays return index keys (0, 1, 2...) instead of values
    console.log(programming[key]);
}

// 8. for...in Loop on Maps (Fails silently) ===
for (const key in map) {
    console.log(key); // Will not produce output because Maps are not iterable via for...in
}

const coding = ["js", "ruby", "java", "python", "cpp"];

// . forEach loop using standard callback function ===
coding.forEach( function (val) {
    // The loop automatically passes elements into the anonymous function parameter
    console.log(val);
} );

//  forEach loop using Arrow syntax ===
coding.forEach( (item) => {
    // Modern shorthand variation doing the exact same thing
    console.log(item);
} );

//  Passing an existing function reference to forEach ===
function printMe(item) {
    console.log(item);
}
// Pass function by reference (without parenthesis)
coding.forEach(printMe);

// ===  Exploring extra parameters exposed by forEach ===
coding.forEach( (item, index, arr) => {
    // forEach offers optional access to standard values, item indexes, and the complete source array
    console.log(item, index, arr);
} );

// ===  Iterating over an Array containing multiple Objects ===
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

myCoding.forEach( (item) => {
    // Standard approach to cleanly map out and log dynamic property definitions
    console.log(item.languageName);
} );