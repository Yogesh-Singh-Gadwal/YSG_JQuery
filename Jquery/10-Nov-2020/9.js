// JQ 

// CLONE()

$(document).ready(function(){

   $('#clonebtn1').click(function(){
    $('#box1 p').clone().appendTo('#box2');
   });

   $('#clonebtn2').click(function(){
    $('#box1 h1').clone().prependTo('#box2');
   });
   

});

