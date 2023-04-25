
// NONE OF THIS CODE IS PART OF THE GAME, PLEASE DO NOT LOOK FURTHER OR ELSE YOU WILL RUIN YOUR EXPERIENCE

var loggedName;
var isLoggedIn;
const navButtons = parent.frames[0].document.getElementsByTagName("tr");

var users = [new User("kanderson",["President","Moderator"],"2/27/1996"),new User("dstar",["Secretary","Moderator"],"3/6/1996"),new User("lking",["Member"],"3/7/1996"),new User("vwhite",["Vice-President","Moderator"],"3/6/1996"),new User("bgreyson",["Member"],"1/18/1997")];


var thread1 = new Thread("A brand new website :]", [new ForumPost("February 28, 1996",users[0],"I made a website for us! Its so exciting... I'm going to announce it at the next GB meeting. Until then, first post of the site! Threads will be made for keeping track of mysteries soon.<br><br>I hope you all enjoy :)")]);

var thread2 = new Thread("Mysteries - General Thread", [new ForumPost("March 6, 1996",users[0],"Please keep this thread focused on our current Mysteries and potential things to investigate!"),new ForumPost("March 6, 1996",users[1],"Is discussion about Jack taking place here as well?"),new ForumPost("March 6, 1996",users[0],"No, I will be making a separate thread for that :)"),new ForumPost("March 12, 1996",users[2],"Leads for next meeting:<br><br>- Someone stole Gompei. Again<br><br>- Has anyone noticed the strange stuff going on around the quad? I'm pretty sure graduation doesn't start this early<br><br>- Multiple reports of strange things in the lake. Hoax or real?"),new ForumPost("March 28, 1996",users[3],"I saw a strange meeting taking place in Atwater today. There were a bunch of old white dudes in robes. Maybe we should look into that.")]);

var thread3 = new Thread("LOOKING FOR JACK",[new ForumPost("March 6, 1996", users[0], "We need to find out why Jack stopped coming!! I’m sure there’s something more to it, we just need to find out what"),new ForumPost("March 13, 1996", users[3], "Maybe he's just not interested anymore?"),new ForumPost("March 13, 1996", users[0], "Why wouldn’t he just tell me that then!<br><br>No, there has to be another reason."),new ForumPost("April 3, 1996", users[0], "I just learned he’s moving away… He said he was going to miss everyone, but he still acted strange when I tried to ask him about the club. I don’t know what to do now.<br><br></>I guess we can close this thread. Mystery solved…")]);

var thread4 = new Thread("Welcome our newest member!",[new ForumPost("January 18, 1997", users[0], "We have a new member! Everyone say hi to Broady :)<br><br>It’s great to have you, the UMC is always in need of new members"),new ForumPost("January 19, 1997", users[4], "hello everyone :wave:"),new ForumPost("January 19, 1997", users[3], "Hi Broady! I hope you’re ready to solve some mysteries together"),new ForumPost("January 20, 1997", users[2], "Hello :)")]);

var thread5 = new Thread("Congrats grad! :)",[new ForumPost("May 3, 1997",users[0],"Donna Star had to leave us last term, but that’s because she’s graduating soon! Thank you for being such a great secretary for us<br>Donna, you will be missed dearly :)"),new ForumPost("May 3, 1997", users[2],"Congratulations Donna! Do great things!"),new ForumPost("May 3, 1997", users[3], "Congrats, we will miss you so much"),new ForumPost("May 4, 1997", users[4], ":cheer:")]);

var thread6 = new Thread("everyone is leaving",[new ForumPost("August 31, 1997", users[0], "Lola stopped showing up before graduation, and now that school started back up, Veronica isn’t here either.<br><br>It feels like Jack all over again…")]);

var thread7 = new Thread("I think something is wrong", [new ForumPost("February 28, 1998", users[0], "Broady stopped coming. I feel like I’m going crazy. People don’t just forget about things like this, do they?<br><br>No-one else seems interested in the club anymore, anyways. They’re just going on like it doesn’t even exist."),new ForumPost("March 4, 1998", users[0], "I saw those robed men today, the ones Veronica mentioned years ago. I honestly didn’t think they were real. I guess this gives me something to do."),new ForumPost("March 12, 1998", users[0], "Oops. I was spying on one of the meetings and I’m pretty sure one of them saw me. They seemed… unsurprised? I don’t know. That was strange"),new ForumPost("March 13, 1998", users[0], "I think I made a mistake."),new ForumPost("April 18, 1998", users[0], "I don’t remember making these messages? What is this website?<br><br>I think I’m going to close this thread…")]);


var threads = [thread1,thread2,thread3,thread4,thread5,thread6,thread7];


startupSite();

// ONCE AGAIN THIS CODE SHOULD NOT BE VIEWED AS PART OF THE GAME

function startupSite(){
  navButtons[3].style.visibility = "hidden";
  navButtons[6].style.visibility = "hidden";

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
  navButtons[6].style.visibility = "visible";
}

function logout(){
  if(isLoggedIn == "true"){
    setCookie("loggedIn_WPIARG","false",1);
    setCookie("username_WPIARG","",1);
    navButtons[2].style.visibility = "visible";
    navButtons[3].style.visibility = "hidden";
    navButtons[6].style.visibility = "hidden";

  }
}

// THIS IS HOW YOU RUIN YOUR IMMERSION

function sendLogin(){
    var nameInp = document.getElementById("usernameInput").value;
    var passwordInp = document.getElementById("passwordInput").value;
    
    validateLogin(nameInp,passwordInp);

}

function loadMessage(num){

  document.getElementById("threadContent").style.visibility = "visible";

  loadThread(num);

    

}

function loadThread(threadID){
    var t = threads[threadID];
    var html = "<h2>" + t.title + "</h2><br>";

    t.posts.forEach(post => {
      html += "<hr class = 'rounded'>";
      html += "<strong>" + post.user.name + "</strong> | ";
      post.user.titles.forEach(title => {
        html += "<i>" + title + "  </i>";
      });
      html += "<br><br>";
      html += post.content;
      html += "<hr class = 'rounded'>";
      html += "<br> <br>";
      

    });

    html += "<br><br><div id ='lockedMessage'>This thread has been locked by a moderator</div>";

    document.getElementById("threadMessages").innerHTML = html;
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
    }else if(username == "dblatner" && password == "admin"){
      confirmLogin("kyle");
    }
      else{
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



// object constructors
function User(name,titles,joinDate){
  this.name = name;
  this.titles = titles;
  this.joinDate = joinDate;
}

function Thread(title,posts){
  this.title = title;
  this.posts = posts;
}

function ForumPost(date,user,content){
  this.date = date;
  this.user = user;
  this.content = content;
}
