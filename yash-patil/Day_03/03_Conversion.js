// let score =33
let score="33"

// console.log(typeof(score));
// console.log(typeof score);

// let score_in_number=Number(score)
// console.log(typeof score_in_number);

let score2="yash"
let score2_in_num=Number(score2)
console.log(typeof score2_in_num);
console.log(score2_in_num);
console.log(typeof score2_in_num);

//string will convert into number but its value will be NaN
//alphanumeric string will convert into number but its value will be NaN
//null gets converted and value becomes 0
//undefined gets converted and value becomes NaN
//boolean gets converted and true becomes 1 and false becomes 0

//"69"->69
//"69abc"->NaN
//"abc"->NaN
//"true"->1
//"false"->0
//"null"->0
//"undefined"->NaN


let is_loggedin=undefined

let boolean_loggedin=Boolean(is_loggedin)

console.log(typeof boolean_loggedin);
console.log(boolean_loggedin);

// null->false
//undefined->false
//non-zero number->true; zero->false
//string->true; empty string->false


let some=false

let string_some=String(some)

console.log(typeof string_some);
console.log(string_some);

//23->"23"
//null->null datatype string
//undefined->undefined datatype string
//true->true ;fale->false datatype string