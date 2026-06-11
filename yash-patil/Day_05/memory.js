//stack-primitive, heap-non-primitive

/*in stack memory we are given copy of data,if we have a var1 and var2 if we assign value of
var1 to var2,var2 will be assigned by copy of data in var1.
so var1 and var2 are independent of eachother.
*/

/* in non-primitive datatypes the data in those variables are stored in heap memory,if we have variable 
var1(non primitive) the acual data will be stored in heap memory and var1 will contain the refrence to that memory location,now if we assign var2 by var1, the var1 will contain refrence to that same memory location,
now if we change value of var1,as var1 and var2 points to same memory location,value of var2 will also change.
*/


//*****stack********** */

let name="yash"
let name2=name
console.log(name2);

name2="jay"
console.log(name);
console.log(name2);

/*****heap********* */

let user1={
    name:"yash",
    age:19,
}
let user2=user1
console.log(user2);
user1.name="jay"
user2.age=20
console.log(user1);
console.log(user2);


















// let arr=[23,45,67]

// let val=arr[0]
// val=0
// console.log(val)
// console.log(arr)