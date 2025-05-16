// Function to save preference in localStorage
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

// Function to get preference from localStorage
function getPreference(key) {
  return localStorage.getItem(key);
}

// Array of background colors to cycle through
const colors = ['#f1c40f', '#2ecc71', '#e67e22', '#9b59b6', '#3498db'];
let colorIndex = 0;

// Restore background color if saved
const savedColor = getPreference('bgColor');
if (savedColor) {
  document.body.style.background = savedColor;
  colorIndex = colors.indexOf(savedColor);
  if (colorIndex === -1) colorIndex = 0;
}

const btn = document.getElementById('colorBtn');
btn.addEventListener('click', () => {
  // Cycle to next color
  colorIndex = (colorIndex + 1) % colors.length;
  const newColor = colors[colorIndex];
  document.body.style.background = newColor;
  savePreference('bgColor', newColor);

  // Trigger CSS animation
  btn.classList.add('pulse');
  setTimeout(() => btn.classList.remove('pulse'), 500);
});