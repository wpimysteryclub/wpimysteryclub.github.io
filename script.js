
// NONE OF THIS CODE IS PART OF THE GAME, PLEASE DO NOT LOOK FURTHER OR ELSE YOU WILL RUIN YOUR EXPERIENCE

var loggedName;
var isLoggedIn;
const navButtons = parent.frames[0].document.getElementsByTagName("tr");

startupSite();

// ONCE AGAIN THIS CODE SHOULD NOT BE VIEWED AS PART OF THE GAME

function startupSite(){
  navButtons[3].style.visibility = "hidden";
  if(getCookie("loggedIn_WPIARG") == "true"){
    //console.log("AHHHH");
    siteLogin(getCookie("username_WPIARG"));
  }
}

// LIKE SERIOUSLY STOP RIGHT NOW IF YOURE PLAYING THE GAME

function siteLogin(name){
  isLoggedIn = "true";
  //console.log(parent.frames[0].document.getElementById("loginButton"));
  navButtons[2].style.visibility = "hidden";
  navButtons[3].style.visibility = "visible";
}

function logout(){
  if(isLoggedIn == "true"){
    setCookie("loggedIn_WPIARG","false",1);
    setCookie("username_WPIARG","",1);
    navButtons[2].style.visibility = "visible";
    navButtons[3].style.visibility = "hidden";
  }
}

// THIS IS HOW YOU RUIN YOUR IMMERSION

function sendLogin(){
    var nameInp = document.getElementById("usernameInput").value;
    var passwordInp = document.getElementById("passwordInput").value;
    
    validateLogin(nameInp,passwordInp);

}


function validateLogin(username, password){
    if(username == "kanderson" && password == "102294"){
      confirmLogin("kyle");
    }else if(username == "vwhite" && password == "vp"){
      confirmLogin("veronica");
    }else if(username == "dstar" && password =="password"){
      confirmLogin("donna");
    }else if(username == "jmurphy" && password == "donna"){
      confirmLogin("jack");
    }else{
      sendInvalidLogin();
    }

    
}

function sendInvalidLogin(){
  document.getElementById("welcomeMessage").innerHTML = "Invalid Login! <br>Nice try buster";
}



function setCookie(cname, cvalue, exdays) {
    //console.log("SET COOKIE " + cname + " AS " + cvalue);
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

    console.log(getCookie(cname));
  }

function confirmLogin(name){

  switch(name){
    case "kyle":
      loggedName = "Kyle Anderson";
      break;
    case "veronica":
      loggedName = "Veronica White";
      break;
    case "donna":
      loggedName = "Donna Star";
      break;
    case "jack":
      loggedName = "Jack Murphy";
      break;
  }

  setCookie("loggedIn_WPIARG","true",6);
  setCookie("username_WPIARG",name,6);
  document.getElementById("loginSection").style.visibility = "hidden";

  document.getElementById("welcomeMessage").innerText = "Welcome " + loggedName;

  siteLogin("kyle");

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