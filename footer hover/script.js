$('document').ready(function() {
	$('.picture').mouseenter(function(){
		$('.hide1').show(1000);
	});
	$('.picture').mouseleave(function(){
		$('.hide1').hide(1000);
	});

	$('.picture').mouseenter(function(){
		$('.hide2').show(1000);
	});
	$('.picture').mouseleave(function(){
		$('.hide2').hide(1000);
	});
});