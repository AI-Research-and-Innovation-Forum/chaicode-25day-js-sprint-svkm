const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","flash","batman"]

// marvelHeros.push(dcHeros)//last element will be dcheros
// console.log(marvelHeros);
// console.log(marvelHeros[3][0]);
// console.log(marvelHeros[3][1]);

// const newarray=marvelHeros.concat(dcHeros)
// console.log(newarray);

// const newarray=[...marvelHeros,...dcHeros]//preferd cause multiple arrays can be concatinated
// console.log(newarray);

// const arr=[1,2,3,[4,5,6],7,[6,7,[8,9]]]
// const realarr=arr.flat(Infinity)//spread out subarray elements into single array

// console.log(realarr);

console.log(Array.isArray("Yash"));//checks if its array
console.log(Array.from("Yash"));//converts given into array

console.log(Array.from({name:"yash"}));//Interesting stuff(gotta specify if want array of keys or values)

let val1=100
let val2=200
let val3=300
console.log(Array.of(val1,val2,val3));//Returns a new array from a set of elements


