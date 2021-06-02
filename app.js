
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

var loadCounter = 0;
const registrationForm = document.querySelector("#registration-form");

function loaded () {

    loadCounter += 1;

    if (loadCounter === 2) {

        registrationForm.style.height = "300px";

    }

}

// const contentWrapper = document.querySelector(".contentWrapper");

// async function fetchModule(moduleNo) {
//     const res = await fetch(`http://localhost:1337/modules/${moduleNo}`);
//     const module = await res.json();
//     console.log(module);
// }
