

// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner : " , a);
    
}
   
console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Chaitali"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);   
    two()
}

// one()

if(true){
    const username = "Chaitali"
    if(username === "Chaitali"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

//+++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++


console.log(addone(10))    // in this case you can access 
function addone(num){
    return num + 1;
}

//++++++++ Hoisting +++++++++

addTwo(10)    
const addTwo = function(num){    //we hold into a variable so can't access 
    return num + 2
}


