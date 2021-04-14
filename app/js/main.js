$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });
    $('.top__slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        fade: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
      });

});