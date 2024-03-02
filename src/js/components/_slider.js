import Swiper, {
  Navigation,
  Pagination,
} from 'swiper';

const swiperProduct = new Swiper('.product__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Navigation, Pagination],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.product .btn--next',
    prevEl: '.product .btn--prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});