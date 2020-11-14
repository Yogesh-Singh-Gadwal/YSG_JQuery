// JQ 
// Append and Prepend

$(document).ready(function(){

    $('#appendbtn').click(function(){        
        $('ol').append("<li>Contact</li>");
    });
    
    $('#prependbtn').click(function(){        
        $('ol').prepend("<li>Home</li>");
    });
});
