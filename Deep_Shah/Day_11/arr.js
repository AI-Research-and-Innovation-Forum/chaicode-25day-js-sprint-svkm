// JavaScript Array Methods – Real-World Examples

// push() – Add a new milk entry
let milkEntries = ["12L", "15L"];
milkEntries.push("18L");
console.log("push():", milkEntries);

// pop() – Remove last site material entry
let materials = ["Cement", "Sand", "Bricks"];
materials.pop();
console.log("pop():", materials);

// unshift() – Add urgent project at top
let projects = ["School Site", "Mall Site"];
projects.unshift("Hospital Site");
console.log("unshift():", projects);

// shift() – Remove oldest payment notification
let alerts = ["Paid ₹5000", "Paid ₹8000"];
alerts.shift();
console.log("shift():", alerts);

// includes() – Check if supplier exists
let suppliers = ["Patil", "Shaikh", "Jadhav"];
console.log("includes():", suppliers.includes("Patil"));

// indexOf() – Find milkman's position
let milkmen = ["Ramesh", "Suresh", "Ganesh"];
console.log("indexOf():", milkmen.indexOf("Suresh"));

// slice() – Show first 5 ledger records
let ledger = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("slice():", ledger.slice(0, 5));

// splice() – Remove cancelled material order
let orders = ["Bricks", "Sand", "Steel"];
orders.splice(1, 1);
console.log("splice():", orders);

// map() – Calculate payment with GST
let amounts = [1000, 2000, 3000];
let gst = amounts.map(amount => amount * 1.18);
console.log("map():", gst);

// filter() – Show pending payments
let payments = ["Paid", "Pending", "Paid", "Pending"];
let pendingPayments = payments.filter(status => status === "Pending");
console.log("filter():", pendingPayments);

// reduce() – Total milk collected
let liters = [12, 15, 18];
let totalMilk = liters.reduce((sum, liter) => sum + liter, 0);
console.log("reduce():", totalMilk);