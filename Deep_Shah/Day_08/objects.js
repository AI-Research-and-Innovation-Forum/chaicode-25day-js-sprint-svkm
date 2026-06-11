// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Super",
  "full name": "Super User",
  [mySym]: "myKey1",
  age: 30,
  location: "Jaipur",
  email: "super@example.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "super@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "super@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
  console.log("Hello, " + this.name);
}

JsUser.greetingTwo = function() {
  console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

