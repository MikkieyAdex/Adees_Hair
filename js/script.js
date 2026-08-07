// ==========================================
// 1. DARK MODE TOGGLE & TOAST
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    if (toggleBtn) {
        const icon = toggleBtn.querySelector('i');

        function applyTheme(theme) {
            htmlElement.setAttribute('data-bs-theme', theme);
            if (icon) {
                if (theme === 'dark') {
                    icon.classList.replace('bi-moon-stars', 'bi-sun');
                    toggleBtn.classList.replace('btn-outline-secondary', 'btn-outline-light');
                } else {
                    icon.classList.replace('bi-sun', 'bi-moon-stars');
                    toggleBtn.classList.replace('btn-outline-light', 'btn-outline-secondary');
                }
            }
        }

        const savedTheme = localStorage.getItem('user-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme(systemPrefersDark ? 'dark' : 'light');
        }

        toggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('user-theme', newTheme);
        });

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('user-theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // Toast Notification
    const toastElement = document.getElementById('themeToast');
    if (toastElement && typeof bootstrap !== 'undefined') {
        const themeToast = new bootstrap.Toast(toastElement, { delay: 5000 });
        setTimeout(() => { themeToast.show(); }, 1000);
    }
});


// ==========================================
// 2. SEARCH OVERLAY CONTROLLER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const openSearchBtn = document.getElementById('openSearchBtn');
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchBackdrop = document.getElementById('searchBackdrop');
    const searchInput = document.getElementById('searchInput');

    // ONLY add event listeners if search elements actually exist on the current page!
    if (openSearchBtn && searchOverlay && searchBackdrop) {
        function openSearch() {
            searchOverlay.classList.add('active');
            searchBackdrop.classList.add('active');
            if (searchInput) setTimeout(() => searchInput.focus(), 300);
        }

        function closeSearch() {
            searchOverlay.classList.remove('active');
            searchBackdrop.classList.remove('active');
            if (searchInput) searchInput.value = '';
        }

        openSearchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openSearch();
        });

        if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);
        searchBackdrop.addEventListener('click', closeSearch);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                closeSearch();
            }
        });
    }
});


// ==========================================
// 3. PRODUCT GALLERY IMAGE SWITCHER
// ==========================================
// Left in global scope so HTML onclick="changeImage(this)" can find it
function changeImage(thumbnail) {
    const mainImg = document.getElementById('mainProductImg');
    if (mainImg && thumbnail) {
        mainImg.src = thumbnail.src;
        const thumbnails = document.querySelectorAll('.thumb-img');
        thumbnails.forEach(img => img.classList.remove('active'));
        thumbnail.classList.add('active');
    }
}


// ==========================================
// 4. SIGN IN / SIGN UP FORM TOGGLE
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    const signInSection = document.getElementById('signInSection');
    const signUpSection = document.getElementById('signUpSection');
    const switchToSignUp = document.getElementById('switchToSignUp');
    const switchToSignIn = document.getElementById('switchToSignIn');

    if (switchToSignUp && switchToSignIn && signInSection && signUpSection) {
        switchToSignUp.addEventListener('click', function (e) {
            e.preventDefault();
            signInSection.classList.add('d-none');
            signUpSection.classList.remove('d-none');
        });

        switchToSignIn.addEventListener('click', function (e) {
            e.preventDefault();
            signUpSection.classList.add('d-none');
            signInSection.classList.remove('d-none');
        });
    }
});


// ==========================================
// 5. SHOW / HIDE PASSWORD TOGGLE
// ==========================================
// Left in global scope so HTML onclick="togglePasswordVisibility(...)" can find it
function togglePasswordVisibility(inputId, iconContainer) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput && iconContainer) {
        const icon = iconContainer.querySelector('i');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            if (icon) icon.classList.replace('bi-eye', 'bi-eye-slash');
        } else {
            passwordInput.type = 'password';
            if (icon) icon.classList.replace('bi-eye-slash', 'bi-eye');
        }
    }
}