$(document).ready(function(){

    $(document).scroll(function(){
      if($(document).scrollTop() > 1000){
         $(".bar").each(function(){
         var cible = $(this).attr('aria-valuenow');
         $(this).animate({width:cible+"%"}, 2000);
         });
      } else {
         if($(document).scrollTop() < 1000 || $(document).scrollTop() > 1800){
         $(".bar").each(function(){
         $(this).animate({width:0+"%"}, 20);
         });
       }
      }
    });

   $('button').click(function(){
         $('#toHide').toggle(1000);
   });
   $(".njlogo").click(function(){
         window.location.replace("index.html");
   });
     $("#box-1").auderoFlashingText({
        fadeOut: 1500,
        selection: "ascending"
     });
 


});

