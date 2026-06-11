console.log("heyyaaa");


const accountId = 67676;
let accountEmail = "prem@google.com"
var accountPassword = "000000"
accountCity = "nashik"
let accountState;

// accountId = 2 // not allowed


accountEmail = "pm@pm.com"
accountPassword = "123456"
accountCity = "dhule"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])