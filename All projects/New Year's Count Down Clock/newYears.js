function newYearCheck(D){
  var newYears = new Date('01/01/2023 00:00');
  if(D.getMonth() == newYears.getMonth() && D.getDay() == newYears.getDay() && D.getYear() == newYears.getYear()) {
    return true; 
    
   }
 else return false;
  
}
//custom function above that will be used in the future...
function showRemaining(D) {
        var end = new Date('01/01/2023 00:00 AM');
        var distance = end - D;
        if (distance < 0) {

           
           

            return "HAPPY NEW YEAR!";
        }
  var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    
        var hours = Math.floor(distance  / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        return hours + 'hrs '+ minutes + 'mins '+ seconds + 'secs';
    }
//code above provided by

Date.prototype.isLeapYear = function() {
    var year = this.getFullYear();
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
};

// Get Day of Year
function getDaDay(D) {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = D.getMonth();
    var dn = D.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && D.isLeapYear()) dayOfYear++;
    return 365 - dayOfYear;
};
//code above was taken, inpired and augmented from "https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366" from a user called "Joe Orost"

function getWordedMonth(D){
  if(D.getMonth() == 11) return "December";
  if(D.getMonth() == 10) return "November";
  if(D.getMonth() == 9) return "October";
  if(D.getMonth() == 8) return "September";
  if(D.getMonth() == 7) return "August";
  if(D.getMonth() == 6) return "July";
  if(D.getMonth() == 5) return "June";
  if(D.getMonth() == 4) return "May";
  if(D.getMonth() == 3) return "April";
  if(D.getMonth() == 2) return "March";
  if(D.getMonth() == 1) return "February";
  if(D.getMonth() == 0) return "January";
}

function getSeason (D) {
  //getMonth function return numebrs starting from "0 - 11" for the 12 months...
  if((D.getMonth() >= 8 && D.getUTCDay() > 23 ) || (D.getMonth() <= 11 && D.getUTCDay() < 20 )) return "Autumn";
  if((D.getMonth() == 11 && D.getUTCDay() > 21 ) || (D.getMonth() <= 2 && D.getUTCDay() < 20 )) return "Winter";
  if((D.getMonth() >= 2 && D.getUTCDay() > 21 ) || (D.getMonth() <= 5 && D.getUTCDay() < 20 )) return "Spring";
  if((D.getMonth() >= 5 && D.getUTCDay() > 21 ) || (D.getMonth() <= 8 && D.getUTCDay() < 22 )) return "Summer";
  
}
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
   
  //sending the current time to the webpage
  document.getElementById('current-time').innerHTML = hour+":"+min+" "+p;
  
  //calculating the current season
  var seasons = getSeason(curTime);
  document.getElementById('cur-season').innerHTML = seasons;
  
  //sending the month to the webpage
  document.getElementById('cur-month').innerHTML = getWordedMonth(curTime);
  
  //sending the days untill the end of the current year to the webpage
  //this id just here for experimentation with other given dates for the function bellow it...
 let exp = new Date("01/01/2023 00:00"); document.getElementById('endlessdays').innerHTML = getDaDay(curTime);
  
  //getting the live countdown (Hopefully to be changed to just hours later...)
  document.getElementById("finalcountdown").innerHTML = showRemaining(curTime);
  
   if(newYearCheck(curTime)){
     document.getElementById('endlessdays').innerHTML = "ITS NEW YEARS";
   }
  
  //timeout adjustment so that page updates constantly
  setTimeout(time, 10);
});
