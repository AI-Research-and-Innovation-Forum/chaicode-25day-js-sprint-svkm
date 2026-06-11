// Singleton 


//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Chaitali",
    "full name" : "Chaitali Jadhav",
    [mySym] : "mykey1",
    age : 18,
    location: "Dhule",
    email : "chaitali@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "saturday"]
}
console.log(JsUser.age)  //18
console.log(JsUser["email"])  //chaitali@gmail.com
console.log(JsUser["full name"])  //chaitali jadhav
console.log(JsUser[mySym])  // mykey1
console.log(typeof JsUser.mySym) //string 
//mySym doesn't act as a symbol ,so we put [] to key like this [mySym]

JsUser.email = "Chaitalijadhav@g.com"
// Object.freeze(JsUser)
JsUser.email = "chatgpt@g.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}`);
}

console.log(JsUser.greeting); // [Function (anonymous)]   means function not excute only refference will come
console.log(JsUser.greeting());
console.log(JsUser.greeting2());








