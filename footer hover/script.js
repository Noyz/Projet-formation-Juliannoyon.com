$('document').ready(function() {
	$(".animation").mouseenter(function() {
		$(this).animate({
           height: '+=120px'
	});
		$(this).css("top", "80px"); 
});
	$(".animation").mouseleave(function(){
		$(this).animate({
			height: '-=150px'
		});
		$(this).css("top", "190px" );
	});
});