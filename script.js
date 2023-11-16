const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const bMenu = document.querySelector('.menu');
const burguerMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive')
});

bMenu.addEventListener('click', () => {
    burguerMenu.classList.toggle('inactive')
})