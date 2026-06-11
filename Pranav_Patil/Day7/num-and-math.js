const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(typeof balance);


const num1 = 123.8976
console.log(num1.toFixed(2));
console.log(num1.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


//********************** Maths ****************
console.log(Math);

console.log(Math.abs(-6));
console.log(Math.round(5.4));
console.log(Math.ceil(5.4));
console.log(Math.floor(5.4));

console.log(Math.min(4,3,7,5,1,9,0));
console.log(Math.max(4,3,7,5,1,9,0));

console.log(Math.random());
console.log((Math.random()*10) +1 );

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min));
