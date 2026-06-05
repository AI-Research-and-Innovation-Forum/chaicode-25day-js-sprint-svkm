// console.log(2 > 1);  //true
// console.log(2 >= 1);  //true
// console.log(2 < 3);   //true
// console.log(2 == 1);  //false
// console.log(2 != 1);  //true

// console.log("2" < 3);  //true
// console.log("02" > 1); //true

// console.log(null > 0);  //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

/* The reason is that an equality check == and comparison check >, <, >=, <= work differently with null.
camparison convert null to a number , treating it as 0 .
That's why (3) null >= 0 is true, but (1) null > 0 is false.
*/

/* we avoid using null and undefined in comparisons,
 because it can lead to confusion and bugs.
*/
// console.log(undefined == 0); 
// console.log(undefined > 0);
// console.log(undefined >= 0); // all false 

// ===

console.log("2" === 2); //false
console.log(true === 1 );  //false
console.log(null == undefined); //true
console.log(null === undefined); //false





 