document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.navbar-menu');
  
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  });