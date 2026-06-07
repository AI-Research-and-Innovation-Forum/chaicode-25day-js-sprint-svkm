// Objects can only be string or symbols :

// Defining a Symbol :

const symbl = Symbol("symbol");

// Creating an object using object literals (non-singleton object)
const obj1 = {
    key : "value",
    properties : "data",
    methods : "functions",
    "with spaces" : "use the dot operator",
    [symbl] : "used to store a symbol",
    bool : true,
    arr : ["10","20","30"],
    greeet : function(){
        console.log("Hello World!");
    }
}
console.log(obj1);


// Access :

//1. Using the dot :
console.log(obj1.key);

//2. Using he brrackets (Necessary for keys with spaces)
console.log(obj1["with spaces"]); 
console.log(obj1[symbl]);

// Modifying the objects :

obj1.newkey = "New key added";
console.log(obj1);

// Freeze the object : So no modifications will be reflected ;
/*
Object.freeze(obj1);
*/

obj1.greeet()

obj1.greetingtwo = function(){
    console.log(`Use this to refer to the current object : ${this.arr}`)
}

obj1.greetingtwo();
console.log(obj1.greetingtwo);
