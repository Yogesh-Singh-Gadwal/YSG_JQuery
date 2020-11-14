// JQ 

/*
$(document).ready(function(){

    console.log($(window).scrollTop());
    console.log($(window).scrollLeft());
});
*/

$(document).ready(function(){
 $(window).scroll(function(){
    console.log("Top Scroll : "+$(window).scrollTop());
    console.log("Left Scroll : "+$(window).scrollLeft());
 });    
});

