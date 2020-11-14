// JQ  => EVENTS 

// mouseenter()

/*
$(document).ready(function(){
    $('h1').mouseenter(function(){    
       $('h1').addClass('first');   
    });
    });

// mouseleave()    

$(document).ready(function(){
    $('h2').mouseleave(function(){    
       $('h2').addClass('first');   
    });
    });

*/
$(document).ready(function(){
   $('h1,h2').mouseenter(function(){    
      $('h1,h2').addClass('first');   
   });
   $('h2').mouseleave(function(){    
      $('h2,h1').removeClass('first');   
   });
   });

   