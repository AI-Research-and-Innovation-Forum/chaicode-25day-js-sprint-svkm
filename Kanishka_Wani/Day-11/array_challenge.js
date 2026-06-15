
// push() - Add Product to Cart
const cart = ["Smartphone", "Earbuds"];
cart.push("Smartwatch");

console.log("push():");
console.log(cart);

// pop() - Remove Last Item from Cart
const cart2 = ["Smartphone", "Earbuds", "Smartwatch"];
const removedItem = cart2.pop();

console.log("\npop():");
console.log("Removed:", removedItem);
console.log(cart2);

// unshift() - Add Breaking News at Top
const news = [
    "Tech Conference Announced",
    "New Mobile Launch"
];

news.unshift("Breaking: AI Startup Raises $100M");

console.log("\nunshift():");
console.log(news);

// shift() - Remove Oldest Notification
const notifications = [
    "Account Created",
    "Password Changed",
    "Profile Updated"
];

const removedNotification = notifications.shift();

console.log("\nshift():");
console.log("Removed:", removedNotification);
console.log(notifications);

// includes() - Check if Movie Exists in Watchlist
const watchlist = [
    "3 Idiots",
    "Dangal",
    "Chhichhore"
];

console.log("\nincludes():");
console.log(watchlist.includes("Dangal"));

// indexOf() - Find Position of a Song in Playlist
const playlist = [
    "Kesariya",
    "Apna Bana Le",
    "Heeriye"
];

console.log("\nindexOf():");
console.log(playlist.indexOf("Apna Bana Le"));

// slice() - Show First 3 Students in a Leaderboard
const students = [
    "Kanishka",
    "Priya",
    "Raju",
    "Sneha",
    "Ram"
];

const topThree = students.slice(0, 3);

console.log("\nslice():");
console.log(topThree);

// splice() - Delete a Task from Todo List
const tasks = [
    "Complete Assignment",
    "Attend Meeting",
    "Go to Gym"
];

tasks.splice(1, 1);

console.log("\nsplice() Delete:");
console.log(tasks);

// splice() - Edit a Task from Todo List
const tasks2 = [
    "Complete Assignment",
    "Attend Meeting",
    "Go to Gym"
];

tasks2.splice(1, 1, "Prepare Presentation");

console.log("\nsplice() Edit:");
console.log(tasks2);

