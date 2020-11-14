// Event 

// JQ 

// KEY UP ->  to get data dynamic without any button or event

$(document).ready(function(){
    $('#status').keyup(function(){
    var data = $('#status').val().length
    $('.first').text(data)    
    
    });
    });