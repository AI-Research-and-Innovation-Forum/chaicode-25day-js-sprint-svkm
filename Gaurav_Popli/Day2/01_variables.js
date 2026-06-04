const accountId=12345
/*Variables in JS can be defined in 2 ways using let and var problem with var was that it did not have any control over scope of its variable like if you write name="Gaurav" and then afterwards in same file below or in any other file if u write name ="XYZ" then wherever the variable "name" is defined it will be changed everywhere.SO in modern JS the variable is always defined using "let" keyword.*/
let accountEmail="gauravpopli70@gmail.com" //declaring variable
var accountPassword="2626"//declaring variable
accountCity="Dhule" //declaring a variable without a keyword but a very bad practice always declare a variable using a keyword "let"
let accountState;// since no value assingned therefore JS considers it as undefined
// accountId=5  //not allowed to change since it is declared with "const" keyword 

/*
prefer not to use var because of issue in block scope and functional scope
*/
accountEmail="abc@a.com"
accountPassword="345"
accountCity="Pune"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
