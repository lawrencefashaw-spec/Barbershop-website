// =========================
// File: js/main.js
// Vintage Barbershop Project
// =========================

// ----- DOM Elements -----
const yearEl = document.getElementById('year');
const menubtn = document.getElementById('menubtn');
const mobilemenu = document.getElementById('mobilemenu');
const ctaBtn = document.getElementById('ctaBtn');
const callBtn = document.getElementById('callBtn');
const phoneLink = document.getElementById('phoneLink');
const heading = document.getElementById('heroHeading');
// ----- Helpers / Functions -----
// Update footer year automatically
const setCurrentYear = () => {
    const now = new Date();
    const year = now.getFullYear();
    yearEl.textContent = year;
};
// Toggle mobile menu visibility
let isMenuOpen = false;
const toggleMobileMenu = () => {
    if (!mobilemenu) return;
    if (isMenuOpen === false) {
        mobilemenu.classList.add('is-open');
        isMenuOpen = true;
    } else {
        mobilemenu.classList.remove('is-open');
        isMenuOpen = false;
    }
};
// Close mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
    if (!mobilemenu) return;
    mobilemenu.classList.remove('is-open');
    isMenuOpen = false;
};
// Reusable function with parameters (practice pattern)
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};
// ----- Event Listeners -----

// 1) Set year on page load
setCurrentYear();
// 2) Hamburger menu button toggle
if (menubtn) {
    menubtn.addEventListener('click', toggleMobileMenu);
}
// 3) Close mobile menu when a link is clicked
if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
        if (event.target.tagName === 'A') {
            closeMobileMenu();
        }
    });
}
// 4) CTA Button: "Book Now" (placeholder behavior)
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        updateHeadingText("Booking coming next - great choice!");
    });
}
// 5) Call Button: try to use the phone number in the footer
if (callBtn) {
    callBtn.addEventListener('click', () => {
        if (phoneLink) {
            updateHeadingText("call us at " + phoneLink.textContent);
            } else {
                updateHeadingText("call feature coming next!");
            }
    });
}
    