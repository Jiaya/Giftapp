// Select the buttons and containers
const chooseOwnList = document.getElementById('chooseOwnList');
const chooseOthersList = document.getElementById('chooseOthersList');
const buttonContainer = document.getElementById('buttonContainer');
const ownListContainer = document.getElementById('OwnlistContainer');
const othersListContainer = document.getElementById('OtherslistContainer');
const nameListOwn = document.querySelector('#OwnlistContainer #nameList');
const nameListOthers = document.querySelector('#OtherslistContainer #nameList');
const backBtns = document.querySelectorAll('#backBtn');

// Define a shared list of names
const sharedNames = ['Mamma/Kuku', 'Armando/Babbo', 'Mei/Mamma', 'Marzia', 'Gaia', 'Delia', 'Marta','Ettore','Matteo'];

// Create a function to show the "Own List" container
function showOwnList() {
  populateList(nameListOwn, sharedNames);
  toggleVisibility(buttonContainer, ownListContainer);
}

// Create a function to show the "Others List" container
function showOthersList() {
  populateList(nameListOthers, sharedNames);
  toggleVisibility(buttonContainer, othersListContainer);
}

// Helper function to populate a list dynamically
function populateList(listElement, names) {
  listElement.innerHTML = ''; // Clear the list
  names.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    listElement.appendChild(li);
  });
}

// Helper function to toggle visibility between containers
function toggleVisibility(hideContainer, showContainer) {
  hideContainer.style.display = 'none';
  showContainer.style.display = 'block';
}

// Create a function to go back to the button container
function goBack() {
  ownListContainer.style.display = 'none';
  othersListContainer.style.display = 'none';
  buttonContainer.style.display = 'block';
}

// Add event listeners
chooseOwnList.addEventListener('click', showOwnList);
chooseOthersList.addEventListener('click', showOthersList);

// Attach the back button functionality
backBtns.forEach(btn => {
  btn.addEventListener('click', goBack);
});
