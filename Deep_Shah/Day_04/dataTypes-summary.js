// Primitive
  // 1. Number
  // 2. String
  // 3. Boolean
  // 4. Null
  // 5. Undefined
  // 6. Symbol (ES6)
  // 7. BigInt (ES11)

  const score = 100
  const scoreValue = 100.3

  const isLoggedIn = false
  const outsideTemp = null
  let userEmail;

  const id  = Symbol("123")
  const anotherId = Symbol("123")

  console.log(id === anotherId);

//   const bigNumber = 1234567890123456789012345678901234567890n;
  

// Reference Types(Non Primitive)
  // 1. Object
  // 2. Array
  // 3. Function

const heros = ["Shaktiman", "Bheem", "Doremon"]
let myObj ={
    name: "Deep",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);
