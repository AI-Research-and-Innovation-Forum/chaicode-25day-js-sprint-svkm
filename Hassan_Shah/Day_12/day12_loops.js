// --- 1. Basic For Loop ---

// Initialize loop at 0, run as long as index is less than or equal to 10, increment index by 1
for (let index = 0; index <= 10; index++) {
    // Store the current loop iteration value in a block-scoped variable
    const element = index;
    // Log the current element to the console
    console.log(element);
}


// --- 2. For Loop with IF Condition ---

// Standard loop using 'i' as the variable, iterating from 1 to 10
for (let i = 1; i <= 10; i++) {
    // Check if the current iteration value strictly equals 5
    if (i === 5) {
        // Print a specific message when the condition is met
        console.log("5 is best number");
    }
    // Print the regular iteration number regardless of the condition
    console.log(i);
}


// --- 3. Nested For Loops (e.g., Multiplication Tables) ---

// Outer loop starting from 1 to 10 to represent the primary table number
for (let i = 1; i <= 10; i++) {
    // Log the start of a new outer loop iteration with template literals
    console.log(`Outer loop value: ${i}`);
    
    // Inner loop iterating from 0 to 10 to multiply against the outer loop number
    for (let j = 0; j <= 10; j++) {
        // Calculate and log the math equation (product) for each inner iteration
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


// --- 4. Iterating Over Arrays ---

// Declare an array containing a list of superhero strings
let myArray = ["flash", "batman", "superman"];

// Loop from index 0 up to the length of the array (strictly less than length)
for (let index = 0; index < myArray.length; index++) {
    // Access the array element at the current index position
    const element = myArray[index];
    // Log the extracted array element to the console
    console.log(element);
}


// --- 5. The Break Keyword ---

// Loop initialized to run from 1 to 20
for (let index = 1; index <= 20; index++) {
    // Check if the current index hits the target value of 5
    if (index === 5) {
        // Log that the condition was triggered
        console.log("Detected 5");
        // Completely exit the loop immediately, skipping all remaining iterations
        break;
    }
    // Print the value of the index for normal iterations (stops at 4)
    console.log(`Value of i is ${index}`);
}


// --- 6. The Continue Keyword ---

// Loop initialized to run from 1 to 20
for (let index = 1; index <= 20; index++) {
    // Check if the current index hits the target value of 5
    if (index === 5) {
        // Log that the condition was triggered
        console.log("Detected 5");
        // Skip the remaining code in THIS iteration, but keep running the loop for 6 through 20
        continue;
    }
    // Print the value of the index (will skip printing "Value of i is 5")
    console.log(`Value of i is ${index}`);
}
