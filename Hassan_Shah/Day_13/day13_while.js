// === 1. Basic while loop ===
let index = 0;
while (index <= 10) {
    // Prints index values incrementing by 2 each cycle
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

// === 2. Iterating through an Array using a while loop ===
let myArray = ['flash', "batman", "superman"];
let arr = 0; // Tracks the array index

while (arr < myArray.length) {
    // Prints each element present in the array
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1; // Increment tracker to prevent infinite loop
}

// === 3. Basic do-while loop ===
let score = 1;
do {
    // Prints score and increments before condition checking
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

// === 4. Special Case: do-while executing at least once ===
let specialScore = 11;
do {
    // Runs once even if the condition is false initially
    console.log(`Score is ${specialScore}`);
    specialScore++;
} while (specialScore <= 10);