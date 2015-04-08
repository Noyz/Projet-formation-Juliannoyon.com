
$(document).ready(function(){
    $("button").click(function(){
        $("li").hide(1000);
    });
   
});
		
		$("li").hide(function(){
			 $("button").click(function(){
        $("li").show(1000);
    });
			 });