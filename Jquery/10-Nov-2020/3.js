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

    $('#box').on({
                 "click":function(){
                                     $('h1').css('color','red');
                                   },
                 "mouseover":function(){
                                    $('p').css({
                                        'color':'green',
                                        'font-size':'40px'
                                              });
                                      },
            "mouseout":function(){
                $('p').css('color','powderblue');
            }                                        
                 })

     $('#btop').click(function(){
       $('#box').off("mouseover mouseout")
     });            
});

