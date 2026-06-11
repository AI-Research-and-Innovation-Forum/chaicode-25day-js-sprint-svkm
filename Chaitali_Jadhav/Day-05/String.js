const name = "Chaitali"
const repoCount = 50

console.log(name + repoCount + " Value"); //not recommended to use + operator


//backticks (``)

console.log(`Hello my name is ${name} and My repo Count is ${repoCount}`); //String interpolation

// Another way to create string using object
const StringName = new String("ABC-D");
/*
0:A
1:B
2:C
3:D
length:4
[[Prototype]]:String
*/

console.log(StringName[0]);  //A
console.log(StringName.__proto__);   //{}

console.log(StringName.length);  //4
console.log(StringName.toLowerCase());  //abcd
console.log(StringName.charAt(2));  //C
console.log(StringName.indexOf('B'));  //1

const newString = StringName.substring(0,4); //In subString we cannot provide negative Values ..
console.log(newString);  //ABC-

const anotherString = StringName.slice(0,3);
console.log(anotherString); //ABC
console.log(StringName.slice(-4 ,-1));  //BC-

const newString1 = "   Chaitali   ";
console.log(newString1);         //   Chaitali
console.log(newString1.trim());  //Chaitali

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20" , "-")); //https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh')) //true

console.log(StringName.split('-')) //[ 'ABC', 'D' ]

// console.log(StringName.at(2)) //C
console.log(StringName.charCodeAt(2)) // 67 return ASCII value 
console.log(StringName.codePointAt(2)) //67

const str = "Jadhav"
console.log(StringName.concat(str));



