// 1. DARK MODE TOGGLE LOGIC
const toggleBtn = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        icon.classList.replace('bi-moon-stars', 'bi-sun');
        toggleBtn.classList.replace('btn-outline-secondary', 'btn-outline-light');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        icon.classList.replace('bi-sun', 'bi-moon-stars');
        toggleBtn.classList.replace('btn-outline-light', 'btn-outline-secondary');
    }
});

// 2. PRODUCT GALLERY IMAGE SWITCHER
function changeImage(thumbnail) {
    // Update main photo src to match clicked thumbnail
    document.getElementById('mainProductImg').src = thumbnail.src;
    
    // Remove 'active' class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumb-img');
    thumbnails.forEach(img => img.classList.remove('active'));
    
    // Add 'active' class to clicked thumbnail
    thumbnail.classList.add('active');
}