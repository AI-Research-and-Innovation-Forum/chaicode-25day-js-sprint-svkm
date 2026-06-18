// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 Is Best Number");
    }
    // console.log(element);
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer looop Vlaue ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop Value ${j} and Inner Loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArray = ["Flash", "Batman", "Superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// Break And Continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value Of i Is ${index}`);
    
    
// }

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value Of i Is ${index}`);
    
    
}