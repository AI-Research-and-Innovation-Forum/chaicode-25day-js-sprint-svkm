const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);   
}

const prog = ['js' , 'cpp' , 'rb' , 'java']

for (const key in prog) {
    console.log(prog[key]);
}

/*
const map = new Map()
map.set('In' ,'India')
map.set('USA' ,'United State Of America')
map.set('Fr' ,'France')
map.set('In' ,'India')

for (const key in map) {
    console.log(key); 
}
//Not possible
*/

