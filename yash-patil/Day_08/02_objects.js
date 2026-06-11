// const hingeUser={}
const hingeUser=new Object()

hingeUser["id"]="abc123"
hingeUser["name"]="stanny"
hingeUser["isLoggedIn"]=false

// console.log(hingeUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{          //nested object in object
        userfullname:{
            firstname:"hitesh",
            lastname:"pawte"
        }
    }
}
// console.log(regularUser["fullname"]["userfullname"]["lastname"]);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign(obj1,obj2) //here obj1 is target,obj2 is copied into obj1,obj1 modified
// const obj3=Object.assign({},obj1,obj2) //here {}is target ,obj1&obj2 are copied into new object

const obj3={...obj1,...obj2}//mostly used

// console.log(obj3);

const users=[
    {
        id:"1",
        "name":"jay"
    },
    {
        id:"2",
        "name":"kishor"
    },
    {
        id:"3",
        "name":"jitendra"
    }
]
// console.log(users[1]["id"]);
// console.log(users[1]["name"]);
// console.log(users[1].id);
// console.log(users[1].name);

// console.log(Object.keys(hingeUser));//gives array of keys in given obj
// console.log(Object.values(hingeUser));//gives array of values in given obj
// console.log(Object.entries(hingeUser));//gives array of array of key:value pairs

// console.log(hingeUser.hasOwnProperty("isLoggedIn"));//Determines whether an object has a property with the specified name



