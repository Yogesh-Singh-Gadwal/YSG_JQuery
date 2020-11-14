// JQ 

// wrapAll() & wrapInner()

// wrapAll()
$(document).ready(function(){
  $('#btn1').click(function(){    
     $('p').wrapAll('<div id="test"></div>')
     
  });
});


// wrapInner()
$(document).ready(function(){
    $('#btn2').click(function(){    
       $('#box h2').wrapInner('<span class="one"></span>')
       
    });
  });
  