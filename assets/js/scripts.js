var $ = jQuery.noConflict();
$mainHeaderHeight = $('.main-header').outerHeight();
$mobHeaderUpperHeight = $('.header-upper-part').outerHeight();

/* Script on ready
------------------------------------------------------------------------------*/
$( document ).ready( function() {
	/* Responsive Jquery Navigation */
	$( '.hamburger' ).click(function() {
		$( '.mobilenav' ).toggleClass( 'is-open' );
	} );
	$( '.mobilenav .nav-backdrop' ).click( function() {
		$( '.mobilenav' ).removeClass( 'is-open' );
	} );
	/* header sticky */
	$(window).scroll(function() {
		if ($(this). scrollTop() > 1){
			$('.main-header').addClass("sticky");
		} else{
			$('.main-header').removeClass("sticky");
		}
	});
	/* banner top space */
	$('.header-top-space').css('padding-top', $mainHeaderHeight);
	if ($(window).width() < 991) {
		$('.banner-slider-section, .common-inner-banner').css('margin-top', $mobHeaderUpperHeight);
	}
	/* banner slider */
	$('.banner-slider').owlCarousel({
		loop: true,
		nav:false,
		items:1,
		autoplay: {
			delay: 2000,
		},
	})
	/* jump to next section */
	$( '.banner-down-btn' ).on( 'click', function(e) {
		e.preventDefault();
		$( 'html, body' ).animate({ scrollTop: $($( this ).attr( 'href' )).offset().top - 80}, 500, 'linear' );
	});
	/* updates-slider */
	var updatesSlider = $('.updates-slider');
	updatesSlider.owlCarousel({
		loop:true,
		nav:true,
		navContainer: '.updates-custom-nav',
		autoplay: {
			delay: 2000,
		},
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
				dots: true,
			},
			768:{
				dots: false,
			},
			992:{
				items:3,
				dots: false,
			},
		}
	})
	$('.updates-second-prev').click(function() {
        updatesSlider.trigger('prev.owl.carousel');
    });
	$('.updates-second-next').click(function() {
        updatesSlider.trigger('next.owl.carousel');
    });
	/* products-slider */
	var productsSlider = $('.products-slider');
	productsSlider.owlCarousel({
		loop: true,
		nav:true,
		dots: false,
		navContainer: '.products-custom-nav',
		autoplay: {
			delay: 2000,
		},
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			992:{
				items:3
			}
		}
	})
	/* product-detail-slider */
	$(function(){
		var productDetailSlider = $('.product-detail-slider');
		productDetailSlider.owlCarousel({
			nav:true,
			dots: false,
			items: 1,
			navContainer: '.product-detail-custom-nav',
			onInitialized: counter,
			onTranslated: counter,
			loop: true,
			autoplay: {
				delay: 2000,
			},
		});
		function counter(event) {
			var items = event.item.count;
			var item  = event.item.index - 1;
			if(item > items) { item = item - items }
			$('.product-slider-counter').html(item+"/"+items)
		}
	});
	/* footer slider */
	var footerTopSlider = $('.footer-top-row');
	footerTopSlider.owlCarousel({
		nav:true,
		dots: false,
		mouseDrag: false,
		autoHeight: true,
		responsive:{
			0:{
				items:1,
				loop:true,
				autoplay: {
					delay: 2000,
				},
			},
			576:{
				items:2,
				loop:true,
				autoplay: {
					delay: 2000,
				},
			},
			768:{
				items:3,
				loop:true,
				autoplay: {
					delay: 2000,
				},
			},
			992:{
				items:4,
				loop:true,
				autoplay: {
					delay: 2000,
				},
			},
			1200:{
				items:5,
			},
		}
	})
	var footerBottomSlider = $('.footer-bottom-row');
	footerBottomSlider.owlCarousel({
		nav:true,
		dots: false,
		mouseDrag: false,
		autoHeight: true,
		responsive:{
			0:{
				items:1,
				loop:true,
				autoplay: {
					delay: 2000,
				},
			},
			575:{
				items:2,
				loop:true,
				autoplay: {
					delay: 2000,
				},
			},
			992:{
				items:3,
			},
		}
	});
	/* about-content-height */
	shareAboutBox = $('.share-about-box').outerHeight();
	shareAboutBtn = $('.share-about-btn').outerHeight();
	$('.about-middle-contect-inner').css('height', shareAboutBox-shareAboutBtn-33);
	lineclamp();
	/* button tag insert for animation */
	setTimeout(function () {
		$(".btn:not(.dropdown-toggle), .owl-prev, .owl-next, .breadcrumb-back, .pagination li a").addClass("btn-animation");
		$(".btn-animation").prepend("<strong></strong><strong></strong><strong></strong><strong></strong>");
		$(".owl-prev, .owl-next, .breadcrumb-back, .pagination li a").prepend("<strong></strong><strong></strong><strong></strong><strong></strong>");
	}, 200);
} );

/* Script on load
------------------------------------------------------------------------------*/
$( window ).on( 'load',function() {

} );

/* Script on scroll
------------------------------------------------------------------------------*/
$( window ).on( 'scroll',function() {

} );

/* Script on resize
------------------------------------------------------------------------------*/
$( window ).on( 'resize',function() {
	if ($(window).width() < 991) {
		$('.banner-slider-section, .common-inner-banner').css('margin-top', $mobHeaderUpperHeight);
	} else {
		$('.banner-slider-section, .common-inner-banner').css('margin-top', 0);
	}
	lineclamp();
} );

/* Script all functions
------------------------------------------------------------------------------*/
function lineclamp() {
	var lineheight = parseFloat($('.about-middle-contect-inner p').css('line-height'));
	var calc = parseInt(shareAboutBox/lineheight);
	$(".about-middle-contect-inner").css({"-webkit-line-clamp": "" + calc + ""});
}