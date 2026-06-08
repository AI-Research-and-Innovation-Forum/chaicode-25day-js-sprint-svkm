const name = "deep"
const repoCount = 42

//console.log(name + repoCount + " Value");

console.log(`Hello My Name Is ${name} And My Repo Count Is ${repoCount}`);

const gameName = new String('Super-20-com');


// console.log(gameName[0]);
//console.log(gameName[1]); //u
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   super   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.example.com/example%20Super"

console.log(url.replace("%20", "-"))

console.log(url.includes("Super"))
console.log(url.includes("sundar"))

console.log(gameName.split("-"));
