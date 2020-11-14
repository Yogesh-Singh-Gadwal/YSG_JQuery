// JQ 

// NOT Selector
/*
$(document).ready(function(){
    $(':header').click(function(){   
    //var data =  $(':header:not(h2)').html();
    //console.log(data);   
    $(':header:not(:header.one)').addClass('first');    
});
});
*/

/*
$(document).ready(function(){
    $('h2').click(function(){         
    $(':header:not(h2)').addClass('first');    
});
});
*/

/*
$(document).ready(function(){
    $(this).click(function(){         
    $(":header:not(h2)").addClass('first');    
});
});
*/


$(document).ready(function(){
    $(this).click(function(){         
    $(":header:not(h2:eq(1))").addClass('first');    
});
});


/*
<h1></h1>  index = 0

<h2></h2>  index = 0
<h2></h2>  index = 1
<h2></h2>  index = 2

<h3></h3>  index = 0

<h1></h1>  index = 1
*/