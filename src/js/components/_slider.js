import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperTeam = new Swiper('.team-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Navigation, Pagination],


  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.team .btn--next',
    prevEl: '.team .btn--prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 2,
    },
  },
});
