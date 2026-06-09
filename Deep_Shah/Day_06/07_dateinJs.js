// Dates

// let myDate = new Date();
// console.log(myDate.toString()); //Sun Jun 07 2026 21:15:37 GMT+0530 
// console.log(myDate.toDateString()); // Sun Jun 07 2026
// console.log(myDate.toLocaleString()); // 7/6/2026, 9:15:37 pm
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 5:03:00 am

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());// 14/1/2023, 5:30:00 am

let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString()); // 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDate()} and the time is 
// ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
})