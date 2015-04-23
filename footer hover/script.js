$('document').ready(function() {
	$('.row1').mouseenter(function(){
		$('.hide > .tier').show(1000);
	});
	$('.tier1').mouseleave(function(){
		$('.tier1 >.hide').hide(1000);
	});
});