// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(greet); 
}

//Maps
// contain unique keys 

const map = new Map()
map.set('In' ,'India')
map.set('USA' ,'United State Of America')
map.set('Fr' ,'France')
map.set('In' ,'India')

console.log(map);

for (const [key , value] of map) {
    console.log(key , ':-' , value);
   
}

const myObj = {
    Game1 : 'NFS',
    Game2 : 'spiderman'
}

// for (const [key , vlaue] of myObj) {
//    console.log(key , ':-' , value);      // not itreable 
// }