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

/* Code for the shifting banner*/
const bans = Array.from(document.querySelectorAll(".ban")), banContainer = document.getElementById("banner");


let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0;
bans.forEach((slide, index)=>{
  const slideImage = slide
  // disable default image drag
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  // touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)
  // mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mousemove', touchMove)
  slide.addEventListener('mouseleave', touchEnd)
});




// functions
function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true
    animationID = requestAnimationFrame(animation)
    banContainer.classList.add('grabbing')
  }
}

// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex)

// prevent menu popup on long press
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function touchEnd() {
  cancelAnimationFrame(animationID)
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < bans.length - 1) currentIndex += 1

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  banContainer .classList.remove('grabbing')
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

function setSliderPosition() {
  banContainer.style.transform = `translateX(${currentTranslate}px)`
}
