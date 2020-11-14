// JQ 

// Height and width 

$(document).ready(function(){

    $('#btn1').click(function(){

console.log("WIDTH : "+$('#box').width());         
console.log("INNERWIDTH : "+$('#box').innerWidth());
console.log("OUTERWIDTH : "+$('#box').outerWidth());
console.log("OUTERWIDTH(True) : "+$('#box').outerWidth(true));
    });

});
