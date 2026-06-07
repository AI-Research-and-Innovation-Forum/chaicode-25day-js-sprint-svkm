let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

let time1=new Date(2026,0,21,1,53,34)
// console.log(time1.toDateString());

// console.log(time1.toLocaleDateString());
// console.log(time1.toLocaleTimeString());

const mytimestamp= Date.now()
// console.log(mytimestamp);

// console.log(time1.getTime());

let newDate=new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getSeconds());
// console.log(newDate.getFullYear());


console.log(newDate.toLocaleString("default",{
    weekday:"long",
    month:"long",
    timeZoneName:"long"
}))



