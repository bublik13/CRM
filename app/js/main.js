import {testFunction} from './scripts/test';
testFunction();

  const swiper = new Swiper('.slider__swiper', {
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

  const swiperStatistic = new Swiper('.statistic__swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: "3",
    spaceBetween: 26,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });