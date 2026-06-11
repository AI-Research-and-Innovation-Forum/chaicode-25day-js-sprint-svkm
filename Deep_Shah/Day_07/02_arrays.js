const marvelHeroes = ['Iron Man', 'Thor', 'Hulk']
const dc_Heroes = ['Superman', 'Batman', 'Flash']

// marvelHeroes.push(dc_Heroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeros = marvelHeroes.concat(dc_Heroes)
//     console.log(allHeros);

const all_new_heroes = [...marvelHeroes, ...dc_Heroes]

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Super"));
console.log(Array.from("Super"));
console.log(Array.from({name: "super"})); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


