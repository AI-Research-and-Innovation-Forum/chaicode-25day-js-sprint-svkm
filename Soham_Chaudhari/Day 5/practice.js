// String Methods

const name = "hitesh";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));
console.log(url.includes("sundar"));

// Numbers and Math

const balance = new Number(100);

console.log(balance.toString().length);

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(
  Math.floor(Math.random() * (max - min + 1)) + min
);

// Dates

let myDate = new Date();

console.log(myDate.toString());

let newDate = new Date();

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());