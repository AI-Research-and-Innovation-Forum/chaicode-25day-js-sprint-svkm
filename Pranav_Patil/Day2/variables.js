const accountID = 123456789;
let accountBalance = 1000.50;
var accountHolderName = "Pranav Patil";
let accountState;// This variable is declared but not initialized, so it will have the value undefined

/*
Don't use var because it has function scope and 
can lead to unexpected behavior. It's better to use let or const for block scope.
*/

accountCity = "Pune"; // This will create a global variable

// accountID = 987654321; // This will cause an error because accountID is a constant

accountBalance = 200000.00;
accountHolderName = "Pranav";
accountCity = "Chatrapati SambhajiNagar";


console.log(accountID);

console.table({ accountID, accountBalance, accountHolderName, accountCity, accountState });