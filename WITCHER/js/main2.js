
var mySwiper = new Swiper(".swiper-container", {
  speed: 1000,  
  slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
});


var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
var menuactive = document.querySelector('.header-active');
var enciclopedy = document.querySelector('.link-dropdown-menu');
var dropdown = document.querySelector('.dropdown-menu');
menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('menu-button-active'); 
  menu.classList.toggle('header-active'); 
  menu.classList.remove('header-width');
  dropdown.classList.remove('dropdown-menu-active');
});

enciclopedy.addEventListener('click', function() {
  menu.classList.toggle('header-width');
  dropdown.classList.toggle('dropdown-menu-active');
});
