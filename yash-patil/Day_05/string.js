// string is denoted by '' or ""
// + operator for concatenation of string

let name="yash"
let repoCount=21
// console.log(name+repoCount+" repos");

//string interpollation(``)

// console.log(`my name is ${name.toUpperCase()}, and my repocount is ${repoCount}.`);

//another method to define string
let i=new String("hello-yash")
// console.log(i,typeof i);

// console.log(i[0]);
// console.log(i.length);
// console.log(i.__proto__);
// console.log(i.toUpperCase());
// console.log(i.charAt(3));
// console.log(i.indexOf("o"))

const newvar =i.substring(0,4)  //slicing
const anothervar =i.slice(-4,8)  //slicing can have negative values
// console.log(newvar);
// console.log(anothervar);

const str1="  yash   "
// console.log(str1);
// console.log(str1.trim());  //removes spaces from front and rear
// console.log(str1.trimStart());  //removes spaces from front 
// console.log(str1.trimEnd());  //removes spaces from rear

let str2="https://google.com/alpha%20romeo"
console.log(str2.replace("%20","-"));
console.log(str2.includes("alpha"));


console.log(i.split("-"));//breaks and converts into array based on seperator









