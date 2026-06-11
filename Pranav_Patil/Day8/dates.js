let myDate = new Date()

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toString());
console.log(myDate.toTimeString());


// Outputs
// Tue Jun 09 2026
// 6/9/2026
// 2026-06-09T14:22:26.428Z
// 7:52:26 PM
// Tue, 09 Jun 2026 14:22:26 GMT
// Tue Jun 09 2026 19:52:26 GMT+0530 (India Standard Time)
// 19:52:26 GMT+0530 (India Standard Time)

console.log(typeof myDate); // object

let myCreatedDate = new Date(2005, 3, 6) // Apr 6, 2006
let myCreatedDate2 = new Date("04/06/2006") // Apr 6, 2006

console.log(myCreatedDate.toDateString()); // Thu Apr 06 2006
console.log(myCreatedDate.toLocaleString()); // 4/6/2006, 12:00:00 AM

console.log(myCreatedDate2.toDateString()); // Thu Apr 06 2006
console.log(myCreatedDate2.toLocaleString()); // 4/6/2006, 12:00:00 AM

let myTimestamp = Date.now()
console.log(myTimestamp); // 1717944146428 miliseconds since Jan 1, 1970
console.log(Math.round(myTimestamp/1000)); // 1717944146428 seconds since Jan 1, 1970

let newdate = new Date()
console.log(newdate); // 2026-06-09T14:22:26.428Z
console.log(newdate.getFullYear()); // 2026
console.log(newdate.getMonth()+1); // 6 (months are zero-indexed, so we add 1)
console.log(newdate.getDate()); // 9
console.log(newdate.getHours()); // 14
console.log(newdate.getMinutes()); // 22
console.log(newdate.getSeconds()); // 26
console.log(newdate.getMilliseconds()); // 428
console.log(newdate.getTime()); // 1717944146428 (milliseconds since Jan 1, 1970)

console.log(newdate.toLocaleDateString('default',{
    weekday: 'long',
    year: 'numeric',
}));