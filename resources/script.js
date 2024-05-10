let eventTarget = document.getElementById("theme");
let eventMobileMenu = document.getElementById('theme_mobile_menu');
let root = document.querySelector(":root");
let mybutton = document.getElementById("myBtn");

// Change themes
eventTarget.addEventListener('click', () => {
    root.classList.toggle('dark');
})

// Change themes in mobile version
eventMobileMenu.addEventListener('click', () => {
    root.classList.toggle('dark');
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if ((document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) && document.body.offsetWidth > 978) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}