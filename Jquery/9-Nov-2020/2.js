// JQ 
// Window Events => resize() , scroll()
// load() remove from 3.0 
// unload remove from 3.0

$(document).ready(function(){

    $(window).scroll(function(){

        console.log("Scroll Property Works..");
    });

    $(window).resize(function(){

        console.log("Resize Property Works..");
    });

});