

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


  /**
   * =============================================
   * CALLBACK
   * =============================================
   */

  /**
   *
   */
  const initMoreMainBtn = () => {
    $(".main__text-more").on('click', (ev) => {
      const parentElem = $(ev.currentTarget).closest(".main__text-wrapper");

      parentElem.find(".main__text-hide").slideToggle(450);
    });
  };


  /**
   * @initParallaxAnimation
   */
  const initParallaxAnimation = () => {
    const parallaxImg = document.querySelector("#main__bg");

    if(parallaxImg) {
      new Parallax(parallaxImg);
    }
  };


  /**
   *
   */
  const initDoctorViewBio = () => {
    $(".doctor__block-link").on('click', (ev) => {
      const elem = $(ev.currentTarget);

      elem.closest(".doctor__block").find(".doctor__block-info").slideDown('300');
    });
    $(".doctor__block-info a").on('click', (ev) => {
      const elem = $(ev.currentTarget);
      elem.closest(".doctor__block").find(".doctor__block-info").slideUp('300');
    });
  };



  /**
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initWebFontLoader();
    initPreventBehavior();
    // lib
    initSwiper();
    initSmoothScroll(".nav__link");
    initHamburger();
    // callback
    initMoreMainBtn();
    initParallaxAnimation();
    initDoctorViewBio();
  };
  initJquery();
});

