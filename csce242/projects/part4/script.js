// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerMenu.addEventListener('click', () => {
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    });
});
