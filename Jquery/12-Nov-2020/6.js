// JQ 

// Animation 

// syntax => $(selector).animate({parameters},speed,callback-funx) 


$(document).ready(function(){

  $('#btn1').click(function(){
     $('#box').animate({
                     left:'300px',
                     width:'300px',
                     height:'300px'
                    },4000)
  });
});



