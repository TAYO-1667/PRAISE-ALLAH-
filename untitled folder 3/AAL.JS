// 99 Names of Allah
const names = [
    "Ar-Rahmaan - The Beneficent",
    "Ar-Raheem - The Merciful",
    "Al-Malik - The King",
    "Al-Quddus - The Most Sacred",
    "As-Salam - The Source of Peace, The Flawless",
    // ... add all 99 names
];

let index = 0;
const nameDisplay = document.getElementById('name-display');
const translateButton = document.getElementById('translate-button');
let isArabic = true; // Tracks if Arabic text is showing

// Toggle Arabic/English translations
translateButton.addEventListener('click', () => {
    isArabic = !isArabic;
    const arabicElements = document.querySelectorAll('.arabic');
    const englishElements = document.querySelectorAll('.english');

    arabicElements.forEach(el => el.style.display = isArabic ? 'block' : 'none');
    englishElements.forEach(el => el.style.display = isArabic ? 'none' : 'block');
    translateButton.textContent = isArabic ? 'Translate' : 'Show Arabic';
});

// Function to update the displayed name
function displayNextName() {
    nameDisplay.textContent = names[index];
    nameDisplay.classList.remove('fade');
    void nameDisplay.offsetWidth; // Trigger reflow to restart animation
    nameDisplay.classList.add('fade');
    
    index = (index + 1) % names.length; // Loop through names
}

// Start the name display cycle
setInterval(displayNextName, 3000); // Change every 3 seconds
displayNextName(); // Display first name immediately
