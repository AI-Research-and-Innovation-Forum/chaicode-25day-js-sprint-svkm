// Higher Order Functions in JS

const numbers = [1, 2, 3, 4, 5];

// 1. map() -> transform elements

const mappedResult = numbers.map((num) => {
    return num * 2;
});

console.log("map result:", mappedResult);



// 2. filter() -> filter elements

const filteredResult = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log("filter result:", filteredResult);

// 3. forEach() -> just iterate

console.log("forEach result:");
numbers.forEach((num) => {
    console.log(num * 2);
});


// 4. reduce() -> single value output

const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log("reduce sum:", sum);
