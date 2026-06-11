const account_id =6774                  //to declare constant
let account_email="yash@yajoo.com"      //to declare variable
var account_pass="2345"                 //not prefered
account_city="Mumbai"                   //not a good practice
let account_state;                      //default it will be undefined

// account_id=23      //change of constant is not allowed
// console.log(account_id);

account_email="yp@google.com"
account_pass="0987"
account_city="kolkata"

// console.log(account_email);
// console.log(account_pass);
// console.log(account_city);

console.table([account_email,account_pass,account_city,account_state])    //to print multiple variables in table format

/*
we prefer not to use var keyword,
bcz of issues in block scope and functional scope
also
declaring variable without any keyword is possible,but its not a good practice.
*/

//if variable declared without its value it will be marked undefined.
