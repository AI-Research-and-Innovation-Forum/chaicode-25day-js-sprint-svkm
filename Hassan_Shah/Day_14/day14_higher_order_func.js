// ==========================================
// 1. forEach Method
// ==========================================
const coding = ["js", "ruby", "java", "python", "cpp"]          // Initialize an array of strings representing languages

const values = coding.forEach( (item) => {                      // Iterate over each item using forEach
    return item                                                 // Attempt to return the item (forEach ignores returns)
} )

console.log("1. forEach Output:", values);                      // Logs 'undefined' because forEach does not return a new array


// ==========================================
// 2. filter Method
// ==========================================
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]                  // Initialize an array of numbers from 1 to 10

// Implicit return example (commented out)
// const newNums = myNums.filter( (num) => num > 4 )            

const newNums = myNums.filter( (num) => {                       // Open a block scope
    return num > 4                                              // When using '{}', the 'return' keyword is mandatory
} )

const newNums2 = []                                             // Initialize an empty array
myNums.forEach( (num) => {                                      // Replicating 'filter' using 'forEach' 
    if (num > 4) {                                              // Check the condition manually
        newNums2.push(num)                                      // Push to the new array if condition is met
    }
} )

console.log("2a. filter Output:", newNums);                     // Logs the filtered array: [5, 6, 7, 8, 9, 10]
console.log("2b. filter using forEach Output:", newNums2);      // Logs the manually filtered array: [5, 6, 7, 8, 9, 10]


// ==========================================
// 3. filter with Array of Objects
// ==========================================
const books = [                                                 // Initialize an array of objects representing books
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History' )  // Filter books strictly matching the 'History' genre

userBooks = books.filter( (bk) => {                             // Reassigning userBooks to a new filtered result
    return bk.publish >= 1995 && bk.genre === "History"         // Returns true only if published on/after 1995 AND is 'History'
} )

console.log("3. Array of Objects filter Output:", userBooks);   // Logs the objects that meet the combined conditions


// ==========================================
// 4. map Method & Method Chaining
// ==========================================
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]               // Initialize an array of numbers

const newNums3 = myNumbers                                      // Start with the original array
                .map((num) => num * 10 )                        // First pass: Multiply every element by 10
                .map( (num) => num + 1)                         // Second pass: Add 1 to the result of the previous map
                .filter( (num) => num >= 40)                    // Third pass: Keep only values greater than or equal to 40

console.log("4. Map & Chaining Output:", newNums3);             // Logs the transformed & filtered array: [41, 51, 61, 71, 81, 91, 101]


// ==========================================
// 5. reduce Method
// ==========================================
const myNumsForReduce = [1, 2, 3]                               // Initialize a small array to demonstrate reduce

const myTotal = myNumsForReduce.reduce(function (acc, currval) {// Reduce takes a callback with an accumulator and current value
    // console.log(`acc: ${acc} and currval: ${currval}`);      // Logs the state of both variables on each iteration
    return acc + currval                                        // Adds the current value to the running total (accumulator)
}, 0)                                                           // '0' is passed as the starting value for the accumulator

// Arrow function shorthand (commented out)
// const myTotalShorthand = myNumsForReduce.reduce( (acc, curr) => acc+curr, 0)

console.log("5. reduce Output:", myTotal);                      // Logs the final combined total: 6
