// Event 

// JQ 

// KEY UP ->  to get data dynamic without any button or event

$(document).ready(function(){
    $('#status').keyup(function(){
    var data = $('#status').val().length
       

    if(data < 4)
    {
        $('.first').text('week'); 
        $('.first').addClass('red');
    }
    else if(data >4 & data <8)
    {
        $('.first').text('good'); 
        $('.first').addClass('orange');
    }
    else if(data >8)
    {
        $('.first').text('strong'); 
        $('.first').addClass('green');
    }
    
});
});

// @#& , A_Z ,a-z, 0-9 