// Month index starts from 0 when using numeric parameters

const currentDate = new Date();

console.log(currentDate);
console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toLocaleString());
console.log(typeof currentDate);

const numericCustomDate = new Date(2023, 0, 23);
console.log(numericCustomDate.toDateString());

const dynamicDateTime = new Date(2023, 0, 23, 5, 3);
console.log(dynamicDateTime.toLocaleString());

const stringFormattedDate = new Date("2023-01-14");
console.log(stringFormattedDate.toLocaleString());

const shortHandFormattedDate = new Date("01-14-2023");
console.log(shortHandFormattedDate.toLocaleString());

const currentTimestamp = Date.now();
console.log(currentTimestamp);

const specificTargetDate = new Date("01-14-2023");
console.log(specificTargetDate.getTime());

const currentInSeconds = Math.floor(Date.now() / 1000);
console.log(currentInSeconds);

const newDateInstance = new Date();

console.log(newDateInstance.getDate());
console.log(newDateInstance.getDay()); // 0 = Sunday, ..., 6 = Saturday
console.log(newDateInstance.getMonth()); // 0 = January, ..., 11 = December

console.log(
  `${newDateInstance.getDate()} and the month is ${
    newDateInstance.getMonth() + 1
  }`
);

const formattedLocalization = newDateInstance.toLocaleString("default", {
  weekday: "long",
});

console.log(formattedLocalization);