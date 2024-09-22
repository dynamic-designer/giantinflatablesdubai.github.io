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
		nav:false,
		items:1,
		// autoplay:true,
		loop: true
	})
	/* jump to next section */
	$( '.banner-down-btn' ).on( 'click', function(e) {
		e.preventDefault();
		$( 'html, body' ).animate({ scrollTop: $($( this ).attr( 'href' )).offset().top - $mainHeaderHeight + 45}, 500, 'linear' );
	});
	/* updates-slider */
	var updatesSlider = $('.updates-slider');
	updatesSlider.owlCarousel({
		loop:true,
		nav:true,
		navContainer: '.updates-custom-nav',
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
		nav:true,
		dots: false,
		navContainer: '.products-custom-nav',
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
			// autoplay: true,
			loop: true,
			onInitialized: counter,
			onTranslated: counter
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
				items:1
			},
			576:{
				items:2
			},
			768:{
				items:3
			},
			992:{
				items:4
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
				items:1
			},
			575:{
				items:2
			},
			992:{
				items:3,
			},
		}
	})

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
} );

/* Script all functions
------------------------------------------------------------------------------*/
