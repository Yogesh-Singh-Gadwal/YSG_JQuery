// JQ 
// FORM EVENTS  => focus(),blur(),change(),select(),submit()

$(document).ready(function(){
$('#sname').focus(function(){
    $('#sname').css('background-color','powderblue');
});
$('#sname').blur(function(){
    $('#sname').css('background-color','');
});

$('#scountry').change(function(){
  $('body').css('background','pink');
  //alert("Hello Micky")
});

$('#sform').submit(function(){
    alert("Form Page is Submitted")
});

});


