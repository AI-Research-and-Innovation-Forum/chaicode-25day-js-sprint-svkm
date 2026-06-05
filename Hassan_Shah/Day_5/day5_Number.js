//Explicit declaration ;

let n1 = new Number(143);
console.log(n1)

// Number Methods ;

console.log(n1.toString().length);
console.log(n1.toFixed(2));
console.log(n1.toPrecision(3));
console.log(n1.toLocaleString('en-IN'));


// Maths :

console.log(Math.abs(n1));
console.log(Math.max(n1));
console.log(Math.min(n1));
console.log(Math.floor(n1));
console.log(Math.round(n1));
console.log(Math.ceil(n1));
console.log(Math.random()); //Values between 0(Inclusive) & 1(Exclusive);

let max = 20;
let min = 10;
let random_value = Math.floor(Math.random()*(max-min+1))+min;
console.log(random_value)