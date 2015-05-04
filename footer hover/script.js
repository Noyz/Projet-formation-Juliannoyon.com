$('document').ready(function() {
	$('.tier').mouseenter(function(){
		$(this).find('.petitTexte .hide').show('slow');
	});
	$('.tier').mouseleave(function(){
		$(this).find('.petitTexte .hide').hide('slow');
	});

	$('.tier').each(function(i){
	if(i % 3 == 0) {
		$(this).css({
			'clear' : 'both'
		});
	}
	});
});

