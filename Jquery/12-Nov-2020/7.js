// JQ 

// Animation 

// syntax => $(selector).animate({parameters},speed,callback-funx) 


$(document).ready(function(){

    $('#btn1').click(function(){
       $('#box').animate({
                       left:'+=100px',                       
                      },2000)
    });
  });
  
  
  
  