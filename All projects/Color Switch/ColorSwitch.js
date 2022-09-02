var Switch = document.getElementById("switch");
var Spectrum = document.getElementById("spectrum");
var brightness = document.getElementById("bright-mode");
if(brightness){
  brightness.addEventListener("click", ()=>{
                              
  });
}

if(Switch){
  Switch.addEventListener("click", ()=>{
    Switch.setAttribute("class", "active");
    Spectrum.setAttribute("class", "");
   
    //add the innerHTML for the color switch buttton
    document.getElementById("current-mode").innerHTML = '<div id="current-color">'+
                '<span>Background Color: <span id="color">none</span></span>'+
               
            '</div>'+
           ' <span id="prompt">Flip the switch (Press "on" to continue to change the color of the background; press "off" to reset)</span>'+
            '<div id="canvas">'+
              '<div id="switch-panel">'+
                '<div id="inner-outline">'+
                  '<div id="on" class="pressed">ON</div> <!--This will choose a random color -->'+
                  '<div id="off" class="unpressed">OFF</div><!-- This will turn the background back to the default color-->'+
                '</div>'+
              '</div>';
    
    //the following provides functionality for this mode
    
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
      if(cur == "White"|| cur == "LightYellow"|| cur == "Moccasin" || cur == "SpringGreen" || cur == "Yellow" || cur == "MistyRose" || cur == "Snow" || cur == "Cornsilk" || cur == "Lavender" || cur == "PeachPuff" || cur == "Beige" || cur == "Aqua") document.getElementById("prompt").style.color = "rgba(0, 0, 0, 0.8)";
      else document.getElementById("prompt").style.color = "white";
  });
}
 
  if(offSwitch){
    offSwitch.addEventListener("click", function(){
      onSwitch.classList.remove("pressed");
      onSwitch.classList.add("unpressed");
   
      offSwitch.classList.remove("unpressed");            
      offSwitch.classList.add("pressed");
      document.querySelector('#current-color #color').innerHTML = "none";  
      document.getElementById("current-mode").style.backgroundColor= 'rgb(180, 180, 180)';
    });
   
   }
  });
}
if(Spectrum){
  Spectrum.addEventListener("click", ()=>{
    Spectrum.setAttribute("class", "active");
    Switch.setAttribute("class", "");
    
    //add the innerHTML for the Hexi-spectrum buttton
    document.getElementById("current-mode").innerHTML ='<div id="current-color">'+
                '<span>Type in a Hexidecimal Number!</span>'+
               
            '</div>'+
          '<div id="the-magic">'+
            '<span><input type="text" id="hext-box" maxlength="7" placeholder="#000000" pattern="#[A-F0-9]{3,}" title="It must contain at least 3 numbers and/or letters that are between A-F or 0-9, nothing else"> <input type="submit" id="setColor" value="Enter" ></span>'+
          '<span id="rand-button" >Random Color</span></div>' ;
   //code that provides functionality for this mode
    var letters = ["A","B","C","D","E","F"];
function randLetter(){
  var c = '';
  let randIndex = Math.floor(Math.random() * 6);
  //supposed to be a random number between 0 and 6
  c = letters[randIndex];
  return c;
}
var randBut = document.getElementById("rand-button");
var typedCol = document.getElementById("setColor");
if(randBut){
  randBut.addEventListener("click", ()=>{
    var hex = "#";
    for(let i = 0; i < 6; i++){
      let randChance = Math.random();
      //conditional: if randChamce is 0, next character is a letter, else the next one is a number
      if(randChance < 0.5){
        hex += randLetter();
      } else {
        hex+=Math.floor(Math.random() * (9 + 1))
      }
    }
    document.getElementById('hext-box').value = hex;
    document.getElementById('current-mode').style.backgroundColor = hex;
  });
 
  if(typedCol){
    typedCol.addEventListener("click", ()=>{
      let input = document.getElementById("hext-box").value;
      /*simple, take the text thats in here and make it the new color of
      the background, but you might want to add an error catching \
      proceedure here in the future*/
      document.getElementById('current-mode').style.backgroundColor = input;
    });
  }
}
  });
  
}

//Since the page opens up on the Color Switch, this code will be her to ensure thta it functions...
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
      if(cur == "White"|| cur == "LightYellow"|| cur == "Moccasin" || cur == "SpringGreen" || cur == "Yellow" || cur == "MistyRose" || cur == "Snow" || cur == "Cornsilk" || cur == "Lavender" || cur == "PeachPuff" || cur == "Beige" || cur == "Aqua") document.getElementById("prompt").style.color = "rgba(0, 0, 0, 0.8)";
      else document.getElementById("prompt").style.color = "white";
  });
}
 
  if(offSwitch){
    offSwitch.addEventListener("click", function(){
      onSwitch.classList.remove("pressed");
      onSwitch.classList.add("unpressed");
   
      offSwitch.classList.remove("unpressed");            
      offSwitch.classList.add("pressed");
      document.querySelector('#current-color #color').innerHTML = "none";  
      document.getElementById("current-mode").style.backgroundColor= 'rgb(180, 180, 180)';
    });
   
   }

