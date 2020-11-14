// JQ 

// Position and Offset ()

$(document).ready(function(){

    $('#btn1').click(function(){
 
         var data = $('#box h2').position()
         console.log("TOP position VALUE IS : "+data.top);
         console.log("Left position VALUE IS : "+data.left);
       
    });
 
    $('#btn2').click(function(){
 
        var data2 = $('#box h2').offset()
        console.log("TOP offset  VALUE IS : "+data2.top);
        console.log("Left offset VALUE IS : "+data2.left);
      
   });


 });