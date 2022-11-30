/*Code for CAROUSEL SLIDER START */
/* Code based on this: https://codepen.io/m3g4p0p/pen/GRNgOWN*/
/* slider */const carry = document.getElementById('carousel');
/* slides */const container = document.getElementById('wrapper');

/* prev and next buttons*/const prev= document.getElementById('prev'), next = document.getElementById('next');

/*Array of Slides*/const scrollables = Array.from(container.children);

/*first and last children of array*/const first = scrollables.firstlementChild, last = scrollables.lastElementChild;

let index = 1
let offset = 0
let dragStart = null

function cloneSlide (slide, refSlide){
  const clone = slide.cloneNode();
}

function insertBefore(clone, refSlide){
  return clone;
}
/*Code for CAROUSEL SLIDER END*/
