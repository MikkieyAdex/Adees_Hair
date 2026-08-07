// 1. DARK MODE TOGGLE
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    const icon = toggleBtn.querySelector('i');

    // Helper function to apply a specific theme to Bootstrap 5.3
    function applyTheme(theme) {
        htmlElement.setAttribute('data-bs-theme', theme);
        
        if (theme === 'dark') {
            icon.classList.replace('bi-moon-stars', 'bi-sun');
            toggleBtn.classList.replace('btn-outline-secondary', 'btn-outline-light');
        } else {
            icon.classList.replace('bi-sun', 'bi-moon-stars');
            toggleBtn.classList.replace('btn-outline-light', 'btn-outline-secondary');
        }
    }

    // DETECT SYSTEM PREFERENCE OR SAVED PREFERENCE
    const savedTheme = localStorage.getItem('user-theme');
    
    // Check if system OS prefers dark mode
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        // Use user's previously chosen theme if available
        applyTheme(savedTheme);
    } else {
        // Otherwise, fall back to the user's system setting
        const initialTheme = systemPrefersDark ? 'dark' : 'light';
        applyTheme(initialTheme);
    }

    // MANUAL TOGGLE CLICK HANDLER
    toggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        applyTheme(newTheme);
        
        // Save choice in browser storage so it persists across page reloads
        localStorage.setItem('user-theme', newTheme);
    });

    // LISTEN FOR SYSTEM THEME CHANGES IN REAL-TIME
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only automatically update if user hasn't manually set a preference
        if (!localStorage.getItem('user-theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // DISPLAY THE TEMPORARY PROMPT (TOAST)
    const toastElement = document.getElementById('themeToast');
    if (toastElement) {
        const themeToast = new bootstrap.Toast(toastElement, {
            delay: 5000 // Displays for 5 seconds, then automatically hides
        });
        
        // Show the prompt shortly after the page finishes loading
        setTimeout(() => {
            themeToast.show();
        }, 1000); // 1 second delay after load
    }
});

// 2. SEARCH OVERLAY CONTROLLER
const openSearchBtn = document.getElementById('openSearchBtn');
const closeSearchBtn = document.getElementById('closeSearchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchBackdrop = document.getElementById('searchBackdrop');
const searchInput = document.getElementById('searchInput');

// Function to Open Search Overlay
function openSearch() {
    searchOverlay.classList.add('active');
    searchBackdrop.classList.add('active');
    // Automatically focus the input cursor for immediate typing
    setTimeout(() => searchInput.focus(), 300);
}

// Function to Close Search Overlay
function closeSearch() {
    searchOverlay.classList.remove('active');
    searchBackdrop.classList.remove('active');
    searchInput.value = ''; // Clears search field on close
}

// Event Listeners
openSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
});

closeSearchBtn.addEventListener('click', closeSearch);
searchBackdrop.addEventListener('click', closeSearch);

// Close overlay when pressing the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        closeSearch();
    }
});

// 3. PRODUCT GALLERY IMAGE SWITCHER
function changeImage(thumbnail) {
    // Update main photo src to match clicked thumbnail
    document.getElementById('mainProductImg').src = thumbnail.src;
    
    // Remove 'active' class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumb-img');
    thumbnails.forEach(img => img.classList.remove('active'));
    
    // Add 'active' class to clicked thumbnail
    thumbnail.classList.add('active');
}