//Starting the testing process
document.getElementById("run").addEventListener("click", ()=>{
  document.querySelector('#the-magic p').innerHTML = "Start pressing all of your keys! Each one that is detected will be confirmed ont his page, showing which ones work and which ones don't (if there are any...)";
  
  let listOfKeys = document.querySelectorAll('li');
  document.getElementsByClassName('number-lock')[0].style.opacity = 0.4;
  for(let i = 0; i < listOfKeys.length; i++){
    document.querySelectorAll('li')[i].style.opacity = 0.4;
  }

document.getElementById("run").setAttribute('disabled', '');
document.getElementById("cancel").removeAttribute("hidden");
});

//canceling the testing process
document.getElementById("cancel").addEventListener('click', ()=>{

  let listOfKeys = document.querySelectorAll('li');
  document.getElementsByClassName('number-lock')[0].style.opacity = 1;
  for(let i = 0; i < listOfKeys.length; i++){
    document.querySelectorAll('li')[i].style.opacity = 1;
  }
  
  document.querySelector('#the-magic p').innerHTML = "Test your keyboard, if the website detects the key was pressed, the key will light up green. Begin by pressing any of your keys!";
  document.getElementById("run").removeAttribute('disabled'); document.getElementById('cancel').setAttribute('hidden', '');
});
