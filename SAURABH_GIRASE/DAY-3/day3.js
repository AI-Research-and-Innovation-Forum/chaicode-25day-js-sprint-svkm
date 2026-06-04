let A = 10

let stringNumber = String(A)
console.log(stringNumber); // "10"
console.log(typeof stringNumber); // string

let numberString = Number(stringNumber)
console.log(numberString); // 10
console.log(typeof numberString); // number


let value = 3
let negValue = -value
console.log(negValue); // -3

console.log(2+2);// 4
console.log(2-2);// 0
console.log(2*2);// 4
console.log(2**3);// 8
console.log(2/3);// 0.6666666666666666
console.log(2%3);// 2

let str1 = "hello"
let str2 = " Viru "

let str3 = str1 + str2
console.log(str3); // "hello Viru "

console.log("1" + 2);// "12"
console.log(1 + "2");// "12"
console.log("1" + 2 + 2);// "122"
console.log(1 + 2 + "2");// "32"

console.log( (3 + 4) * 5 % 3); 
// 7 * 5 % 3
// 35 % 3
// 2

console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // num1 = num2 = 4
console.log(num1, num2, num3); // 4 4 4

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // 101



console.log(2 > 1); // true
console.log(2 >= 1);// true
console.log(2 < 1);// false
console.log(2 <= 1);// false
console.log(2 == 1);// false
console.log(2 != 1);// true


console.log("2" > 1);// true, "2" is converted to number 2 before comparison
console.log("02" > 1);// true, "02" is converted to number 2 before comparison


console.log(null > 0);// false
console.log(null == 0);// false
console.log(null >= 0);// true

console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);// false


console.log("2" === 2); // false, because === checks for both value and type


