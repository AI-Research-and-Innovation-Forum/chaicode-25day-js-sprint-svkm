// `` Methods to print variables more easily :

let v1 = "Hassan";
console.log(`v1  has the value ${v1}`);

// To declare the string explicitly as an object :

let s1 = new String('  Hellowww!  ');
console.log(s1,typeof(s1));

// To see all the methods in console : str.__proto__

s1;
console.log(s1.length);
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());
console.log(s1.trim());


let s2 = new String('Hassan-Shah');
console.log(s2[0]);
console.log(s2.split('-'));
console.log(s2.charAt('S'));
console.log(s2.indexOf('n'));
console.log(s2.slice(0,6));
