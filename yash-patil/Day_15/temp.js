//for of loop

const arr=[1,2,3,4,5]

// const arr={
//     name:"yash",
//     age:22,
//     city:"mumbai"
// }

// const arr="yashpatil"

for (const i of arr) {
    // console.log(i);
    
}

const maps=new Map()
maps.set("US","United states of america")
maps.set("FR","France")
maps.set("IN","India")

// console.log(maps);
// for(const key of maps){
//     console.log(key);
// }

for(const [key,value] of maps){
    console.log(key ,"->",value);
}
