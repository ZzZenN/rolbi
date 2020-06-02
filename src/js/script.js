$(document).ready(function() {

    $('.movie-detail__other-info-link').click(function(event) {
        if ($(this).hasClass('movie-detail__other-info-link--opened')) {
            $('.movie-detail__top-left').removeClass('col-lg-8');
            $('.movie-detail__top-left').addClass('col-lg-4');
            $('.movie-detail__top-right').removeClass('col-lg-16');
            $('.movie-detail__top-right').addClass('col-lg-20');
            $(this).removeClass('movie-detail__other-info-link--opened');
            $('.movie-detail__other-info').removeClass('movie-detail__other-info--shown');
            $(this).html('Подробнее о фильме <i class="far fa-chevron-down"></i>');
        } else {
            $('.movie-detail__top-left').removeClass('col-lg-4');
            $('.movie-detail__top-left').addClass('col-lg-8');
            $('.movie-detail__top-right').removeClass('col-lg-20');
            $('.movie-detail__top-right').addClass('col-lg-16');
            $(this).addClass('movie-detail__other-info-link--opened');
            $('.movie-detail__other-info').addClass('movie-detail__other-info--shown');
            $(this).html('Свернуть <i class="far fa-chevron-up"></i>');
        }
    });

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
    
    var scheduleSwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 0,
        freeMode: true,
        slidesPerView: 'auto'
    });

    $('.select-day-block__link').click(function(event) {
        event.preventDefault();
        var selectDayDropdown = $(this).parent().find('.select-day-block__dropdown');
        if ($(selectDayDropdown).hasClass('select-day-block__dropdown--active')) {
            $(selectDayDropdown).removeClass('select-day-block__dropdown--active');
        } else {
            $(selectDayDropdown).addClass('select-day-block__dropdown--active');
        }
    });

    $('.select-day-block__dropdown-link').click(function(event) {
        $(".select-day-block__dropdown").removeClass('select-day-block__dropdown--active');
    });

    $(document).mouseup(function(e) {
        var container = $(".select-day-block__dropdown");
        if (!container.is(e.target) && container.has(e.target).length === 0) container.removeClass('select-day-block__dropdown--active');
    });

});