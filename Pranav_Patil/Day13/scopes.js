var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // a is not defined
// console.log(b);  // b is not defined
// console.log(c); // 30


function one(){
    const username =  "Pranav"

    function two(){
        const website = "yt"
        console.log(username);
    }
    // console.log(website);

    // two()
    
}

// one()

if(true){
    const username = "Pranav"
    if(username === "Pranav"){
        const website = " YT"
        console.log(username + website);
    }
    // console.log(website); // Error out of Scope
}
// console.log(username); // Error out of Scope



// ++++++++++++++++++ interesting ++++++++++++

console.log(addone(5));// Function call before declaration is allowed 

function addone(num){
    return num + 1
}


addTwo(5) // Function call before declaration in this way is not allowed it will give ERROR

const addTwo = function(num){
    return num + 2
}