// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Super 20"

let anotherYoutubename = myYoutubename
anotherYoutubename = "chaiaurcode"

console.log(anotherYoutubename);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}


let userTwo = userOne

userTwo.email = "user2@google.com"

console.log(userOne.email);
console.log(userTwo.email);



