$('document').ready(function() {
	$('#footer').mouseenter(function() {
			$(this).height(100);
	});
	$('#footer').mouseleave(function() {
		$(this).height(50);
		});
});