// Named IIFE : (Immediately Invoked Function Expression)
//Used to prevent global pollution

(function hello(){
    console.log("Hello World!");
})(); // USe semicolon

// Arrow
( (par)=>{
    console.log(par);
})("Hi"); // USe semicolon