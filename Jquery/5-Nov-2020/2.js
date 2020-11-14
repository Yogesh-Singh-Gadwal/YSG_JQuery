// JQ 

// ADD-Class

$(document).ready(function(){

    $('#data1').click(function(){  
    $('#box').removeClass("sec");
    $('#box').removeClass("third");
    $('#box').addClass("first");   
        
});
    $('#data2').click(function(){ 
    $('#box').removeClass("first")
    $('#box').removeClass("third")            
    $('#box').addClass("sec");  
  
});
    $('#data3').click(function(){  
    $('#box').removeClass("sec")
    $('#box').removeClass("first")   
    $('#box').addClass("third");   
     
});

});




