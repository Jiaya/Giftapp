// Select the button and the body
const changeColorBtn = document.getElementById('changeColorBtn');
const body = document.body;

// Create a function to change the background color
function changeBackgroundColor() {
  // Define an array of colors
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF'];
  
  // Pick a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Apply the random color as the background color
  body.style.backgroundColor = randomColor;
}

// Add an event listener to the button to call the function when clicked
changeColorBtn.addEventListener('click', changeBackgroundColor);
