// script.js

// Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Text Animation for "I'm a" section
const textAnimation = document.querySelector('.text-animation span');
const roles = ["Web Developer", "Graphic Designer", "Frontend Developer"];
let index = 0;

function changeText() {
    textAnimation.textContent = roles[index];
    index = (index + 1) % roles.length;
}

setInterval(changeText, 3000); // Change text every 3 seconds
