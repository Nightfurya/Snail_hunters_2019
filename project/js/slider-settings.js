jQuery(document).ready(function($) {
  if ($(".autoplay").length != 0) {
    $(".autoplay").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><img src='../assets/button__left.svg' alt='#left'/></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><img src='../assets/button__right.svg' alt='#right'/></button>"
    });
  }
});
