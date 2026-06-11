/* Function syntax-->

function functionName(){
    functionDefination
}

*/

function printMyName()
{
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}
// printMyName() 

//printMyName-->function referrence
//()-->execution

function addTwoNumbers(a,b)
{
    return a+b
}
// console.log(addTwoNumbers(2,7))
// const result=addTwoNumbers(2,7)
// console.log("result: ",result);
// console.log(typeof result);


//whatever we are taking input in function defination is called PARAMETER
//whatever we are giving input in function calling is aclled ARGUMENTS

function loginUserNotice(userName="user")
{
    if(userName === undefined){
        console.log("please enter a userName");
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserNotice("Yash"));
console.log(loginUserNotice());

//if no argument is given,the parameter value becomes undefined

//we can give default value to parameter,if there is no argument passed the default parameter value will be used
//syntax--> function fun_name(parameter_name="defaultValue"){}