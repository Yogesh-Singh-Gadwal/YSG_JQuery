// JQ 
// mouseover / mouseout

// click 

$(document).ready(function(){
    $('h1').click(function(){
       $('h1').css('color','red');
    });
});


$(document).ready(function(){
    $('h1').mouseover(function(){
       $('h1').css('color','green');
    });
});


$(document).ready(function(){
    $('h1').mouseout(function(){
       $('h1').css('color','pink');
    });
});



