//Code to add button that toogles the lok of icon in navigation
let icon = document.getElementById('icon');
icon.addEventListener('click', ()=>{
  if(icon.classList.contains("jap")){
    icon.classList.replace("jap", "eng");
    icon.innerHTML = '<i class="fa-solid fa-dharmachakra"></i>';
    document.getElementById('pronuciation').innerHTML = '|WaterWheel';
  } else{
    icon.classList.replace("eng", "jap");
    icon.innerHTML = '水車';
    document.getElementById('pronuciation').innerHTML = '|Suisha';
  }
});
//adding responsive functionality to webpage when it's width is lower than 595px

//First, clicking the 3 bars in the nav menu bar will drop down the original options that were hidden...
let bars = document.getElementById('responsive-part');
bars.addEventListener('click', ()=>{
  document.querySelector('#navigation ul').style.top = "0";
});

//...and then, clicking the 'X' icon will get rid of the drop down menu.
let x = document.getElementById('done');
x.addEventListener('click', ()=>{
  document.querySelector('#navigation ul').style.top = "-400px";
});
