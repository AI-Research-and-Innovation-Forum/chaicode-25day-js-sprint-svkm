

if(true){
    let a=3
    const b=4
    var c=5 //var is not block scoped,its function scoped hence can be accesed outside {}
}
// console.log(a);
// console.log(b);
console.log(c); 

 //block scope-->if let or const variables are declared inside {}they can only be accessed inside that {}.this scope is called block scope
 //function scope-->if var variable is declared inside a function, it can only be accessed inside that function.this scope is called function scope.

var yash=40
if(true){
    var yash=20
    console.log(`inside: ${yash}`);
    
}
console.log(yash);
