// Singleton
// object.create

// Object literals

const mySym = Symbol("");

const jsuser = {
    name : "Pranav",
    "surname" : "Patil",
    [mySym] : "Key1", // [] are important if not given it will read as a string not a Symbol
    age : 22,
    location : "India",
    email : "patilpranav@gmail.com",
    isLoggedIn : false,
    lastlogindays : ["Monday", "Tuesday", "Wednesday"]
}

console.log(jsuser.email); // Dot notation
console.log(jsuser["email"]); // Bracket notation
console.log(jsuser["surname"]); // no other way to access surname because of the space in the key name 
console.log(jsuser[mySym]);

jsuser.email = "newemail@gmail.com"
// Object.freeze(jsuser); // This will prevent any changes to the object
jsuser.email = "Changed@gmail.com" // will not change 
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsuser.greeting); // [Function (anonymous)]
console.log(jsuser.greeting()); // Hello JS user
console.log(jsuser.greetingtwo());



// const nuser = new Object{} // Same as next line
const nuser = {}

nuser.id = "123abc"
nuser.name = "Pranav"
nuser.isLoggedIn = false

console.log(nuser);
console.log(Object.keys(nuser));
console.log(Object.values(nuser));

console.log(Object.entries(nuser));

console.log(nuser.hasOwnProperty('isLoggedIn'));


const ruser = {
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Pranav",
            lastname : "Patil"
        }
    }
}
console.log(ruser.fullname);
console.log(ruser.fullname.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2) // will not use this mostly
const obj3 = {...obj1,...obj2}
console.log(obj3);




