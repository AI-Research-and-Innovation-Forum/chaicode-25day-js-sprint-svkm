// Array creates the shallow copy :

let ar = [10,20,"Hassan"] //(Heterogenous)

//Explicit Declaration L

let n1 = new Array('Hello!','Hassan');
 
console.log(ar)
console.table([ar[0],ar[1],ar[2]])

ar.push("Added at the end");
console.log(ar)

ar.pop()
console.log(ar)

ar.unshift("Added at the begining!");
console.log(ar)

ar.shift();
console.log(ar)

console.log(ar.includes("Hassan"));
console.log(ar.indexOf(20));
console.log(ar.join()); //Converts into the string!
console.log(ar.includes("Hassan"));

ar.push("100");
ar.push("200");
ar.push("300");

const a1  = ar.slice(1,3);  // Exclusive and doesn't modify the orignal array
console.log(a1)
console.log(ar)


const a2  = ar.splice(1,3); // Inclusive and doesn't modify the orignal array
console.log(a2)
console.log(ar)
