var countDownTime = new Date("Apr 30, 2023 18:00:00").getTime();

var countDownFunction;

startTime();

function startTime(){

    countDownFunction = setInterval(calcNextTime,1000);
  
  }
  
  function calcNextTime(){
    var now = new Date().getTime();
    var timeleft = countDownTime - now;
          
      // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  
    var htmlString = "" + days + ":" + hours + ":" + minutes+":" + seconds;
  
    document.getElementById("countdown").innerHTML = htmlString;
  }