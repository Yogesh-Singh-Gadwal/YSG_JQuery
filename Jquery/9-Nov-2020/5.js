// JQ 
// val()

$(document).ready(function(){
 $('#sform').submit(function(){

 
    var name = $('#sname').val();
    var address = $('#sadd').val();
    var country = $('#scountry').val();

    console.log("Result is : ");
    console.log("Name  : "+name);
    console.log("Address : "+address);
    console.log("Country : "+country);
});
});
