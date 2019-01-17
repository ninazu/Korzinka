// Слайдер "спец. предложений"
$('.main-slider').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true
});

// Слайдер "продукции"
$('.products-mob .products-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: false
});

// Слайдер "отзывов"
$('.testimotials-mob .testimotials-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true
});

// Слайдер "Instagram"
$('.instagram-mob .instagram-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: false
});

// Фиксированная "шапка"
$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('.header-bottom').addClass("sticky");
	} else {
		$('.header-bottom').removeClass("sticky");
	}
});

// Адаптивное меню
$(document).ready(function() {
	$('.menu-trigger').click(function() {
		$('nav ul').slideToggle(500);
	});

	$(window).resize(function() {
		if ($(window).width > 960 ) {
			$('nav ul').removeAttr('style');
		}
	});
});

// Плавные "якоря"
$(document).ready(function () {
	$("#logo, #main-menu, #scroll-top").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var	top = $(id).offset().top
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});