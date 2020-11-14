// JQ 

// Replacewith & replaceall 

// Replacewith
/*
$(document).ready(function(){

    $('#btn1').click(function(){
     $('#box p:first').replaceWith('<h2>This is replae with operation');
    });
 
 });
 */
 
 $(document).ready(function(){

    $('#btn1').click(function(){
     $('#box p:nth-child(4)').replaceWith('<h2>This is replae with operation');
    });
 
 });



 
 
 