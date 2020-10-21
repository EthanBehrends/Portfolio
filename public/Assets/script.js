
$(document).ready(function() {
  

  cycle = () => {
    let newText =
    carousel[Math.floor(Math.random() * carousel.length)];
    $("#secondary").html(newText);
    $("#titleCarousel").animate({left: '-300px'}, 200);
    $("#primary").animate({opacity: 0}, 200);
    $("#secondary").animate({opacity: 1}, 200, function() {
      $("#primary").html(newText).css('opacity','1');
      $("#secondary").css('opacity','0');
      $("#titleCarousel").css('left', '0px');
    });

  }

  function parallax() {
    let top = $(window).scrollTop();
    top -= 0;
    if(top < 0) top =0;
    $("#foreground1").css('transform','translateY(' + (top*-.05 + 60) + '%)');
    $("#foreground3").css('transform','translateY(' + (top*-.04 + 10)+ '%)');
    $("#foreground2").css('transform','translateY(' + (top*-.01 +50)+ '%)');
    //$("#foreground4").css('transform','translateY(' + (top*.01)+ '%)');
    //$("#foreground5").css('transform','translateY(' + (top*.05)+ '%)');
    //$("#campanile").css('transform','translateY(' + (top*.01)+ '%)');
  }
  typeOut = (element,time) => {
    let text = element.html();
    let iter = 0;
    let interval = setInterval(function() {
      element.html(text.substr(0,1+iter*text.length/25));
      iter++;
      if(iter == 25){
        clearInterval(interval);
        element.html(text);
      }
    },time/25);
  }
  setInterval(parallax,30);
  setInterval(cycle, 5000);
});

function typeOut(){}
function cycle(){}
