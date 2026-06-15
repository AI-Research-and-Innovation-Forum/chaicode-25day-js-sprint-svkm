// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner:", a);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username ="Super"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "super"
    if(username === "super") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

// ++++++++++++++++++++++ Intersting +++++++++++++++++++++++++

function addone(num){
    return num + 1
}

console.log(addone(5))



addTwo(5)
const addTwo = function(num){
    return num + 2
}

