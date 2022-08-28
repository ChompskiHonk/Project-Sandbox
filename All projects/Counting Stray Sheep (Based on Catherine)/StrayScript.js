window.addEventListener("load", () => { 
  time();
  function time(){
    var curTime = new Date();
    var hour = "";
    var min = "";
    var sec = "";
    var p = "";
    if (curTime.getSeconds() < 10){
      sec = "0"+curTime.getSeconds();
    } else sec += ""+curTime.getSeconds();
    
    if (curTime.getMinutes() < 10){
      min = "0"+curTime.getMinutes();
    } else min += ""+curTime.getMinutes();
    
    if ((("0"+curTime.getHours()+1).slice(-2)) >= 12){
      p = "PM";
    } else p = "AM";
    
    if(curTime.getHours() > 12) {
      let h = curTime.getHours() - 12;
      hour = ""+h;
    }else hour = ""+curTime.getHours();
    document.getElementById("SpookyTime").innerHTML = hour + " : " + min + " : "+ sec + " : "+ curTime.getMilliseconds() + " "+ p;
    setTimeout(time, 10);
  }
});
var counter = 0;
let button = document.getElementById("jump-button");
if(button){
  button.addEventListener("click", () => {
    
    document.getElementById("counter").innerHTML = ""+(++counter);
    /*added a counter to website, now I just have to decide how I want to animate
    the rest of the application moving forward, so functionally the site is done
    but I want to add more.*/
    document.getElementById("sheep").classList.add("moving-the-sheep");
    button.disabled = true;
    setTimeout(function (){
      document.getElementById("sheep").classList.remove("moving-the-sheep");
      button.disabled = false;
    }, 5000);
    
  });
}
