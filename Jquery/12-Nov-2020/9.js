// JQ 

// Animation 

// syntax => $(selector).animate({parameters},speed,callback-funx) 

/*
$(document).ready(function(){

    $('#btn1').click(function(){
       $('#box').animate({
                       left:'+=500px',
                       height:'150px',
                       width:'200px',
                       fontSize:'40px',
                       borderWidth:'5px',
                       borderRadius:'15px'                       
                      },5000)
    });
    $('#btn2').click(function(){

        $('#box').stop();

    });
  });
 */




$(document).ready(function(){

    $('#btn1').click(function(){
       $('#box').animate({
                       left:'+=500px',
                       height:'150px',
                       width:'200px',
                       fontSize:'40px',
                       borderWidth:'5px',
                       borderRadius:'15px'                       
                      },7000)
    });
    $('#btn2').click(function(){

        $('#box').stop();

    });
  });
  
  

  