// array

const myArr = [100, 200, 300, 400, 500]
const myHeors = ["walter white", "jesse pinkman", "gus fring", "saul goodman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

myArr.push(600) // it will add the element at the end of the array
console.log(myArr);// [100, 200, 300, 400, 500, 600]

myArr.pop() // it will remove the last element from the array
console.log(myArr);// [100, 200, 300, 400, 500]

myArr.unshift(50) // it will add the element at the beginning of the array
console.log(myArr);// [50, 100, 200, 300, 400, 500]

myArr.shift() // it will remove the first element from the array
console.log(myArr);// [100, 200, 300, 400, 500]

console.log(myArr.includes(100));// true
console.log(myArr.includes(600));// false
console.log(myArr.indexOf(300));// 2
console.log(myArr.indexOf(900));// -1 // if the element is not found in the array then it will return -1

const newArr=myArr.join()
console.log(newArr);// it will convert the array into string and it will join the elements with comma by default
// 100,200,300,400,500
const newArr2=myArr.join('-')
console.log(newArr2);// it will convert the array into string and it will join the elements with '-' separator
// 100-200-300-400-500


//-------------------------------------------------------------------------------\\


// slice and splice

const myArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newArr3 = myArr3.slice(2, 5) // it will return a new array from the original array based on the start and end index provided in the slice method
console.log(newArr3);

const newArr4 = myArr3.splice(2, 3) // it will remove the elements from the original array based on the start index and number of elements to be removed provided in the splice method and it will return the removed elements in a new array
console.log(newArr4);
console.log(myArr3); // it will return the original array after removing the elements based on the splice method