let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toTimeString());

console.log(myDate.toLocaleString());

console.log(myDate.toISOString());

console.log(typeof myDate);

let myCreatedDate = new Date(2020, 0, 22, 5 ,3)
console.log(myCreatedDate.toLocaleString());

let date1 = new Date("2020-01-22")
// let date1 = new Date("01-22-2020")
console.log(date1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(date1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}))
