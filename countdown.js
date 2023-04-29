// NONE OF THIS CODE IS PART OF THE GAME, PLEASE DO NOT LOOK FURTHER OR ELSE YOU WILL RUIN YOUR EXPERIENCE




// NONE OF THIS CODE IS PART OF THE GAME, PLEASE DO NOT LOOK FURTHER OR ELSE YOU WILL RUIN YOUR EXPERIENCE
// NONE OF THIS CODE IS PART OF THE GAME, PLEASE DO NOT LOOK FURTHER OR ELSE YOU WILL RUIN YOUR EXPERIENCE
// NONE OF THIS CODE IS PART OF THE GAME, PLEASE DO NOT LOOK FURTHER OR ELSE YOU WILL RUIN YOUR EXPERIENCE
// NONE OF THIS CODE IS PART OF THE GAME, PLEASE DO NOT LOOK FURTHER OR ELSE YOU WILL RUIN YOUR EXPERIENCE
// NONE OF THIS CODE IS PART OF THE GAME, PLEASE DO NOT LOOK FURTHER OR ELSE YOU WILL RUIN YOUR EXPERIENCE






var countDownTime = new Date("Apr 29, 2023 20:00:00").getTime();


var countDownFunction;

var countDisabled = 0;

startTime();
checkComplete();


function finishWin(){
    clearInterval(countDownFunction);

    parent.frames[0].document.getElementById("navLogo").src = "images/game-win.jpg";
    document.getElementById("countdown").style.color = "greenYellow";

    document.getElementById("amnesiaTitle").innerHTML = "Amnesia Machine Successfully Shut Down<br><br>Congratulations!";

    document.getElementById("results").innerHTML = "You've succeeded in stopping the amnesia machine, please report (via Discord direct message) to the Mystery Club President with the following code 'We Remember'<br><br>PLEASE DO NOT SHARE THIS WITH OTHERS UNTIL THE GAME IS COMPLETELY OVER";
}

function finishFail(){
    clearInterval(countDownFunction);
    parent.frames[0].document.getElementById("navLogo").src = "images/game-loss.jpg";

    document.getElementById("countdown").style.color = "firebrick";
    document.getElementById("codeEntries").innerHTML="";
    document.getElementById("amnesiaTitle").innerHTML = "They've all been wiped.<br><br>The Council Watches";

    document.getElementById("results").innerHTML = "<iframe width='420' height='315'src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'></iframe><br>You've failed to stop us. We will always be watching.<br><br>You Lose.";

}

function startTime(){
    calcNextTime();
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

    if(days + hours + minutes + seconds <= 0){
        finishFail();
    }
  }

function checkComplete(){
    //console.log(getCookie("higginsCode_WPIARG") + "|" +  getCookie("wedgeCode_WPIARG") + "|" + getCookie("innovationCode_WPIARG") + "|" + getCookie("libraryCode_WPIARG"));
    var countComplete = 0;

    var inputs = document.getElementsByClassName("inp");

    if(getCookie("higginsCode_WPIARG") == "true"){
        document.getElementById("hCodeO").style.color = "greenYellow";
        countComplete += 1;
        document.getElementById("higginsInp").style.visibility = "hidden";
        inputs[0].style.visibility = "hidden";
    } 
    if(getCookie("wedgeCode_WPIARG") == "true"){
        document.getElementById("wCodeO").style.color = "greenYellow";
        countComplete+=1;
        document.getElementById("wedgeInp").style.visibility = "hidden";
        inputs[1].style.visibility = "hidden";
    } 
    if(getCookie("innovationCode_WPIARG") == "true"){
        document.getElementById("iCodeO").style.color = "greenYellow";
        countComplete+=1;
        document.getElementById("innovationInp").style.visibility = "hidden";
        inputs[2].style.visibility = "hidden";
    }
    if(getCookie("libraryCode_WPIARG") == "true"){
        document.getElementById("lCodeO").style.color = "greenYellow";
        countComplete+=1;
        document.getElementById("libraryInp").style.visibility = "hidden";
        inputs[3].style.visibility = "hidden";

    }
    if(countComplete == 4){
        finishWin();
    }
}

function receiveCodeInput(num){
    switch(num){
        case 1:
            if(document.getElementById("higginsInp").value == "3495"){
                document.getElementById("hCodeO").style.color = "greenYellow";
                setCookie("higginsCode_WPIARG", "true",7);
            }
            
            break;
        case 2:
            if(document.getElementById("wedgeInp").value == "2023"){
                document.getElementById("wCodeO").style.color = "greenYellow";
                setCookie("wedgeCode_WPIARG", "true",7);
            }
            break;
        case 3:
            if(document.getElementById("innovationInp").value == "1995"){
                document.getElementById("iCodeO").style.color = "greenYellow";
                setCookie("innovationCode_WPIARG", "true",7);
            }
            break;
        case 4:
            if(document.getElementById("libraryInp").value == "1423"){
                document.getElementById("lCodeO").style.color = "greenYellow";
                setCookie("libraryCode_WPIARG", "true",7);
            }
            break;
    }
    checkComplete();
}

function setCookie(cname, cvalue, exdays) {
    //console.log("SET COOKIE " + cname + " AS " + cvalue);
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

  }


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }