const sports = ["cricket" , "badminton" , "hollyball" ]
const people = ["rohit" , "smriti" , "harmanprit" ]

sports.push(people)
console.log(sports) //people array is a single element here
console.log(sports[3]) 


const newS = sports.concat(people)
console.log(newS)

const newArr = [...sports, ...people]
console.log(newArr)

const another_array = [1,2,3,[4,5,6] ,7, [6 , 7, [4,5]]]

const real_another_arr = another_array.flat(Infinity)
console.log(real_another_arr)  //[  1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]
 
console.log(Array.isArray("Chaitali"))
console.log(Array.from("Chaitali")) //convert into array
console.log(Array.from({name : "Chaitali"}))  //print [] array (don't understand what take key or value)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));





