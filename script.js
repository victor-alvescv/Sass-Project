// script.js
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 50) { // You can adjust the scroll position as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
