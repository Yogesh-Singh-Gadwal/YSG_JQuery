// JQ 

/*
// it will work for all tags
$(document).ready(function(){
$('h1').css('color','green');
});
*/

// it will work for particular tags
$(document).ready(function(){
    $('h1#two,h1#one').css('color','green');
    $('h1#three').css('color','red');
});


$(document).ready(function(){
        $('div').css('color','orange');
        $('div').css('font-size','70px');
        $('div').css('border','2px solid blue'); 
       
});