const score = 10;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.856789;
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++Maths++++++++++++++++++++++

console.log(Math)
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.2));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.max(1, 5, 3, 9, 2));
console.log(Math.min(1, 5, 3, 9, 2));
console.log(Math.random());//gives a random number between 0 and 1
console.log(Math.floor(Math.random() * 10 + 1));//to avoid 0 we have added 1

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))//to get a random number between min and max, we use the formula: Math.floor(Math.random() * (max - min + 1) + min)
