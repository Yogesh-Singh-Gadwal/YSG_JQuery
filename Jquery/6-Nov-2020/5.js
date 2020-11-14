//JQ 


$(document).ready(function(){
    $(':input').click(function(){        
    $(this).addClass('first');   
    });
    $('div').click(function(){
        $(':input').removeClass('first');
    })
});
    