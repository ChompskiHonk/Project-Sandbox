window.addEventListener("load", () => { 
  time();
  function time(){
    var curTime = new Date();
    var sec = "";
    if (curTime.getSeconds() < 10){
      sec = "0"+curTime.getSeconds();
    } else sec += ""+curTime.getSeconds();
    document.getElementById("SpookyTime").innerHTML = (("0"+curTime.getHours()+1).slice(-2)) + " : " + curTime.getMinutes() + " : "+ sec + " : "+ curTime.getMilliseconds();
    setTimeout(time, 10);
  }
});
