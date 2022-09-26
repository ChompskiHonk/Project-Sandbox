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
    document.getElementsByClassName("number-lock")[0].style.backgroundColor = "green";
  } else{
    for(let i = 0; i < listOfKeys.length; i++){
      let s = "";
      if(e.getModifierState("CapsLock") && e.key.length == 1){
     
        s = e.key.toLowerCase();
      } else s = e.key;
    if(listOfKeys[i].id == e.code || listOfKeys[i].innerHTML == s){
      listOfKeys[i].style.backgroundColor = "green";
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
  for(let i = 0; i < listOfKeys.length; i++){
    document.querySelectorAll('li')[i].style.opacity = 1;
  }
  
  document.querySelector('#the-magic p').innerHTML = "Test your keyboard, if the website detects the key was pressed, the key will light up green. Begin by pressing any of your keys!";
  document.getElementById("run").removeAttribute('disabled'); document.getElementById('cancel').setAttribute('hidden', '');
});
