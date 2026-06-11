//singleton non-singleton


const mysym=Symbol("key1")//declaration of symbol
//object literal
const jsuser={
    name:"jay",
    [mysym]:"sym1", //taking symbol as key -> ([sym_name])
    "full name":"jay sanjay pawar",
    age:19,
    location:"nashik",
    email:"yash@google.com",
    isloggedin:false,
    lastlogindays:["monday","friday","sunday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);

// console.log(jsuser.full name);
// console.log(jsuser["name"]);

// console.log(jsuser["full name"]);  //-->preferred way
// console.log(jsuser[mysym]); 

// jsuser.email="jay@google.com"
// jsuser["email"]="jay@google.com"
// console.log(jsuser["email"]);

// Object.freeze(jsuser)//further changes in jsuser object cant be done

// jsuser["email"]="vinay@google.com"
// console.log(jsuser);


jsuser["greetings"]=function(){
    console.log("Hello, user");
    
}
jsuser["greetings2"]=function(){
    console.log(`Hello user, ${this.name}`);//used this keyword to access value of a key in same object
    
}
// console.log(jsuser.greetings);//gives function referrence
console.log(jsuser.greetings());
console.log(jsuser.greetings2());







