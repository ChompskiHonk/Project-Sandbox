const underbar = document.getElementsByTagName('hr')[0];
const actRect = document.getElementsByClassName('active')[0].getBoundingClientRect;

document.getElementsByClassName("test").innerHTML = "x value of actRect = ";
underbar.style.marginLeft = actRect.x+"px";