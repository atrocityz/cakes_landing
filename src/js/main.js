import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
