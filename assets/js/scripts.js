var $ = jQuery.noConflict();
$mainHeaderHeight = $('.main-header').outerHeight();

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
	$('.header-top-space').css('padding-top', $mainHeaderHeight);
	/* header sticky */
	$(window).scroll(function() {
		if ($(this). scrollTop() > 1){
			$('.main-header').addClass("sticky");
		} else{
			$('.main-header').removeClass("sticky");
		}
	});
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
		$( 'html, body' ).animate({ scrollTop: $($( this ).attr( 'href' )).offset().top - $mainHeaderHeight + 120}, 500, 'linear' );
	});
	/* updates-slider */
	var updatesSlider = $('.updates-slider');
	updatesSlider.owlCarousel({
		nav:true,
		dots: false,
		navContainer: '.updates-custom-nav',
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
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
			600:{
				items:2
			},
			1000:{
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
			autoplay: true,
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

} );

/* Script all functions
------------------------------------------------------------------------------*/
