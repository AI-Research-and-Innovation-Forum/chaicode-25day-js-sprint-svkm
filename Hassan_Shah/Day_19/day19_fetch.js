// ==========================================
// Video 2: Now you know fetch in javascript
// ==========================================

// Initiate a fetch request to a specific URL and pass an options object
fetch('https://some-api.com/data', {
    // Specify the HTTP method (e.g., POST, PUT, DELETE)
    method: 'POST', 
    // Define headers to tell the receiving server we are sending JSON data
    headers: {
        'Content-Type': 'application/json',
    },
    // Convert a JavaScript object into a JSON string for the payload body
    body: JSON.stringify({ key: 'value' }) 
})
// Handle the incoming response from the server
.then(response => {
    // Check if the HTTP status code is NOT a success (outside the 200-299 range)
    if (!response.ok) {
        // Since fetch doesn't reject on 404/500 errors natively, manually throw an error
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    // If status is ok, parse the JSON body
    return response.json();
})
// Handle the parsed JSON data
.then(data => console.log(data))
// Catch actual network failures OR the HTTP error we manually threw above
.catch(error => console.log('Network Error or manually thrown error:', error));

// ------------------------------------------
// Concept Demonstration: Microtask Queue Priority
// ------------------------------------------

// Queue a task in the standard standard Task/Macrotask Queue with 0ms delay
setTimeout(() => {
    // This will likely log AFTER the fetch block below, despite the 0ms timer
    console.log("Task Queue: setTimeout executed");
}, 0);

// Initiate a fetch request (Promises use the higher-priority "Microtask Queue")
fetch('https://jsonplaceholder.typicode.com/users')
// Parse the response
.then(response => response.json())
// Handle the data
.then(data => {
    // This generally executes BEFORE the setTimeout, proving the microtask queue has priority
    console.log("Microtask Queue: Fetch executed");
});


