

/**
 * @name initSwiper
 * @description initialize Swiper
 */
const initSwiper = () => {
  // const mySwiper = new Swiper('.swiper-container', {
  //   // Optional parameters
  //   wrapperClass: "swiper-wrapper",
  //   slideClass: "swiper-slide",
  //   direction: 'horizontal', // 'horizontal' or 'vertical'
  //   loop: true,
  //   watchOverflow: true,
  //   normalizeSlideIndex: true,
  //   grabCursor: true,
  //   freeMode: false,
  //   effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
  //   // autoplay: {
  //   //   delay: 5000,
  //   // },
  //   // Disable preloading of all images
  //   // preloadImages: false,
  //   // Enable lazy loading
  //   // lazy: {
  //   //   loadPrevNext: true,
  //   // },
  //
  //   // off touch for destop
  //   // touchMoveStopPropagation:false,
  //   // simulateTouch : false,
  //   // allowSwipeToNext: true,
  //   // allowSwipeToPrev: true,
  //   // allowPageScroll: "auto ",
  //
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   breakpoints: {
  //     // when window width is <= 320px
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 10
  //     },
  //     // when window width is <= 480px
  //     480: {
  //       slidesPerView: 2,
  //       spaceBetween: 20
  //     },
  //     // when window width is <= 640px
  //     640: {
  //       slidesPerView: 3,
  //       spaceBetween: 30
  //     }
  //   },
  //
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     // renderBullet: function (index, className) {
  //     //   return `
  //     //     <div class="${className}">
  //     //       ${index}
  //     //     </div>
  //     //   `;
  //     // }
  //   },
  //
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  //
  //   on: {
  //     "slideChange": function () {
  //       console.log("slideChange");
  //     },
  //   }
  // });

  const mySwiperContacts = new Swiper('.swiper-container.swiper-container--contacts', {
    // Optional parameters
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    autoplay: {
      delay: 3500,
    },
    speed: 550,
    slidesPerView: 1,
    spaceBetween: 0
  });

  const mySwiperTestimonials = new Swiper('.swiper-container.swiper-container--testimonials', {
    // Optional parameters
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'fade', // "slide", "fade", "cube", "coverflow" or "flip"
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3500,
    },
    speed: 750,
    slidesPerView: 1,
    spaceBetween: 0
  });

  const mySwiperFactilities = new Swiper('.swiper-container.swiper-container--factilities', {
    // Optional parameters
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    autoplay: {
      delay: 5000,
    },
    speed: 550,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  mySwiperFactilities.el.addEventListener("mouseenter", function() {
    mySwiperFactilities.autoplay.stop();
  }, false);

  mySwiperFactilities.el.addEventListener("mouseleave", function() {
    mySwiperFactilities.autoplay.start();
  }, false);
};
