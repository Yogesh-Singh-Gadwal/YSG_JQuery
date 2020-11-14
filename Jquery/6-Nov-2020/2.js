//JQ 


$(document).ready(function(){
    $('#one').click(function(){        
    $('p[id=two]').addClass('third');
    });
    });


$(document).ready(function(){
    $('#one').click(function(){        
    $('p[class=any]').addClass('sec');
    });
    });


$(document).ready(function(){
    $('#one').click(function(){        
    $('p[class]').addClass('first');
    });
    });


