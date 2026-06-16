const coding = ["js" , "rubi " ,"java" , "python" , "cpp"]

coding.forEach(function(item) {
    console.log(item);
    
});           
// in forEach we have to provide callback function.

coding.forEach( (val) => {
    console.log(val);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item , index , arr) => {
    console.log(item , index , arr);
}) 


const myCoding = [
    {
        langName : "javascript" ,
        langFileName : "js"
    },
    {
        langName : "java" ,
        langFileName : "java"
    },
    {
        langName : "python" ,
        langFileName : "py"
    }
    
]


myCoding.forEach((item) => {

    console.log(item.langName);
    
})