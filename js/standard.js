// bxslider
$(document).ready(function () {
    $('#hp-slider').bxSlider({
        controls: false,
        mode: 'fade',
        speed: 1000,
        pause: 5000,
        auto: true,
        pager: false,
        infiniteLoop: true
    });
});

$(window).load(function () {
	var windowWidthSlide = $(window).width();
	var windowHeightSlide = $(window).height();
	alert(windowWidthSlide);
    alert(windowHeightSlide);
    $('.slider #hp-slider img').css({
    	'width': windowWidthSlide,
    	'height': windowHeightSlide,
    	'position': fixed,
    	'top': 0,
    	'left': 0,
    	'display': block
    });
    
});