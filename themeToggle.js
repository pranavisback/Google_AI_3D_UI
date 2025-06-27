// Check for saved theme preference or use device preference
function getThemePreference() {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    
    // Check if device prefers dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Apply theme
function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Apply the theme 
    const currentTheme = getThemePreference();
    applyTheme(currentTheme);

    // Add event listeners to theme toggle button after navbar is loaded
    const observer = new MutationObserver(function(mutations) {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                // Toggle theme
                const newTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
                applyTheme(newTheme);
            });
            observer.disconnect(); // Stop observing once we've found the button
        }
    });

    // Start observing the document for the navbar to be inserted
    observer.observe(document.body, { childList: true, subtree: true });
});
