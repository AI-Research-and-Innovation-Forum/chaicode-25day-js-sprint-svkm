//Immediate execution function expression(IIFE)

//IIFE execute immediatly
//a file can have hundreads of varibles if declraed as global variable,they could get overwritten further in code or can accidently get modified, to prevent this we can use normal functions and declare variables in it, but then function itself is global and can get overwritten in further code to prevent all this we use IIFE.
//in IIFE no need of function name.

//syntax--> (function defination)(parameter if needed)
const global_var="apple";

(function chai(name){
    console.log("DB connected");
    console.log(name);
    console.log(global_var); //can access global variables in it.
    
}

)("yash");//good practice to have ; after IIFE

((name)=>{
    console.log(global_var);
    console.log(name);
    
})("jay");


