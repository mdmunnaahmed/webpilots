"user strict";

document.addEventListener('DOMContentLoaded', () => {
  const menuToggler = document.querySelector('.menu-toggler');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (menuToggler && navMenu) {
    // Toggle menu on button click
    menuToggler.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggler.classList.toggle('active');
    });

    // Close menu when any link is clicked
    if (navLinks.length) {
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          menuToggler.classList.remove('active');
        });
      });
    }
  }
});



$(".professionals-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 60, // default
  mobile: false, // default
  live: true, // default
});
wow.init();
