//
const serviceBoxSwiper = new Swiper('.services .box .swiper', {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 10,
  slidesPerGroup: 1,
  centeredSlides: false,

   // Responsive breakpoints
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,

    },
    // when window width is >= 480px
    767: {
      slidesPerView: 1.5,

    },
    // when window width is >= 640px
    992: {
      slidesPerView: 2.5,

    },
    1200: {
      slidesPerView: 3.5,

    },
    1300: {
      slidesPerView: 4.5,

    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



///








// advantages start

const advSwiper = new Swiper(".advantages .swiper", {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// advantages end



//programmes start
const programmesSwiper = new Swiper('.programmes .swiper', {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: false,


   // Responsive breakpoints
   breakpoints: {
    992: {
      slidesPerView: 1.5,

    },
    1200: {
      slidesPerView: 1.6,

    },
    1400: {
      slidesPerView: 1.7,

    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});