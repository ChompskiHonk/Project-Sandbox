var onSwitch = document.getElementById("on");
var offSwitch = document.getElementById("off");
var colors = ["Red", "Salmon" , "FireBrick" , "Pink", "MediumVioletRed", "HotPink" ,"Orange" , "Coral" ," OrangeRed" ,"Yellow" ,"Gold" ,"LightYellow", "Moccasin" ,"PeachPuff" ,"Lavender" ,"Magenta" ,"Purple" ,"Indigo" ,"DarkSlateBlue","LawnGreen" , "LimeGreen","SpringGreen","Green" ,"Olive" ,"LightSeaGreen" ,"Teal" ,"Aqua" ,"Turquoise" ,"SteelBlue" ,"DeepSkyBlue" ,"Blue" ,"MidnightBlue", "Cornsilk" ,"Tan" ,"RosyBrown" ,"SandyBrown" ,"Chocolate" ,"SaddleBrown" ,"Maroon" ,"White" ,"Snow" ,"MistyRose" ,"Beige" ,"Silver" ,"LightSlateGray" ,"DarkSlateGray" ,"Grey" ,"Black"]; //count the colors and put it here: ___
if(onSwitch){
    onSwitch.addEventListener("click", function(){
      onSwitch.classList.remove("unpressed");
      onSwitch.classList.add("pressed");
    
      offSwitch.classList.remove("pressed");         offSwitch.classList.add("unpressed");
      
      /* choose a random color from the array created above */
      var i = Math.floor(Math.random() * (colors.length - 1));
      //console.log(i);
      let cur = colors[i];
      document.querySelector('#current-color #color').innerHTML = cur;
      document.getElementById("current-mode").style.backgroundColor = cur;
      if(cur == "white"|| cur == "LightYellow"|| cur == "Moccasin" || cur == "SpringGreen" || cur == "Yellow" || cur == "MistyRose" || cur == "Snow" || cur == "Cornsilk" || cur == "Lavender" || cur == "PeachPuff") document.getElementById("prompt").style.color = "rgba(0, 0, 0, 0.8)";
      else document.getElementById("prompt").style.color = "white";
  });
}
  
  if(offSwitch){
    offSwitch.addEventListener("click", function(){
      onSwitch.classList.remove("pressed");
      onSwitch.classList.add("unpressed");
    
      offSwitch.classList.remove("unpressed");             
      offSwitch.classList.add("pressed");
    });
    
    
  }
