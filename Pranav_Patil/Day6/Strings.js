const name = "Pranav"
console.log(name);

console.log(name[0]);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(4));
console.log(name.indexOf('a'));

const newName = new String("Patil")
console.log(newName);

console.log(`My name is ${name} ${newName}`);

const newstring = name.substring(0, 3);
console.log(newstring);

const raw = name.slice(1, -2);
console.log(raw);

const myName = "   Pranav-Patil   "
console.log(myName);
console.log(myName.trim());

const url = "https://www.youtube.com/watch?v=abc123"

console.log(url.replace("youtube", "vimeo"));

console.log(url.includes('Pranav'));
console.log(url.includes('com'));

console.log(myName.split('-'));
