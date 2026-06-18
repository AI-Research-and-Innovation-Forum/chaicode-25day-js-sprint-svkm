
// ==========================================
// VIDEO 1: Events in JavaScript
// ==========================================

// Approach 1 (HTML inline) and Approach 2 (element.onclick) were discussed but 
// discouraged. Below is the modern, recommended approach (Approach 3).

// ------------------------------------------
// 1. EVENT PROPAGATION (BUBBLING VS CAPTURING)
// ------------------------------------------

// Grabbing the parent container (the Unordered List)
document.getElementById('images').addEventListener('click', function(e) {
    // This logs when the UL is clicked. 
    // Because the 3rd parameter is 'false' (Bubbling), this will fire AFTER the child element's click event.
    console.log("Clicked inside the ul");
}, false);

// Grabbing a specific child element (the Owl image)
document.getElementById('owl').addEventListener('click', function(e) {
    // The 'e' parameter is the Event Object, containing properties like position, timestamp, etc.
    console.log("Owl clicked");
    
    // stopPropagation() stops the event from "bubbling" up to the parent '#images' element.
    // If we didn't have this, clicking the owl would trigger this log, AND the UL log above.
    e.stopPropagation(); 
}, false);

// ------------------------------------------
// 2. PREVENTING DEFAULT BEHAVIOR
// ------------------------------------------

// Grabbing an anchor tag pointing to Google
document.getElementById('google').addEventListener('click', function(e) {
    // preventDefault() stops the default browser behavior (navigating to google.com)
    e.preventDefault();
    
    // Also stopping propagation so the parent UL doesn't register the click
    e.stopPropagation();
    
    console.log("Google clicked, but navigation prevented");
}, false);


// ------------------------------------------
// 3. MINI PROJECT: CLICK TO REMOVE IMAGE
// ------------------------------------------

// Attaching a single event listener to the parent UL to monitor all images inside it (Event Delegation)
document.querySelector('#images').addEventListener('click', function(e) {
    
    // We do a strict check to ensure the user actually clicked an IMAGE.
    // Without this, clicking the empty space of the UL would delete the entire list.
    if (e.target.tagName === 'IMG') {
        
        // Logging the ID of the specific image clicked
        console.log(e.target.id);
        
        // e.target is the <img> tag. We need to remove the whole <li> tag, which is its parent.
        let removeIt = e.target.parentNode;
        
        // Modern way to remove the element from the DOM
        removeIt.remove();
        
        // --- ALTERNATIVE OLDER METHOD ---
        // You might also see it written this way in older codebases:
        // removeIt.parentNode.removeChild(removeIt);
    }
}, false);

