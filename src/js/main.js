import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  spaceBetween: 50,
  slidesPerView: 1,
  allowTouchMove: false,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
