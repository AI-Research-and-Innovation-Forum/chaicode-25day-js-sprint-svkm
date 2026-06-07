const name = "Kanishka"
const repoCount = 15

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String("Kanishka-dw-com")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

const newString=gameName.substring(0,5);
console.log(newString);

const anotherString= gameName.slice(-8, 4);
console.log(anotherString);


const newString1 = "   Kanishka   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://kdw.com/kanishka%20wani"
console.log(url.replace('%20', '-'));

console.log(url.includes('priya'));

console.log(gameName.split('-'));

console.log(gameName.anchor('kanishka'));//creates an anchor element with the name "kanishka" and returns the HTML string representation of it.
 
console.log(gameName.bold());//returns the string wrapped in <b> tags, making it bold when rendered in HTML.

console.log(gameName.at(2));// returns character at index 2

console.log(gameName.charCodeAt(2));// returns the Unicode value of the character at index 2

console.log(gameName.codePointAt(2));// returns the Unicode code point value of the character at index 2

console.log(gameName.concat(" is a developer"));// concatenates the string with another string and returns the result

console.log(gameName.endsWith("com"));// returns true if the string ends with the specified substring, false otherwise

console.log(gameName.startsWith("Kani"));// returns true if the string starts with the specified substring, false otherwise

console.log(gameName.padEnd(20, "*"));// pads the string with the specified character until it reaches the specified length

console.log(gameName.padStart(20, "*"));// pads the string with the specified character at the beginning until it reaches the specified length

console.log(gameName.repeat(3));// returns a new string that repeats the original string a specified number of times

console.log(gameName.localeCompare("kanishka"));// compares the string with another string in a locale-sensitive manner and returns a number indicating their relative order

console.log(gameName.search("dw"));// returns the index of the first occurrence of the specified substring, or -1 if not found
