// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB Connected`);
// }
// chai()

(function chai(){
    console.log(`DB Connected`);
})();
// same as previous and need a ; to end the code

(() => {
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB Connected ${name}`);
} )("Pranav")