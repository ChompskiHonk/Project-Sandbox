//Attempt to diable F1 - F12 keys
document.onkeydown = function (e) {
         
        // disable F12 key
        if(e.keyCode >= 112 || e.keyCode <= 123) return false;
        if(e.keyCode == 18) e.preventDefault();
}

//Attempt to disable CapsLock on the page
document.onkeypress =(event)=>{
   if(event.getModifierState("CapsLock")){
      CapsLock = false;
    }
  }; 

//List of all of the
var listOfKeys = document.querySelectorAll('li');
//Fucntion to detect keys on keyboard
function detect(e){
  //Editor's Note: Find a way to disable  93 (Context menu) 
 
   console.log("Key: "+e.key+", key code = "+e.keyCode+", keyboard: code: "+e.code);
  if(e.key == "NumLock"){
    document.getElementsByClassName("number-lock")[0].style.backgroundColor = "#dfe";
    document.getElementsByClassName('number-lock')[0].style.opacity = 1;
  } else{
    for(let i = 0; i < listOfKeys.length; i++){
      let s = "";
      if(e.getModifierState("CapsLock") && e.key.length == 1){
     
        s = e.key.toLowerCase();
      } else s = e.key;
    if(listOfKeys[i].id == e.code || listOfKeys[i].innerHTML == s){
      listOfKeys[i].style.backgroundColor = "#dfe";
      listOfKeys[i].style.opacity = 1;
      if(e.code == "AltLeft" || e.code=="AltRight"){
        document.getElementById("com").style.backgroundColor = "green";
      }
    }
      
     
  }
   
  }
     
   
  }
//Starting the testing process
document.getElementById("run").addEventListener("click", ()=>{
  //immediatly focus on webpage so user can start testing thier keys
  document.getElementById("the-keyboard").focus();
  //change the prompt text 
  document.querySelector('#the-magic p').innerHTML = "Start pressing all of your keys! Each one that is detected will be confirmed ont his page, showing which ones work and which ones don't (if there are any...)";
  
  //get the list of all the "keys" shown on the web page
  
  
  //since num lock is not  a list item, it's opacity needs to be chnaged outside the for-loop
  document.getElementsByClassName('number-lock')[0].style.opacity = 0.4;
  // begin to change the opacity of all list items to 0.4 to make the "keys" look inactive
  for(let i = 0; i < listOfKeys.length; i++){
    document.querySelectorAll('li')[i].style.opacity = 0.4;
  }
  
  window.addEventListener('keydown', detect);
  
document.getElementById("run").setAttribute('disabled', '');
document.getElementById("cancel").removeAttribute("hidden");
});

