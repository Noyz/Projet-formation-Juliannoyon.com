$(document).ready(function(){
	$('img').mouseenter(function(){
		$('.hide').show('slow');
	});
	$('img').mouseleave(function(){
		$('.hide').hide('slow');
	});

	$('img').mouseenter(function(){
		$('this').find('.description .hide').fadeIn('slow');
	});
	$('img').mouseleave(function(){
		$('this').find('.description .hide').fadeOut('slow');
});

	});