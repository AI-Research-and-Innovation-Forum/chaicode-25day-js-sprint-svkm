# JavaScript Array Methods - Real World Examples 🚀

## push() - Add Product to Cart

```javascript
const cart = ["Smartphone", "Earbuds"];

cart.push("Smartwatch");

console.log(cart);
```

### Output

```javascript
["Smartphone", "Earbuds", "Smartwatch"]
```

---

## pop() - Remove Last Item from Cart

```javascript
const cart = ["Smartphone", "Earbuds", "Smartwatch"];

const removedItem = cart.pop();

console.log(removedItem);
console.log(cart);
```

### Output

```javascript
Smartwatch

["Smartphone", "Earbuds"]
```

---

## unshift() - Add Breaking News at Top

```javascript
const news = [
    "Tech Conference Announced",
    "New Mobile Launch"
];

news.unshift("Breaking: AI Startup Raises $100M");

console.log(news);
```

### Output

```javascript
[
    "Breaking: AI Startup Raises $100M",
    "Tech Conference Announced",
    "New Mobile Launch"
]
```

---

## shift() - Remove Oldest Notification

```javascript
const notifications = [
    "Account Created",
    "Password Changed",
    "Profile Updated"
];

const removedNotification = notifications.shift();

console.log(removedNotification);
console.log(notifications);
```

### Output

```javascript
Account Created

[
    "Password Changed",
    "Profile Updated"
]
```

---

## includes() - Check if Movie Exists in Watchlist

```javascript
const watchlist = [
    "3 Idiots",
    "Dangal",
    "Chhichhore"
];

console.log(watchlist.includes("Dangal"));
```

### Output

```javascript
true
```

---

## indexOf() - Find Position of a Song in Playlist

```javascript
const playlist = [
    "Kesariya",
    "Apna Bana Le",
    "Heeriye"
];

console.log(playlist.indexOf("Apna Bana Le"));
```

### Output

```javascript
1
```

---

## slice() - Show First 3 Students in a Leaderboard

```javascript
const students = [
    "Aarav",
    "Priya",
    "Rohan",
    "Sneha",
    "Aditya"
];

const topThree = students.slice(0, 3);

console.log(topThree);
```

### Output

```javascript
["Aarav", "Priya", "Rohan"]
```

---

## splice() - Delete a Task from Todo List

```javascript
const tasks = [
    "Complete Assignment",
    "Attend Meeting",
    "Go to Gym"
];

tasks.splice(1, 1);

console.log(tasks);
```

### Output

```javascript
[
    "Complete Assignment",
    "Go to Gym"
]
```

---

## splice() - Edit a Task from Todo List

```javascript
const tasks = [
    "Complete Assignment",
    "Attend Meeting",
    "Go to Gym"
];

tasks.splice(1, 1, "Prepare Presentation");

console.log(tasks);
```

### Output

```javascript
[
    "Complete Assignment",
    "Prepare Presentation",
    "Go to Gym"
]
```
