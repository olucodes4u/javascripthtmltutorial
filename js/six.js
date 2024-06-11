// number 6

function addBox() {
    // Create a new div element
    var newBox = document.createElement('div');
    // Add class "box" to the new div
    newBox.classList.add('box');
    // Set some text content
    newBox.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iusto voluptate rerum';
    // Append the new box to the container
    document.querySelector('.container').appendChild(newBox);
}

// Add an event listener to the button
document.getElementById('addBox').addEventListener('click', addBox);