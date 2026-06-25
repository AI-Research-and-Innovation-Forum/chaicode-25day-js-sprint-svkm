// --- V8 DEBUGGING NATIVE SYNTAX ---

// Creates a basic empty array [00:02:44]
const myArray = []; 

// V8 Native Syntax to print internal debug information about the array. [00:02:59]
// Note: This requires running the file with the V8 debug engine using the '--allow-natives-syntax' flag. [00:15:13]
%DebugPrint(myArray); 


// --- CONTINUOUS (PACKED) ARRAYS ---

// Creates a continuous array with only integers. 
// V8 highly optimizes this and categorizes it as PACKED_SMI_ELEMENTS (Small Integers) [00:23:52]
const arrTwo = [1, 2, 3, 4, 5]; 

// Adding a float downgrades the array internally to PACKED_DOUBLE_ELEMENTS [00:25:33]
arrTwo.push(6.0); 

// Adding a string further downgrades the array to a generic PACKED_ELEMENTS [00:26:02]
// Once downgraded, an array cannot be upgraded back, even if you delete the string! [00:26:48]
arrTwo.push('7'); 


// --- HOLEY ARRAYS ---

// Adding an element at an index far ahead introduces empty slots (holes) in the array. 
// It instantly becomes HOLEY_ELEMENTS [00:27:13]
arrTwo[10] = 11; 

// Accessing the array elements and its length [00:28:32]
console.log(arrTwo);
console.log(arrTwo.length);

// Accessing an empty slot returns undefined. [00:28:41]
// Holey arrays are expensive because V8 has to do a Bound check -> Prototype check -> HasOwnProperty check. [00:31:02]
console.log(arrTwo[9]); 


// --- BOUND CHECKING EXAMPLE ---

// Standard continuous array [00:33:12]
const arrThree = [1, 2, 3, 4, 5];

// Easily fails the initial out-of-bound check and safely returns undefined, avoiding expensive checks [00:33:24]
console.log(arrThree[8]); 


// --- BAD PRACTICE (Pre-allocating sizes to introduce holes) ---

// Creates an array of length 3 with empty slots, yielding HOLEY_SMI_ELEMENTS [00:36:44]
const arrFour = new Array(3); 

// Assigning a string downgrades it straight to the less optimized HOLEY_ELEMENTS [00:37:53]
arrFour[0] = '1'; 


// --- GOOD PRACTICE (Dynamic packing) ---

// Initialize a standard empty array (starts as highly-optimized SMI_ELEMENTS) [00:39:26]
const arrFive = []; 

// Pushing items dynamically keeps the array continuous without holes, settling as PACKED_ELEMENTS [00:39:47]
arrFive.push('1'); 
arrFive.push('2'); // [00:40:01]
arrFive.push('3'); // [00:40:07]


// --- NAN & INFINITY DE-OPTIMIZATIONS ---

// Another standard optimized array (PACKED_SMI_ELEMENTS) [00:40:47]
const arrSix = [1, 2, 3, 4, 5]; 

// Adding NaN or Infinity permanently downgrades the array to PACKED_DOUBLE_ELEMENTS [00:41:02]
arrSix.push(NaN); 
arrSix.push(Infinity); // [00:41:13]
