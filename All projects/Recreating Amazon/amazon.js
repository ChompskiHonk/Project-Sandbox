
//get the category bar
var barF = document.getElementById("Featured-Categories");

//run function when page loads
document.addEventListener("load", checkparam());
//run function for when the window is resized
const eye = new ResizeObserver(checkparam);
eye.observe(barF);

//function to edit page when conditions are met
function checkparam() {
  //funtion resizes/removes thing when window get to a certain width (and possibly height)
  let cat1 = document.querySelectorAll(".cat-1"); 
  let cat2 = document.querySelectorAll(".cat-2");
  let width = barF.offsetWidth;
  if(width <= 1170){
    for(let i = 0; i < cat2.length; i++){
      cat2[i].style.display = "none";
    }
    
  }
  if(width <= 1343){
    for(let i = 0; i < cat1.length; i++){
      cat1[i].style.display = "none";
    }
  }
  
  if(width > 1170){
    for(let i = 0; i < cat2.length; i++){
      cat2[i].style.display = "block";
    }
    
    if(width > 1340){
      for(let i = 0; i < cat1.length; i++){
       cat1[i].style.display = "block";
      }
    }
  }
}
