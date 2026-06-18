const user = {
    username: "Pranav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);

    }
}
// user.welcomeMessage() // Pranav, Welcome to Website

// user.username = "Max"
// user.welcomeMessage() // Max, Welcome to Website

// console.log(this);


// function chai(){
//     let username = "Pranav"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "Pranav"
//     console.log(this.username);
// }
// chai()


const chai = () => {
    let username = "Pranav"
    console.log(this.username);
}
// chai()


// const addtwo = (n1,n2) => {
//     return n1 + n2
// }

const addtwo = (n1,n2) => n1 + n2   // Implicit return no need of brackets and return

const addtwo = (n1,n2) => (n1 + n2) // Explicit return  

console.log(addtwo(2,3));
