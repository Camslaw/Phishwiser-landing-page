// variables
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

const name = document.getElementById('input-name');
const email = document.getElementById('input-email');
const message = document.getElementById('input-message');
const submit = document.getElementsByClassName('form-contact')[0];

const navLogo = document.querySelector('#navbar-logo');

// hamburger menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// highlight bar positioning
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const howitworksMenu = document.querySelector('#howitworks-page');
    const benefitsMenu = document.querySelector('#benefits-page');
    const aboutusMenu = document.querySelector('#aboutus-page');
    const contactMenu = document.querySelector('#contact-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    if (window.innerWidth > 1186 && scrollPos < 714) {
        homeMenu.classList.add('highlight');
        howitworksMenu.classList.remove('highlight');
        benefitsMenu.classList.remove('highlight');
        aboutusMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
      } else if (window.innerWidth > 1186 && scrollPos < 1700) {
        howitworksMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        benefitsMenu.classList.remove('highlight');
        aboutusMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
      } else if (window.innerWidth > 1186 && scrollPos < 2650) {
        benefitsMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        howitworksMenu.classList.remove('highlight');
        aboutusMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
      } else if (window.innerWidth > 1186 && scrollPos < 3400) {
        aboutusMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        howitworksMenu.classList.remove('highlight');
        benefitsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
      } else if (window.innerWidth > 1186 && scrollPos < 8000) {
        contactMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        howitworksMenu.classList.remove('highlight');
        benefitsMenu.classList.remove('highlight');
        aboutusMenu.classList.remove('highlight');
        return;
      }

      if ((elem && window.innerWIdth < 1186 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
      }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// contact form emails
submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Clicked");

    let emailbody = `
    <b>Name: </b>${name.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Message: </b>${message.value}
    <br>
    
    `

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hello@phishwiser.com",
        Password : "7514CEE6C83FE72215FD4B2FD3998295FD59",
        To : 'hello@phishwiser.com',
        From : "hello@phishwiser.com",
        Subject : "New Inquiry",
        Body : emailbody
    }).then(
      message => alert(message)
    );
})