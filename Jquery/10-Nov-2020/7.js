// JQ 
// Remove() and Empty()

$(document).ready(function(){

    $('#emptybtn').click(function(){        
        $('h1').empty();
    });
    
    $('#removebtn').click(function(){        
        $('h1').remove();
    });
});

