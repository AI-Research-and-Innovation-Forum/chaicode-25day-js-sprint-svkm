//stack => primitive  //it stored the copy of the value
//heap => non primitive  // it stored the reference of the value(original value)


let MyName="prem"
let anotherName=MyName

console.log(MyName);
console.log(anotherName);
// here both the value are same but they are stored in different memory location

MyName="zoro"
console.log(MyName);
console.log(anotherName);
// here we change the value of MyName but it does not affect the anotherName because they are stored in different memory location

obj1={
    name:"prem",
    age:20
}
let obj2=obj1

console.log(obj1);
console.log(obj2);
// here both the value are same and they are stored in same memory location 
