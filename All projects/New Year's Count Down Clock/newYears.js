window.addEventListener("load", function time(){
  var curTime = new Date(), p  = "";
  
    var hour = "";
    var min = "";
    var sec = "";
    var p = "";
  
  //getting the current time
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
   
  //getting the countdown
  
  
  document.getElementById('current-time').innerHTML = hour+":"+min+" "+p;
    setTimeout(time, 10);
});
