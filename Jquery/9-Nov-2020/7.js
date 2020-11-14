// JQ 

// addclass, removeclass, toggleclass 

$(document).ready(function(){

    $('#badd').click(function(){
    $('#box').addClass('green');
    });

    $('#bremove').click(function(){
    $('#box').removeClass('green');
    });
    
    $('#btoggle').click(function(){
    $('#box').toggleClass('green');
    });

});

