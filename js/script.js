/*ar swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});*/

/*var swiper = new Swiper(".alarmSwiper", {
  slidesPerView: 1,
  spaceBetween: 1,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    566: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});*/

var swiper = new Swiper(".sensSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".sensswiper-next",
    prevEl: ".sensswiper-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    566: {
      slidesPerView: 2,
    },

    1000: {
      slidesPerView: 3,
    },
  },
});
