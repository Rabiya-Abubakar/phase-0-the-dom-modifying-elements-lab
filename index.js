// Select the <main> element
const main = document.getElementById('main');

// Remove the <main> element if it exists
if (main) {
    main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.textContent = 'Rabiya is the champion'; // Replace YOUR-NAME with your actual name

// Append the new <h1> element to the body or any other container element
document.body.appendChild(newHeader);
