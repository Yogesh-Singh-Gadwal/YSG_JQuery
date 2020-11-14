// JQ  => EVENTS 

// contextmenu()  => on right click

$(document).ready(function(){
    $('h1').contextmenu(function(){    
       $('h1').addClass('first');   
    });
    });
    