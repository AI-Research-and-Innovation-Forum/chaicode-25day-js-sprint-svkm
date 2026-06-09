const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];
const names = ['Ash', 'Misty', 'Brock'];
// // Accessing elements
// console.log(pokemon[0]); // Output: Bulbasaur
// console.log(pokemon[1]); // Output: Charmander
// console.log(pokemon[2]); // Output: Squirtle
// // Modifying elements
// pokemon[1] = 'Pikachu';
// console.log(pokemon); // Output: ['Bulbasaur', 'Pikachu', 'Squirtle']

// // Adding elements
// pokemon.push('Eevee');
// console.log(pokemon); // Output: ['Bulbasaur', 'Pikachu', 'Squirtle', 'Eevee']

// // Removing elements
// pokemon.pop();
// console.log(pokemon); // Output: ['Bulbasaur', 'Pikachu', 'Squirtle']   

// Length of the array
console.log(pokemon.length); // Output: 3

//push method adds an element at the end of the array and returns the new length of the array
const newLength = pokemon.push(names);
console.log(pokemon); // Output: ['Bulbasaur', 'Pikachu', 'Squirtle', ['Ash', 'Misty', 'Brock']]
console.log(newLength); // Output: 4

//concat method is used to merge two or more arrays and it returns a new array without modifying the original arrays

//spread: it is used to spread the elements of an array into individual elements

const allmembers = [...pokemon, ...names]
console.log(allmembers); // Output: ['Bulbasaur', 'Pikachu', 'Squirtle', 'Ash', 'Misty', 'Brock']


let anotherArr = [1, 2, 3, 4,[5,6,7,8], 5,[9,10,11,12,[13,14,15,16]]]

let newAnotherArr = anotherArr.flat(3) // it will flatten the array based on the depth provided in the flat method and it will return a new array
console.log(newAnotherArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 10, 11, 12, 13, 14, 15, 16]

console.log(Array.isArray("prem")); // Output: false

console.log(Array.from("prem")); // Output: ['p', 'r', 'e', 'm']
//it converts a string into an array of characters
console.log(Array.from({name: "prem"})); // it will give an empty array because the object provided in the Array.from method does not have a length property
//[]


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)); // it will create a new array with the provided elements and it will return the new array
// Output: [100, 200, 300]