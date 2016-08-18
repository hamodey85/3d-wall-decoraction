/*global $,jQuery */
jQuery(document).ready(function () {
	"use strict";

	$('.carousel').carousel();
	$('#carousel-example-generic').on('slide.bs.carousel', function () {
		var items       =  $('div.item:not(.active)');
		var itemschild  = items.children('.carousel-caption');

		if (itemschild.css('opacity') > 0) {
			itemschild.css('opacity','0');
		}

	})
	$('#carousel-example-generic').on('slid.bs.carousel', function () {
		
		
		var activate    =  $('div.item.active');
		var activeChild =  activate.children('.carousel-caption');
		if (activeChild.css('opacity')  == 0) {
			activeChild.animate({'opacity':'1'}, 500);
			activeChild.slideDown(400,function () {
							});
		}
});

	var navFixed = $('nav').offset();
	$(window).scroll(function(event) {
			var nav = $('nav').offset();

			if($(window).scrollTop() > nav.top+70 ){
				$('nav').addClass('navbar-fixed-top');
				$('.navbar-right').slideDown();
			}
			if($(window).scrollTop() < navFixed.top+70 ){
				$('nav').removeClass('navbar-fixed-top');
				$('.navbar-right').slideUp();
			}
	});
	
	



});