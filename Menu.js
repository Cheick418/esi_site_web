// main.js
document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar ul');
    var icon = document.getElementById('menu-icon');

    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        icon.src = 'image/menu-outline.svg'; // Change to hamburger icon
    } else {
        navbar.classList.add('active');
        icon.src = 'image/close-outline.svg'; // Change to close icon
    }
});
 