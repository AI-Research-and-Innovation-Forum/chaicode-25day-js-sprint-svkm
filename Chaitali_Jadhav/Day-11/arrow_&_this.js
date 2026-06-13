
const user = {
    username : "Chaitali",
    price : 999,

    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website `); //this keyword reffers current context 
        console.log(this);
        
    }
}

user.welcomeMsg()
user.username = "Sam"
user.welcomeMsg()

console.log(this); //{} , we are in the node environment , so it refferd empty object

//the global object in the browser  is a window object

function chai(){
    let username = "Chaitali"
    console.log(this.username);  //undefined
    
}

// chai()

const chai = function(){
    let username = "Chaitali"
    console.log(this.username); 
}


const chai = () => {                    //arrow function 
    let username = "Chaitali"
    console.log(this); 
}

// chai()

Explicit return 
const addTwo = (num1 , num2 ) => {
    return num1 + num2
}


//Implicit return 
const addTwo = (num1 , num2 ) =>  num1 + num2
const addTwo = (num1 , num2 ) =>  (num1 + num2)

const addTwo = (num1 , num2 ) =>  ({username: "Chaitali"})   

console.log(addTwo(3,4))

const myArray = [2, 5, 3, 7, 8]

myArray.forEach()