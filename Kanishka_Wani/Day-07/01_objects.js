
//object literals

const mySym= Symbol("key1")

const JsUSer = {
    name:"kanishka",
    "full name": "kanishka wani",// not able to access using . operator instead user square notaitons
    [mySym]: "mykey1",
    age : 20,
    location : "Dhule",
    email: "kdw@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "thursday"]
}

console.log(JsUSer.email)
console.log(JsUSer["email"]);

console.log(JsUSer["full name"]);
console.log(JsUSer [mySym]);

JsUSer.email = "kanishka@gmail.com"
// Object.freeze(JsUSer)

JsUSer.email = "kanishka@microsoft.com"
console.log(JsUSer);

JsUSer.greeting = function(){
    console.log("Hello JS USer");
    
}

JsUSer.greetingTwo = function(){
    console.log(`Hello JS USer, ${this.name}`);
    
}

console.log(JsUSer.greetingTwo());
console.log(JsUSer.greeting());
