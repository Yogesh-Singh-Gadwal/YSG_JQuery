// JQ 

// Animation 

// syntax => $(selector).animate({parameters},speed,callback-funx) 

/*
$(document).ready(function(){

  $('#btn1').click(function(){
     $('#box').animate({
                     left:'100px'
                    })
  });

});
*/




$(document).ready(function(){

    $('#btn1').mouseover(function(){
       $('#box').animate({
                       left:'150px'
                      },2000)
    });
    $('#btn1').mouseout(function(){
        $('#box').animate({
                        left:'20px' 
                       },2000)
     });
     
  });

