
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