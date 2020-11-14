// JQ 

// Header Selector
/*
$(document).ready(function(){
    $('h1,h2,h3,h4,h5').click(function(){  
    $(this).addClass('first')     
});
});
*/

$(document).ready(function(){
    $(':header').click(function(){  
    $(this).addClass('first')     
});
});