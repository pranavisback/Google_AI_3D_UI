// Simple theme toggle button logic
function setTheme(theme) {
  document.body.classList.toggle('light-theme', theme === 'light');
  window.dispatchEvent(new Event('themechange'));
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const isLight = document.body.classList.contains('light-theme');
  setTheme(isLight ? 'dark' : 'light');
}

// On load, set theme from localStorage or system preference
(function() {
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  setTheme(saved ? saved : (prefersLight ? 'light' : 'dark'));
})();
// Example: Add a button in your HTML to toggle theme
// <button onclick="toggleTheme()">Toggle Theme</button>
