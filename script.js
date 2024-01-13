// variables
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

const name = document.getElementById('input-name');
const email = document.getElementById('input-email');
const message = document.getElementById('input-message');
const submit = document.getElementsByClassName('form-contact')[0];

const navLogo = document.querySelector('#navbar-logo');

// hamburger icon
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.navbar-menu');
  
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  });

  // hamburger menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};