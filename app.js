
//const API_URL = "https://example.com";
let currentUser = null;
let isDataLoaded = false;


const formElement = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-btn');
const outputDisplay = document.querySelector('.output-container');

document.addEventListener('DOMContentLoaded', initializeApp);
formElement.addEventListener('submit', handleFormSubmit);
submitButton.addEventListener('click', toggleLoadingState);


function initializeApp() {
    console.log("App loaded. Fetching data...");
    fetchData();
}

function handleFormSubmit(event) {
    event.preventDefault(); // Stop page refresh
    const userInput = formElement.value;
    processUserInput(userInput);
}

async function fetchData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        showError(error);
    }
}

function processUserInput(input) {
    // Sanitize, validate, or format text
    return input.trim().toLowerCase();
}


function updateUI(data) {
    outputDisplay.textContent = `Welcome back, ${data.name}!`;
}

function showError(message) {
    outputDisplay.innerHTML = `<p class="error">${message}</p>`;
}
