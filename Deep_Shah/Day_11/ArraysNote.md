# JavaScript Array Methods – Real-World Examples

## push() – Add a new milk entry

```javascript
let milkEntries = ["12L", "15L"];
milkEntries.push("18L");
console.log(milkEntries);
```

## pop() – Remove last site material entry

```javascript
let materials = ["Cement", "Sand", "Bricks"];
materials.pop();
console.log(materials);
```

## unshift() – Add urgent project at top

```javascript
let projects = ["School Site", "Mall Site"];
projects.unshift("Hospital Site");
console.log(projects);
```

## shift() – Remove oldest payment notification

```javascript
let alerts = ["Paid ₹5000", "Paid ₹8000"];
alerts.shift();
console.log(alerts);
```

## includes() – Check if supplier exists

```javascript
let suppliers = ["Patil", "Shaikh", "Jadhav"];
console.log(suppliers.includes("Patil"));
```

## indexOf() – Find milkman's position

```javascript
let milkmen = ["Ramesh", "Suresh", "Ganesh"];
console.log(milkmen.indexOf("Suresh"));
```

## slice() – Show first 5 ledger records

```javascript
let ledger = [1,2,3,4,5,6,7,8];
console.log(ledger.slice(0,5));
```

## splice() – Remove cancelled material order

```javascript
let orders = ["Bricks", "Sand", "Steel"];
orders.splice(1,1);
console.log(orders);
```

## map() – Calculate payment with GST

```javascript
let amounts = [1000,2000,3000];
let gst = amounts.map(a => a * 1.18);
console.log(gst);
```

## filter() – Show pending payments

```javascript
let payments = ["Paid","Pending","Paid","Pending"];
console.log(payments.filter(p => p === "Pending"));
```

## reduce() – Total milk collected

```javascript
let liters = [12,15,18];
let total = liters.reduce((sum,l) => sum + l,0);
console.log(total);
```
