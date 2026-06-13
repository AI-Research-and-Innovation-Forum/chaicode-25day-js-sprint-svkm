// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();


//use demicolon while executing 2 iffes
//()() -iife to avoid pollution of global scope

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('kanishka')

