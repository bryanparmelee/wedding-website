let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
const navbar = document.getElementById("navbar");


navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

const fullBox = document.getElementById('full-box');
fullBox.addEventListener('click', closeFull());

const full = document.getElementById('full');

function openFull(pic) {
  let regex = /-tb/
  full.src = pic.replace(regex, '');
  fullBox.style.display = "flex";

};

function closeFull() {
  fullBox.style.display = "none";
};


// let lastScrollTop = 0;
// window.onscroll = () => {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop || scrollTop < 0 ) {
//     navbar.style.top = "-80px";
//   } else {
//     navbar.style.top = "0";
//   }
//   lastScrollTop = scrollTop;
// };