// JQ 
// After() and Before()

$(document).ready(function(){

    $('#afterbtn').click(function(){        
        $('ol').after("Contact");
    });
    
    $('#beforebtn').click(function(){        
        $('ol').before("Home");
    });
});
