let n1 = 10;
console.log(n1);
console.log(typeof n1);
console.log(typeof n1);

let s1 = "143";
console.log(s1);
console.log(typeof s1);

let converted_s1 = Number(s1);
console.log(converted_s1);
console.log(typeof converted_s1);

let s2 = "143str";
console.log(s2);
console.log(typeof s2);

let converted_s2 = Number(s2);
console.log(converted_s2); //Will contain NaN but type will be Number
console.log(typeof converted_s2);

console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number(false)); //0
console.log(Number(true)); //1



// They will be become the string completely like null will become normal string "null"

console.log(String(124));
console.log(String(null)); 
console.log(String(undefined)); 
console.log(String(false)); 
console.log(String(true));



y = String(null)
y = y+"hs"
console.log(y);