$(function() {
	// animation for search form
	$(".burger").on("click", function (params) {
		$("nav").toggleClass("active")
		$(".burger").toggleClass("active")
	})

	// move background on first screen slider 
	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

	function moveBackground() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;
		
		translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.05)';

		$('.bg1').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});
		$('.bg2').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});

		window.requestAnimationFrame(moveBackground);
		}

		$(window).on('mousemove click', function(e) {

		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (10 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (5 * lMouseY) / 100;

	});

	moveBackground();


	// first screen slider 

	$('.first_screen_slider').slick({
		dots: false,
		infinite: false,
		arrows: false,
		speed: 1500,
		autoplay: true,
		infinite: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		waitForAnimate: true,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        useTransform: true
	  });


	//   product slider 
	$(".product_slider").slick({
		dots: false,
		infinite: true,
		arrows: true,
		speed: 1500,
		prevArrow: '<span class="slick-prev"> <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="122px" height="227px"> <path fill-rule="evenodd" d="M121.999,113.674 L8.513,226.999 L0.001,218.499 L105.150,113.500 L0.001,8.500 L8.513,0.001 L121.999,113.325 L121.824,113.500 L121.999,113.674 Z"/></svg></span>',
		nextArrow: '<span class="slick-next"> <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="122px" height="227px"> <path fill-rule="evenodd" d="M121.811,218.326 L113.326,226.811 L0.189,113.674 L0.363,113.500 L0.189,113.326 L113.326,0.189 L121.811,8.674 L16.985,113.500 L121.811,218.326 Z"/></svg></span>',
		slidesToShow: 1,
		autoplaySpeed: 3000,
		waitForAnimate: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
		useTransform: true,
		responsive: [
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				variableWidth: true
			  }
			}
		  ]
	  });

// languages 
	  $(".languages .current").on("click", function (params) {
		  $(".languages").toggleClass("active");
		 
		})
		var currentLang;
	  $(".dropdown_lang li img").on("click", function (params) {
		  currentLang = $(this).attr("src");
		  $(".languages .current img").attr("src", currentLang);
		  $(".languages").removeClass("active");
	  })
});
