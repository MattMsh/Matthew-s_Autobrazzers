
$(".lang__text").on("click", function(e) {
  e.preventDefault;
  $(this)
  	.parent()
  	.toggleClass("active");
});
  

$(".header_menu").on("click", function(e) {
  e.preventDefault;
  $(this).toggleClass("active");
  $(".menu").toggleClass("active");
  $(".menu_btn").toggleClass("active");
  $(".menu_text").toggleClass("active");
});

$(".main_prices .prices_item").on("click", function(e) {
  e.preventDefault;
  $(".main_prices .prices_item").removeClass("active");
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

$(window).resize(function() {
  if ( $(window).width() < 500 ) {
    $("a[href*='#']").on("click", function(e) {
      e.preventDefault;
      $(".menu").removeClass("active");
      $(".menu_btn").removeClass("active");
    });
  }
});

$( function() {
  $( "#year-slider" ).slider({
    range: true,
    min: 2000,
    max: 2020,
    values: [ 2005, 2016 ],
    slide: function( event, ui ) {
      ui.handle.innerHTML = '<span data-value="' + ui.value + '"  class="slider-range-value">' + ui.value + '</span>'
    },
    create: function(event, ui) {
      var ui_sl_handles = $(this).find('.ui-slider-handle');
      ui_sl_handles[0].innerHTML = '<span class="slider-range-value min-val">2005</span>';
      ui_sl_handles[1].innerHTML = '<span class="slider-range-value max-val">2016</span>';    
  }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );


$(document).mouseup(function (e){
var modalctr = $(".page-wrapper");
var modal = $(".case_of_lang");
if (!modal.is(e.target) && modal.has(e.target).length === 0){
modal.removeClass("active");
}
});

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
      breakpoint: 750,
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



