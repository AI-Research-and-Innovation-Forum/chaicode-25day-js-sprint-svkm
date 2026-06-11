const accountId = 145159;
let accountEmail = "user@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId = 2 // Not Allowed

accountEmail = "wc@wc.com"
accountPassword = "1121121"
accountCity = "Delhi"
let accountState = "Maharashtra";

console.log(accountId);

/*
Prefer Not To Use Var
Because Of Issue In Block Scope And Functional Scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])