// JQ 
// hasClass()

/*
$(document).ready(function(){

    $('#btn1').click(function(){
       
        console.log($('#box').hasClass('test'));
        console.log($('#box h1').hasClass('micky'));
    });

});
*/

$(document).ready(function(){
    $('#btn1').click(function(){
    var data = $('#box').hasClass('test');
    if(data == true)
    {
        console.log("We can Perform Operation ")
    }
    else{
        console.log("Data is not Present..")
    }
});
});
