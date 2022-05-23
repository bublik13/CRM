import {testFunction} from './scripts/test';
testFunction();

// window.onscroll = function() {
//     checkMarginToTop();
// };

// var header = document.getElementById(".header__top");


// function checkMarginToTop() {
//         if (window.pageYOffset > header) {
//         header.classList.add(".header__top");
//     }
// }

const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10
  });
  

   
  const menu = document.querySelector('.js-menu');
  const nav = document.querySelector('.js-nav');
  const profile = document.querySelector('.js-profile');
  const profileImg = document.querySelector('.js-profile-img');
  const burger = document.querySelector('.js-burger');
  const logo = document.querySelector('.js-logo');
  const grid = document.querySelector('.js-grid');
  const container = document.querySelector('.js-container');

  burger.addEventListener('click', ()=>{  
  burger.classList.toggle('burger--active');
  logo.classList.toggle('logo__img-name--active');
  nav.classList.toggle('nav--active');
  profile.classList.toggle('profile--active');
  profileImg.classList.toggle('profile-img--active');
  menu.classList.toggle('menu--active');
  grid.classList.toggle('grid--active');
  container.classList.toggle('container--active');
  });
