const user ={
    username: "kanishka",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website `);
    //    console.log(this);
         
    }
}


// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this);
        
// function chai() {
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "kanishka"
//     console.log(this.username);
    
// }

// const chai =() => {
//     let username = "kanishka"
//     console.log(this);
    
// }

// chai()


//arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) =>(num1 + num2)

const addTwo = (num1, num2) =>({username:"kanishka"})

console.log(addTwo(3,4));


const myArray = [2, 4, 5, 6, 8]

// myArray.forEach()
