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
