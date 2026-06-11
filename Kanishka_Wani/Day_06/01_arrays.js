//Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros=["shaktiman", "naagraj", "Bheem"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);
console.log(myHeros[0])

//Array Methods

myArr.push(6) //adds value in array
myArr.push(7)

myArr.pop()//removes last element of array

myArr.unshift(9)//insert element at start but time consuming when many values in array

myArr.shift()//removes start element

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr= myArr.join()

console.log(newArr)
console.log(typeof newArr)
console.log(myArr)
console.log(typeof myArr)

//slice, splice

console.log("A", myArr)

const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);
