let navToggle = document.getElementById('nav-toggle');
let mobileMenu = document.getElementById('mobile-menu');
let closeNav = document.getElementById('close-nav');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
})

closeNav.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});