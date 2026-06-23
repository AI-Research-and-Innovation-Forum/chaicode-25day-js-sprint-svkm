const myObject={
    js:"javascript",
    rb:"ruby",
    cpp:"c++",
    swift:"swift by apple"
}
for(const key in myObject)
{
    // console.log(`${key} for ${myObject[key]}`);
    // console.log(myObject.key); //undefined
    
}

const arr=[2,45345,534,65462,32]
for(const i in arr){
    console.log(i);
    
}
const str="yash"
for (const i in str){
    console.log(str[i]);
    
}