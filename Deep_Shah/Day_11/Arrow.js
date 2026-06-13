const user = {
    username: "Super",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome To Website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Super"
//     console.log(this.username);
    
// }
// chai()

// const chai = function() {
//     let username = "Super"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Super"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) 

const addTwo = (num1, num2) => ({username: "Super"} ) 

                             
console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()