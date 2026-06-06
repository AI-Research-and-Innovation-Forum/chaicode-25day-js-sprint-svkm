const a1 = [5,10,20];
const a2 = [50,150,250];


a1.push(a2);
console.log(a1);
console.log(a1[3][2]); // Array Nesting!

a1.pop();

const anew = a1.concat(a2); // Merge Arrays!
console.log(anew);

const anew2 = [...a1,...a2]; //Spread Operator!
console.log(anew2);

const n1 = [[1,[2,3]],50,150,250];
console.log(n1);
console.log(n1.flat());
console.log(n1.flat(Infinity));

console.log(Array.isArray("Hassan"));
console.log(Array.isArray({key :"d"})); // Returns false

console.log(Array.from("Hassan"));
console.log(Array.from({key :"d"})); // Returns false


let v1=10,v2=60,v3=50; 
console.log(Array.of(v1,v2,v3));