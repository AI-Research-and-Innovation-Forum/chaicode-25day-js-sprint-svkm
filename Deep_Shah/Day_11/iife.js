// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);  
})(); // First () For Function Like Chai And 
// Second () For () After Function [Chai] We Used [i.e Chai()]

( (name) => {
    // Unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('Super')