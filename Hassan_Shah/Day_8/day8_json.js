let obj1 = {
    username : " Bohot bada naam hain",
}

// Traditional Access :
console.log(obj1.username);

// Object Destructuring :
let {username} = obj1;
console.log(username)

// Object Destructuring with Aliasing:
let {username : u} = obj1;
console.log(u)

// JSON : Javascript Object Notation
/*
{
"key" : "value"
}
*/