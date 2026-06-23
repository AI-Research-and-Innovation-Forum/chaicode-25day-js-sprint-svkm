const coding=["js","python","c","java","HTML"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach(  (item) => {console.log(item);
// } )

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding=[
    {
        name:"yash",
        age:13
    },
    {
        name:"jay",
        age:15
    },
    {
        name:"durgesh",
        age:20
    }
]
myCoding.forEach((item)=>{
    console.log(item["name"]);
    console.log(item["age"]);
    
})