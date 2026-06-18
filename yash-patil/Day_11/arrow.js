//this keyword refers to current context
//in nodeJS, global this return {} empty object
//in browser, global this returns window object
//in implicit return arrow function,we require return keyword and {}
//ex: 
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
//in implicit return arrow function, we dont need to write return keyword and {} 
//ex:
// const addtwo=(num1,num2)=>num1+num2
// OR
// const addtwo=(num1,num2)=>(num1+num2)


// const username="hitesh"
// const user={
//     username:"yash",
//     price:499,
//     welcomenotice:function(){
//         console.log(`${this.username} , welcome to website`);
//         // console.log(this);
        
//     }
// }
// user.welcomenotice()
// user.username="jay"
// user.welcomenotice()
// console.log(this);//here in nodeJS, global object is empty object
// in browser, global object is window object

// function chai(){
//     const username="yash"
//     console.log(this.username);
    
// }
// chai()

// const chai=() => {
//     const username="yash"
//     console.log(this);
    
// }
// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

// const addtwo=(num1,num2)=>num1+num2

// const addtwo=(num1,num2)=>(num1+num2)

// const addtwo=(num1,num2)=>({username:"yash"})

// console.log(addtwo(3,4))