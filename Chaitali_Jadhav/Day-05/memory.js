// Stack (Primitive), Heap (non-primitive)


//------Stack-------

let myName = "ChaitaliJadhav"; // stored in stack

let anotherName = myName;
anotherName = "Chaitali";

console.log(myName);       // ChaitaliJadhav
console.log(anotherName);  // Chaitali


//------Heap----------


let userone = {
    email: "user@google.com",
    upi : "user@ybl"
}
// this object is stored in heap and reference of this object is stored in stack

let usertwo = userone; 

usertwo.email = "Chaitali@gmail.com"
console.log(userone.email); 
console.log(usertwo.email); // both will print "Chaitali@gmail.com"