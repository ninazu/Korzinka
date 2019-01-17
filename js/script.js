// Слайдер спец. предложений
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

// Фиксированная "шапка"
$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('.header-bottom').addClass("sticky");
	} else {
		$('.header-bottom').removeClass("sticky");
	}
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