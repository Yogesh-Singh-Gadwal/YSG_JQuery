// JQ 
// ON()  and OFF()

// syntax 
/*
$('tag').on({
               event1:function(){},
               event2:function(){}
            })
*/

$(document).ready(function(){
   $('#box').on("mouseover mouseout",function(){
       $(this).toggleClass('boxcolor')
   })
});