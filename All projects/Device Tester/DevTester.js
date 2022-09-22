//List of all of the
var listOfKeys = document.querySelectorAll('li');
//Fucntion to detect keys on keyboard
function detect(e){
  //Editor's Note: Find a way to disable keyCodes 27 (ESCAPE), 112-123 (F1 - F12), 18 (alt), 20(CapsLoc), 91(OS/Windows), 93 (Context menu)   
  e.shiftKey = false;
  e.ctrlKey = false;
  e.altKey = false;
  e.capsKey = false;
   console.log("Key: "+e.key+" key code = "+e.keyCode);
  if(e.key == "NumLock"){
    document.getElementsByClassName("number-lock")[0].style.backgroundColor = "green";
  } else{
    for(let i = 0; i < listOfKeys.length; i++){
    if(listOfKeys[i].id == e.key || listOfKeys[i].innerHTML == e.key){
      listOfKeys[i].style.backgroundColor = "green";
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
  for(let i = 0; i < listOfKeys.length; i++){
    document.querySelectorAll('li')[i].style.opacity = 1;
  }
  
  document.querySelector('#the-magic p').innerHTML = "Test your keyboard, if the website detects the key was pressed, the key will light up green. Begin by pressing any of your keys!";
  document.getElementById("run").removeAttribute('disabled'); document.getElementById('cancel').setAttribute('hidden', '');
});
