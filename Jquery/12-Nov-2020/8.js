// JQ 

// Animation 

// syntax => $(selector).animate({parameters},speed,callback-funx) 

// font-size : 40px 

// fontSize : 40px
/*
$(document).ready(function(){

    $('#btn1').click(function(){
       $('#box').animate({
                       left:'+=100px',
                       height:'150px',
                       width:'200px',
                       fontSize:'40px',
                       borderWidth:'5px',
                       borderRadius:'15px'                       
                      },2000)
    });
  });
  */





 $(document).ready(function(){

    $('#btn1').click(function(){
       $('#box').animate({
                       left:'+=100px',
                       height:'150px',
                       width:'200px',
                       fontSize:'40px',
                       borderWidth:'5px',
                       borderRadius:'15px'                       
                      },2000)
    });
    $('#btn1').click(function(){
        $('#box').animate({ top:'20px'});
    });
  });
  
  