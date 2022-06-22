$(function(){

  setInterval(function(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    
    console.log(h, m, s);
    $('.hour').css({
      transform: `rotate(${h * (360 / 12)}deg)`
    });
  
    $('.min').css({
      transform: `rotate(${m * (360 / 60)}deg)`
    })
  
    $('.sec').css({
      transform: `rotate(${s * (360 / 60)}deg)`
    })
  
  }, 1000);

})  // $

