

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
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initWebFontLoader();
    initPreventBehavior();
    // lib
    initSwiper();
    initPopups();
    initSmoothScroll(".nav__link");
    initHamburger();
    // callback
    initMoreMainBtn();
    initParallaxAnimation();
  };
  initJquery();
});

