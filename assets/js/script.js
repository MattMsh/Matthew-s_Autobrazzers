
$('.lang__text').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('active');
	$('.lang-switch').toggleClass('active');
})

$('.header_menu').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('active');
	$('.menu').toggleClass('active');
	$('.menu_btn').toggleClass('active');
	$('.menu_text').toggleClass('active');
})

$(function(){
	$("input[name=phone]").mask("+38 (099) 999 99 99");
  });

$('.examples__slider').slick({
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
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