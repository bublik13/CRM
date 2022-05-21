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
  