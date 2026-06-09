let a = 300 // Global variable
let d = 5;


if (true) { // Starts block scope
    let a = 10 // Local block-scoped variable
    const b = 20 // Local block-scoped constant
    var c = 30 // 'var' leaks to global scope
    d=8888
    console.log("INNER: a ", a); // Logs local 'a' (10)
    console.log("INNER: d", d); // Logs local 'd' (888)
} // Ends block scope

console.log(a); // Logs global 'a' (300)
console.log(d); // 888
// console.log(b); // ReferenceError: 'b' is strictly local
console.log(c); // Logs 'c' (30) due to var leak