// function one(){
//     const userName="yash"

//     function two(){
//         const website="youtube.com"
//         console.log(userName);
        
//     }
//     // console.log(website);
//     two()
    
// }
// one()


// if(true){
//     const username="yash"
//     if(username==="yash"){
//         const website=" youtube.com"
//         console.log(username+website);
        
//     }
//     // console.log(website);
    
// }
// // console.log(username);

addone(4)  // works bcz of hoisting
function addone(num){
    return num+1
}

//****another method for function******/

addtwo(2)  //hoisting works,but function calling comes under TDZ hence it doesnt get called

const addtwo=function(num){  //variable addtwo holds the function
    return num+2
}

