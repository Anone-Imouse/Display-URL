$(document).ready(function(){
  $('button').click(function(){
    const inp=document.querySelector('input').value;
    
    // console.log(inp)
    
    $('iframe').show();
    
    $('iframe').css('border','3px solid')
    
    $('iframe').attr('src',inp);
      
      const iframe=document.querySelector('iframe');
      
      iframe.requestFullscreen();
  });
});