//canceling the testing process
document.getElementById("cancel").addEventListener('click', ()=>{
  removeEventListener('keydown', detect);
  let listOfKeys = document.querySelectorAll('li');
  document.getElementsByClassName('number-lock')[0].style.opacity = 1;
  document.getElementsByClassName('number-lock')[0].style.backgroundColor = "#ddd";
  for(let i = 0; i < listOfKeys.length; i++){
    document.querySelectorAll('li')[i].style.opacity = 1;
    listOfKeys[i].style.backgroundColor = "#ddd";
  }
  
  document.querySelector('#the-magic p').innerHTML = "Test your keyboard, if the website detects the key was pressed, the key will light up green. Begin by pressing any of your keys!";
  document.getElementById("run").removeAttribute('disabled'); document.getElementById('cancel').setAttribute('hidden', '');
});
/*let ps4 = document.getElementById('PS4');
let stan = document.getElementById('StandardKey');
ps4.addEventListener('click', ()=>{
  if(!(ps4.classList.contains("selected"))){
    document.getElementById('the-magic').innerHTML = ' ';
  }
});
stan.addEventListener('click', ()=>{
  if(!(stan.classList.contains("selected"))){
    document.getElementById(the-magic).innerHTML =  '      <p>Test your keyboard, if the website detects the key was pressed, the key will light up green. Begin by pressing any of your keys!</p>          <div id="de-buttons">        <button id="run">Start testing</button>      <button id=cancel hidden>Cancel</button></div>           <!-- The Keyboard-->     <div id="the-keyboard">       <div id="keyboard-toprow">         <ul id="keyboard-top">         <li id="Escape"  class="escape">Esc</li>         <li id="F1" class="F1">F1</li>         <li id="F2" class="F2">F2</li>         <li id="F3" class="F3">F3</li>         <li id="F4" class="F4">F4</li>         <li id="F5" class="F5">F5</li>         <li id="F6" class="F6">F6</li>         <li id="F7" class="F7">F7</li>         <li id="F8" class="F8">F8</li>         <li id="F9" class="F9">F9</li>         <li id="F10" class="F10">F10</li>         <li id="F11" class="F11">F11</li>         <li id="F12" class="F12">F12</li>                </ul>         <div id="NumLock" class="number-lock">NumLock</div>       </div>                     <div id="keyboard-bottom">         <ul id="keyboard">         <li class="symbol">`</li>         <li class="symbol">1</li>         <li  class="symbol">2</li>         <li  class="symbol">3</li>         <li  class="symbol">4</li>         <li class="symbol">5</li>         <li  class="symbol">6</li>         <li id="float" class="symbol">7</li>         <li class="symbol">8</li>         <li class="symbol">9</li>         <li class="symbol">0</li>         <li id="-" class="symbol">-</li>         <li id="=" class="symbol">=</li>         <li class="delete lastitem">Backspace</li>         <li class="tab">Tab</li>         <li class="letter">q</li>         <li class="letter">w</li>         <li class="letter">e</li>         <li class="letter">r</li>         <li class="letter">t</li>         <li class="letter">y</li>         <li class="letter">u</li>         <li class="letter">i</li>         <li class="letter">o</li>         <li class="letter">p</li>         <li class="symbol">[</li>         <li class="symbol">]</li>         <li class="symbol lastitem">\</li>         <li class="capslock">CapsLock</li>         <li class="letter">a</li>         <li class="letter">s</li>         <li class="letter">d</li>         <li class="letter">f</li>         <li class="letter">g</li>         <li class="letter">h</li>         <li class="letter">j</li>         <li class="letter">k</li>         <li class="letter">l</li>         <li class="symbol">;</li>         <li class="symbol">\'</li>         <li class="return lastitem">Enter</li>         <li id="ShiftLeft" class="left-shift">L-Shift</li>         <li class="letter">z</li>         <li class="letter">x</li>         <li class="letter">c</li>         <li class="letter">v</li>         <li class="letter">b</li>         <li class="letter">n</li>         <li class="letter">m</li>         <li class="symbol">,</li>         <li class="symbol">.</li>         <li class="symbol">/</li>         <li id="ShiftRight" class="right-shift lastitem">R-Shift</li>                 <li id="ControlLeft" class="left-ctrl ctrl">L-Ctrl</li>         <li class="fn left">Fn</li>         <li id="OSLeft" class="OS"><i class="fa-brands fa-windows"></i>  </li>         <li id="AltLeft" class="left-alt">L-Alt</li>         <li id="Space" class="space">&nbsp;</li>         <li id="AltRight" class="right-alt">R-Alt</li>         <li id="ContextMenu" class="cn-txt"><i class="fa-regular fa-file-lines"></i></li>         <li id="com" class="command">           <span>&#8984;</span>           <p>command</p></li>         <li id="ControlRight" class="right-ctrl ctrl">R-Ctrl</li>             </ul>         <div id="keyboard-rightside">           <ul id="keyboard-adds">             <li class="insert">Insert</li>             <li class="home">Home</li>             <li id="PageUp" class="pageUp">PgUp</li>             <li class="delete">Delete</li>             <li class="end">End</li>             <li id="PageDown"  class="pageDown">PgDn</li>           </ul>                      <ul id="keybaord-directionals">             <li id="ArrowUp" class="up"><i class="fa-solid fa-arrow-up"></i></li>             <div id="direct-bottom">               <li id="ArrowLeft" class="left"><i class="fa-solid fa-arrow-left"></i></li>               <li id="ArrowDown" class="down"><i class="fa-solid fa-arrow-down"></i></li>               <li id="ArrowRight" class="right"><i class="fa-solid fa-arrow-right"></i></li>             </div>           </ul>         </div>                </div>            </div>';
  }
  
}); */
