// JQ 

// FadeIn , fadeOut, fadetoggle , fadeTo
/*
$(document).ready(function(){

   $('#btn1').click(function(){ 
      $('#box').fadeOut();
   });   
   $('#btn2').click(function(){ 
    $('#box').fadeIn();
 });
});
*/


/*
$(document).ready(function(){

   $('#btn1').click(function(){ 
      $('#box').fadeOut(3000);
   });   
   $('#btn2').click(function(){ 
    $('#box').fadeIn(2000);
 });
 
});
*/


/*
$(document).ready(function(){

    $('#btn1').click(function(){ 
       $('#box').fadeOut(3000,function(){
           alert("Now it works..");
       });
    });   
    $('#btn2').click(function(){ 
     $('#box').fadeIn(2000);
  });
  
 });
*/



/*
$(document).ready(function(){

    $('#btn3').click(function(){ 
       $('#box').fadeToggle(3000,function(){
           alert("Now it works..");
       });
    });   
  
 });
*/



// Syntax    fadeTo(time,opacity,funx)

 $(document).ready(function(){

    $('#btn3').click(function(){ 
       $('#box').fadeTo(3000,0.2,function(){ 
          //document.write("Hello Micky");          
       });
    });   
  
 });




