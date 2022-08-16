window.addEventListener("load", () => { 
  time();
  function time(){
    var curTime = new Date();
    var hour = "";
    var sec = "";
    var p = "";
    if (curTime.getSeconds() < 10){
      sec = "0"+curTime.getSeconds();
    } else sec += ""+curTime.getSeconds();
    
    if ((("0"+curTime.getHours()+1).slice(-2)) >= 12){
      p = "PM";
    } else p = "AM";
    
    if(curTime.getHours() > 12) {
      let h = curTime.getHours() - 12;
      hour = ""+h;
    }else hour = ""+curTime.getHours();
    document.getElementById("SpookyTime").innerHTML = hour + " : " + curTime.getMinutes() + " : "+ sec + " : "+ curTime.getMilliseconds() + " "+ p;
    setTimeout(time, 10);
  }
});
