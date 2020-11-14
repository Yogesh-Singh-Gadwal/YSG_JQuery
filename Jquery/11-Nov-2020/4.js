// JQ 

// wrap()  and unwrap()

$(document).ready(function(){

   $('#btn1').click(function(){
      $('#box p').wrap('<div id="test"></div>')
   });

   $('#btn2').click(function(){
    $('#box p').unwrap()
 });
 
});
