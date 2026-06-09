// Array

const myArr = [0, 1,2,3,4,5]
const myHeros = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0])

//Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(7) //Add at first , shift all elements 
myArr.shift(7)   //remove first element

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))  //3

const newArr = myArr.join()
console.log(myArr)
console.log(newArr) //String 


// slice , splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)          //[ 1, 2 ]
console.log("B ", myArr)   //B  [ 0, 1, 2, 3, 4, 5 ]
/* In slice if start index > end index then return []
*/

const myn2 = myArr.splice(1,3)  
console.log(myn2)                    //[ 1, 2, 3 ]
console.log("C ", myArr) // C  [ 0, 4, 5 ]  manipulate original array
