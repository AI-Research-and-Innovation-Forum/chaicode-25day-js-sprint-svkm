//var c=300
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ",a);
    
} //block scope i.e inside curly braces

console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "kanishka"

    function two(){
        const website = "YouTube"
        console.log(username);

    }
    //console.log(website);//error
    two()    
}

one()

if (true) {
    const username = "kanishka"
    if (username === "kanishka"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

//*******************interesting********************/
console.log(addOne(5));
function addOne(num){
    return num + 1
}

console.log();


addTwo(5)
const addTwo = function(num){
    return num + 2
}

