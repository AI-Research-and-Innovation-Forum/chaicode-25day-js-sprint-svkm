// Redeclaration

var company = "Google";
var company = "Microsoft";

console.log("var redeclared =", company);

// let city = "Mumbai";
// let city = "Pune"; // Error

// const country = "India";
// const country = "USA"; // Error


// Reassignment

var score = 10;
score = 20;

let age = 25;
age = 26;

const pi = 3.14;
// pi = 3.14159; // Error

console.log("score =", score);
console.log("age =", age);
console.log("pi =", pi);


// Block Scope

if (true) {
  var varValue = "I am var";
  let letValue = "I am let";
  const constValue = "I am const";

  console.log(varValue);
  console.log(letValue);
  console.log(constValue);
}

console.log(varValue);

// console.log(letValue);   // Error
// console.log(constValue); // Error


// Function Scope

function demo() {
  var name = "John";
  let role = "Developer";
  const exp = 5;

  console.log(name);
  console.log(role);
  console.log(exp);
}

demo();

// console.log(name); // Error
// console.log(role); // Error
// console.log(exp);  // Error


// var inside block leaks to function scope

function scopeTest() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }

  console.log(x);

  // console.log(y); // Error
  // console.log(z); // Error
}

scopeTest();


// Hoisting

console.log(product); // undefined
var product = "Laptop";

// console.log(category); // Error
let category = "Electronics";

// console.log(type); // Error
const type = "Hardware";


// Function Assignment

var greetVar = function () {
  console.log("greetVar");
};

let greetLet = function () {
  console.log("greetLet");
};

const greetConst = function () {
  console.log("greetConst");
};

greetVar();
greetLet();
greetConst();


// Function Assignment Hoisting

// greetVar2(); // Error: greetVar2 is undefined
var greetVar2 = function () {
  console.log("Hello");
};

// greetLet2(); // Error
let greetLet2 = function () {
  console.log("Hello");
};

// greetConst2(); // Error
const greetConst2 = function () {
  console.log("Hello");
};


// Implicit Global (avoid)

cityName = "Mumbai";

console.log(cityName);

