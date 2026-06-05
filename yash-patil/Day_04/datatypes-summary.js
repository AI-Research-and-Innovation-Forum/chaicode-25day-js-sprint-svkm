//datatype are divide into two types PRIMITIVE and NON-PRIMITIVE on basis of how data is stored in memory and how it is accesed.

//*****primitive*****call by value
//number,string,boolean,null,undefined,symbol,BigInt

const value=99
const name="yahoo"
const is_loggedin=true
let marker; //undefined
const temp=null

const id=Symbol("123")
const another_id=Symbol("123")

console.log(id==another_id);
console.log(id=="123");


//****non primitive ****call by refrence
//array,object,functions

const heros=["spiderman","ironman","thor","hulk"]

let myobj={
    name:"yash",
    age:45
}

let fun=function(){
    console.log("hello");
}

console.log(typeof fun);
fun()

console.log(myobj);
console.log(typeof myobj);

//JS is dynamically typed lang

//return type
/*
num->num
string->string
boolean->boolean
null->object
undefined->undefined
array->object
object->object
function->function object
 */