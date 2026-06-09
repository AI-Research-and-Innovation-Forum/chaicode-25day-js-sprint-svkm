// dates in js
let mydate = new Date();

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let mycreateddate = new Date("2020-10-10");
console.log(mycreateddate.toDateString());

let mytimeStamp = Date.now();
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:'long',
})