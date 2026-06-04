const accountId = 144890
let accountEmail= "kdw@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

//accountId =2 // node will not allow to change the value of accountId as it is declared using const

accountEmail = "kanishka@gmail.com"
accountPassword = "67890"
accountCity = "Mumbai"

console.log(accountId);

/*prefer not to use var keyword to declare variables
 as it causes block scope and functional scope issues.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
