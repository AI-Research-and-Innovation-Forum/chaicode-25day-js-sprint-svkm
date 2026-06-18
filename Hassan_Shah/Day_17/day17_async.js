// ==========================================
// VIDEO 2: Async Javascript Fundamentals
// ==========================================
// Note: This video is a whiteboard/theory lesson on the Event Loop.
// The code below is the interview trick question discussed to prove how the Call Stack works.

// 1. This runs synchronously on the main thread. It goes straight to the Call Stack.
console.log(1); 

// 2. We set a timeout with a delay of ZERO milliseconds.
// Even though the delay is 0, this is handed off to the Web APIs.
// The callback function inside is pushed to the Task Queue, waiting for the Call Stack to be completely empty.
setTimeout(function() {
    console.log(2); 
}, 0);

// 3. This runs synchronously on the main thread right after console.log(1).
console.log(3); 

// EXPECTED OUTPUT:
// 1
// 3
// 2 (Executes last, because the Event Loop only pushes it to the Call Stack after the main code finishes).
