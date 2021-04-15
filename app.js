
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const height = window.innerHeight - 70;
    header.classList.toggle('scrolled', window.scrollY > height);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
