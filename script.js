// Select the buttons and containers
const goToOwnList = document.getElementById('goToOwnList');
const goToOthersList = document.getElementById('goToOthersList');
const buttonContainer = document.getElementById('buttonContainer');
const ownListContainer = document.getElementById('ownlistContainer');
const seeOwnlistContainer = document.getElementById('seeOwnlistContainer');
const ownGiftList = document.getElementById('ownGiftList');
const othersGiftList = document.getElementById('othersGiftList');
const othersListContainer = document.getElementById('otherslistContainer');
const seeOtherslistContainer = document.getElementById('seeOtherslistContainer');
const nameListOwn = document.querySelector('#ownlistContainer #nameList');
const nameListOthers = document.querySelector('#otherslistContainer #nameList');
const backBtns = document.querySelectorAll('.backBtn');


// Define a shared list of names and mock gift lists for each person
const sharedNames = ['Mamma/Kuku', 'Armando/Babbo', 'Mei/Mamma', 'Marzia', 'Gaia', 'Delia', 'Marta', 'Ettore', 'Matteo'];
const giftLists = {
  'Mamma/Kuku': [],
  'Armando/Babbo': [],
  'Mei/Mamma': [],
  'Marzia': [],
  'Gaia': [],
  'Delia': [],
  'Marta': [],
  'Ettore': [],
  'Matteo': []
};

// Variable to store the current user's name
let currentUser = null;

// Event Listener for adding new items to the gift list
const newItemInput = document.getElementById('newItemInput');
const addItemBtn = document.getElementById('addItemBtn');

// Create a function to show the "Own List" container
function showOwnList() {
  populateList(nameListOwn, sharedNames);
  toggleVisibility(buttonContainer, ownListContainer);
}

// Create a function to show the "Own Gift List" container
function showOwnGiftList(name) {
  const gifts = giftLists[name] || [];
  populateList(ownGiftList, gifts);
  toggleVisibility(ownListContainer, seeOwnlistContainer);
}

// Create a function to show the "Others List" container
function showOthersList() {
  populateList(nameListOthers, sharedNames);
  toggleVisibility(buttonContainer, othersListContainer);
}

// Create a function to show the "Others Gift List" container
function showOthersGiftList(name) {
  const otherGifts = sharedNames
    .filter(person => person !== name)
    .map(person => ({ name: person, gifts: giftLists[person] || [] }));

  othersGiftList.innerHTML = ''; // Clear the list
  otherGifts.forEach(entry => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${entry.name}</strong>: ${entry.gifts.join(', ')}`;
    othersGiftList.appendChild(li);
  });

  toggleVisibility(othersListContainer, seeOtherslistContainer);
}

// Helper function to populate a list dynamically
function populateList(listElement, items) {
  listElement.innerHTML = ''; // Clear the list
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
      if (listElement === nameListOwn) {
        showOwnGiftList(item);
      } else if (listElement === nameListOthers) {
        showOthersGiftList(item);
      }
    });
    listElement.appendChild(li);
  });
}

addItemBtn.addEventListener('click', () => {
  const newItem = newItemInput.value.trim();
  if (newItem && currentUser) {
    // Add the new item to the user's gift list
    if (!giftLists[currentUser]) {
      giftLists[currentUser] = [];
    }
    giftLists[currentUser].push(newItem);

    // Update the displayed list
    populateList(ownGiftList, giftLists[currentUser]);

    // Clear the input field
    newItemInput.value = '';
  } else {
    alert('Inserisci un elemento valido per aggiungere alla lista.');
  }
});

// Modified showOwnGiftList function to set the current user
function showOwnGiftList(name) {
  currentUser = name; // Set the current user
  const gifts = giftLists[name] || [];
  populateList(ownGiftList, gifts);
  toggleVisibility(ownListContainer, seeOwnlistContainer);
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
  seeOwnlistContainer.style.display = 'none';
  seeOtherslistContainer.style.display = 'none';
  buttonContainer.style.display = 'block';
}

// Add event listeners
goToOwnList.addEventListener('click', showOwnList);
goToOthersList.addEventListener('click', showOthersList);

// Attach the back button functionality
backBtns.forEach(btn => {
  btn.addEventListener('click', goBack);
});