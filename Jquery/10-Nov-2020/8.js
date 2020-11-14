// JQ 

// AppendTo()  and PrependTo() 

// syntax 
/*
append() (or) prepend()
$(selector).append(content)

appendTo() (or) prependTo()
$(content).appendTo(selector)
*/

$(document).ready(function(){
 
     $('#appendTobtn').click(function(){
        $('<h3>Data : Micky</h3>').appendTo('#box')
     });

     $('#prependTobtn').click(function(){
        $('<h3>Data : DataCode</h3>').prependTo('#box')
     });
     

});


