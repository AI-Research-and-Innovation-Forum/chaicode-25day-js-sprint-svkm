// for(variable_initialization,condition_check,increment/decrement){}


// const array=[54,24,98,23,14,65,74,1]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element==14)
//     {
//         console.log("14 is kinda good number");
        
//     }
//     console.log(element);
    
// }


// for (let i = 0; i < 10; i++) {
//     // console.log(i)
//     for (let j = 0; j < 10; j++) {
        
//         console.log(`${i}*${j}=${i*j}`)
        
//     }
    
// }

// const myArray=["spiderman","Batman","hulk","thor"]
// for(let i=0;i<myArray.length;i++){
//     console.log(myArray[i]);
    
// }



//keywords:break,continue

//break-->skips loop
//continue-->skips iteration

//break loop at 5
// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("number 5 occured");
//         break;
        
//     }
//     console.log(`i=${i}`)
// }

//to skip value divisible by 5
for(let i=1;i<=20;i++){
    if(i%5==0){
        
        continue;
        
    }
    console.log(`i=${i}`)
}