$(".lang__text").on("click", function(e) {
  e.preventDefault;
  $(".lang-switch").toggleClass("active");
});

$(".header_menu").on("click", function(e) {
  e.preventDefault;
  $(this).toggleClass("active");
  $(".menu").toggleClass("active");
  $(".menu_btn").toggleClass("active");
  $(".menu_text").toggleClass("active");
});

$(".prices_item").on("click", function(e) {
  e.preventDefault;
  $(".prices_item").removeClass("active");
  $(this).toggleClass("active");
});

$(function() {
  $("input[name=phone]").mask("+38 (099) 999 99 99");
  $(".number_input").mask("+38 (999) 999-99-99");
});

$(".open-btn.max").on("click", function(e) {
  e.preventDefault;
  $(this)
    .parent()
    .toggleClass("active");
  $(".tarif_text.max").slideToggle();
});

$(".open-btn.double").on("click", function(e) {
  e.preventDefault;
  $(this)
    .parent()
    .toggleClass("active");
  $(".tarif_text.double").slideToggle();
});

$(".open-btn.partner").on("click", function(e) {
  e.preventDefault;
  $(this)
    .parent()
    .toggleClass("active");
  $(".tarif_text.partner").slideToggle();
});

$(".car_select-wrapper").on("click", function(e) {
  e.preventDefault;
  $(this).toggleClass("active");
});

$( function() {
  $( "#year-slider" ).slider({
    range: true,
    min: 2000,
    max: 2020,
    values: [ 2005, 2016 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );

$(".examples__slider").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1110,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(".reviews_slider").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1110,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
