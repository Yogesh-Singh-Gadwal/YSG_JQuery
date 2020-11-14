// JQ 

// slideUp, SlideDown, slideToggle

/*
$(document).ready(function(){

   $('#btn1').click(function(){ 
      $('#box').slideUp();
   });   
   $('#btn2').click(function(){ 
    $('#box').slideDown();
 });

});
*/


/*
$(document).ready(function(){

    $('#btn1').click(function(){ 
       $('#box').slideUp(3000);
    });   
    $('#btn2').click(function(){ 
     $('#box').slideDown(3000);
  });
 
 });
*/



/*
$(document).ready(function(){

    $('#btn1').mouseover(function(){ 
       $('#box').slideUp(3000,function(){
           alert("To Know More PLz Login..")
       });
    });   
    $('#btn1').mouseout(function(){ 
     $('#box').slideDown(3000);
  });
 
 });
*/





$(document).ready(function(){

    $('#btn3').click(function(){ 
       $('#box').slideToggle(3000,function(){
           alert("TO Know More PLz Login..")
       });
    });   
 
 });


