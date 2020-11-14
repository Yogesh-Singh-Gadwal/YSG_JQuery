// JQ 
// CSS METHOD => css()
/*
$(document).ready(function(){
 
   $('#bdata').click(function(){

    $('#box').css('background-color','red');

   });

});
*/

$(document).ready(function(){
 
    $('#bdata').click(function(){ 
     $('#box').css({
                     'background-color':'red',
                     'font-size':'50px',
                     'border':'10px dotted green'
                   });

    });
 
 });

 