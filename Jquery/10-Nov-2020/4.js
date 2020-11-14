// JQ 
// Append and Prepend

$(document).ready(function(){

    $('#appendbtn').click(function(){        
        $('#box').append("<h2>MICKY JQUERY</h2>");
    });
    
    $('#prependbtn').click(function(){        
        $('#box').prepend("<h3>MICKY JAVASCRIPT</h3>");
    });
});
