jQuery(document).ready(function(){
	'use strict';

	$('.btn-to-target').on('click', function(e) {
		e.preventDefault();
		var target = $($(this).attr('href'));
		var scrollTo = target.offset().top - 100;
		
		$('html, body').animate({
			scrollTop: scrollTo
		}, 400);
		
	});

	var $navbar             = $('.navbar');
	var $langHolder 		= $navbar.find('.language-dropdown-holder');
	var $langDropdown 		= $langHolder.find('.language_select');
	var $langDropdownBtn 	= $langHolder.find('.language_dropdown');

	$langDropdownBtn.on('click', function(evt) {
		evt.preventDefault();
		$langDropdown.slideToggle(200);
		$langHolder.toggleClass('open');
	});

	$navbar.on('mouseleave', function(evt) {
		if($langHolder.hasClass('open')) {
			$langDropdown.slideUp(200);
			$langHolder.removeClass('open');
		}
	});

});