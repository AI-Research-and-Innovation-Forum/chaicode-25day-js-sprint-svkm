// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ['Superman', 'Batman']

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6) // adds 6 at the end of the array
// myArr.push(7) // adds 7 at the end of the array
// myArr.pop() // removes the last element of the array

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


