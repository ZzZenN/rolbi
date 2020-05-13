$(document).ready(function() {

   $(document).click(function (event) {
        var winWidth = $(window).innerWidth();

        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");

        if (_opened === true && !clickover.hasClass("nav-link") && !clickover.hasClass("nav-link-opener")) {
            $(".navbar-collapse").collapse('hide');
        }
    });

    $('.mobile-menu-bar__link').click(function(event) {
        event.preventDefault();
        $('.mobile-menu').toggleClass('mobile-menu--shown');
    });

    $('.nav-link-opener').click(function(event) {
        event.preventDefault();
        if ($(this).hasClass('nav-link-opener--open')) {
            $(this).removeClass('nav-link-opener--open');
            $(this).parent().parent().find('.nav-column').removeClass('nav-column--shown');
        } else {
            $(this).addClass('nav-link-opener--open');
            $(this).parent().parent().find('.nav-column').addClass('nav-column--shown');
        }
        
    });

    $('.index-slider').on('init', function(event, slick){
        $('.index-slider').css('display', 'block');
    });

    $('.index-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.index-slider__navigation-counter').html(i + '/' + slick.slideCount);
    });

	$('.index-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
        speed: 500,
        fade: true,
        arrows: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            }
        ]
	});

	$('li.one-lvl').hover(function() {
  		$('li.one-lvl ul').addClass('fadeInUp animated');
	}, function() {
		$('li.one-lvl ul').removeClass('fadeInUp animated');
	});

});