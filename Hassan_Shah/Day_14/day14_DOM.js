// ==========================================
// 1. Examining the Window and Document
// ==========================================
console.log(window);                           // Logs the global 'window' object containing browser APIs, DOM, etc.
console.log(window.document);                  // Logs the 'document' object (the actual HTML structure) residing inside window
console.log(document);                         // Shorthand for window.document (browser knows it's frequently used)

// console.log often renders the HTML tree. To see the object properties instead:
console.dir(document);                         // Logs the document as an object with properties, methods, and hidden details


// ==========================================
// 2. Accessing Document Properties
// ==========================================
console.log(document.baseURI);                 // Returns the base URL/URI of the currently active web page


// ==========================================
// 3. Working with HTMLCollections
// ==========================================
const allLinks = document.links;               // Fetches all the anchor (<a>) tags present on the page
console.log(allLinks);                         // Logs an 'HTMLCollection' of all links (Note: This is NOT a standard Array)

// Accessing individual elements within the HTMLCollection (like an array)
console.log(document.links[1]);                // Retrieves the second link element from the collection


// ==========================================
// 4. Selecting Elements from the DOM
// ==========================================
// Grabbing an element uniquely by its ID attribute
const heading = document.getElementById('firstHeading'); 
console.log(heading);                          // Logs the entire HTML node (e.g., <h1 id="firstHeading">...</h1>)


// ==========================================
// 5. DOM Manipulation (Changing the page)
// ==========================================
// Chaining selection and manipulation to change what is rendered on the screen
document.getElementById('firstHeading').innerHTML = "<h1>Chai aur Code</h1>"; // Overwrites the element's internal HTML
