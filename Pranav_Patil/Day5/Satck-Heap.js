// Stack(Primitive) and Heap(Reference)

// Stack => Primitive data types are stored in stack memory. It is used to store simple data types like numbers, strings, booleans, null, undefined, symbol, bigint. It is faster than heap memory because it is used to store simple data types and it is stored in a contiguous block of memory.

// Heap => Reference data types are stored in heap memory. It is used to store complex data types like arrays, objects, functions. It is slower than stack memory because it is used to store complex data types and it is stored in a non-contiguous block of memory.

let myName = "Pranav"   
let anotherName = myName
anotherName = "Patil"

console.log(myName);
console.log(anotherName);


let userOne = {
    name: "Pranav",
    age: 22,
}

let userTwo = userOne
userTwo.name = "Patil"

console.log(userOne);
console.log(userTwo);