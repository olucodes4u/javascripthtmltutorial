// Get all the .box elements
const boxes = document.querySelectorAll('.box');

// Loop through each .box element
boxes.forEach(box => {
    // Add event listener for mouseenter event
    box.addEventListener('mouseenter', () => {
        // Change background color of .container when hovered
        document.querySelector('.container').style.backgroundColor = 'brown';
    });

    // Add event listener for mouseleave event
    box.addEventListener('mouseleave', () => {
        // Reset background color of .container when not hovered
        document.querySelector('.container').style.backgroundColor = '';
    });
});
