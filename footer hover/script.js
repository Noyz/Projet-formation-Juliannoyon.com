$('document').ready(function() {
	$('.row1').mouseenter(function(){
		$('.hide').show(1000);
	});
	$('.tier').mouseleave(function(){
		$('.hide').hide(1000);
	});
});