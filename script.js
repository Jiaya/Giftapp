// Select the button and the body
const changeColorBtn = document.getElementById('changeColorBtn');
const chooseOwnList = document.getElementById('chooseOwnList');
const chooseOwnList = document.getElementById('chooseOthersList');
const body = document.body;

// Create a function to change the background color
function changeBackgroundColor() {
  // Define an array of colors
  const colors = ['#191618', '#d6002a', '#346052', '#237f79', '#dadbed'];
  
  // Pick a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Apply the random color as the background color
  body.style.backgroundColor = randomColor;
}

// Add an event listener to the button to call the function when clicked
changeColorBtn.addEventListener('click', changeBackgroundColor);
chooseOwnList.addEventListener('click', changeBackgroundColor);
chooseOthersList.addEventListener('click', changeBackgroundColor);
