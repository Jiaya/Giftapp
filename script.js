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
const nameListOwn = document.getElementById('nameListOwn');
const nameListOthers = document.getElementById('nameListOthers');
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

// Populate a list and add click functionality
function populateList(listElement, names) {
  listElement.innerHTML = ''; // Clear the list
  names.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;

    // Add click event listener to handle different contexts
    li.addEventListener('click', () => {
      if (listElement.id === 'nameListOwn') {
        showOwnGiftList(name); // Show current user's gift list
      } else if (listElement.id === 'nameListOthers') {
        showOthersGiftList(name); // Show gift lists of others
      }
    });

    listElement.appendChild(li);
  });
}

// Show "Own Gift List" and set the current user
function showOwnGiftList(name) {
  currentUser = name; // Set the current user
  const gifts = giftLists[name] || [];
  populateList(ownGiftList, gifts);
  toggleVisibility(ownListContainer, seeOwnlistContainer);
}

// Show "Others Gift List" excluding the clicked user's name
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

// Add a new item to the current user's gift list
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

// Toggle visibility between containers
function toggleVisibility(hideContainer, showContainer) {
  hideContainer.style.display = 'none';
  showContainer.style.display = 'block';
}

// Go back to the main menu
function goBack() {
  ownListContainer.style.display = 'none';
  othersListContainer.style.display = 'none';
  seeOwnlistContainer.style.display = 'none';
  seeOtherslistContainer.style.display = 'none';
  buttonContainer.style.display = 'block';
}

// Event listeners for the main buttons
goToOwnList.addEventListener('click', () => {
  populateList(nameListOwn, sharedNames);
  toggleVisibility(buttonContainer, ownListContainer);
});

goToOthersList.addEventListener('click', () => {
  populateList(nameListOthers, sharedNames);
  toggleVisibility(buttonContainer, othersListContainer);
});

// Attach the back button functionality
backBtns.forEach(btn => {
  btn.addEventListener('click', goBack);
});
