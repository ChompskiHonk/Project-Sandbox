/*Code for CAROUSEL SLIDER START*/
const slider = document.getElementById('Carousel')
const slides = slider.querySelector('.wrapper')
const prevButton = slider.querySelector('.prev')
const nextButton = slider.querySelector('.next')
const images = Array.from(slides.children)
const first = slides.firstElementChild
const last = slides.lastElementChild

let index = 1
let offset = 0
let dragStart = null

function cloneImage (image, refImage) {
  const clone = image.cloneNode()
  slides.insertBefore(clone, refImage)
  return clone
}

function disableNativeDragging (element) {
  element.draggable = false
}

function withTransitionSuspended (callback) {
  let scheduled = null

  return () => {
    if (scheduled) {
      window.cancelAnimationFrame(scheduled)
    }

    scheduled = window.requestAnimationFrame(() => {
      slides.style.transition = 'none'
      callback()

      scheduled = window.requestAnimationFrame(() => {
        slides.style.transition = ''
        scheduled = null
      })
    })
  }
}

function toggleDisabled (disabled) {
  prevButton.disabled = nextButton.disabled = disabled
}

function getOffset () {
  return images.slice(0, index).reduce((width, image) =>
    width + image.clientWidth, 0)
}

function translateSlides (deltaX = 0) {
  slides.style.transform = `translateX(${-offset + deltaX}px)`
}

function shiftSlides (newIndex = index) {
  index = newIndex
  offset = getOffset()
  translateSlides()
}

function fakeInfinity () {
  switch (index) {
    case 0:
      return shiftSlides(images.length - 2)
    case images.length - 1:
      return shiftSlides(1)
    default:
      // pass
  }
}

function startDragging (event) {
  slides.style.transition = 'none'
  dragStart = event.clientX
  toggleDisabled(true)
}

function doDragging (event) {
  if (dragStart === null) {
    return
  }

  translateSlides(event.clientX - dragStart)
}

function stopDragging (event) {
  if (dragStart === null) {
    return
  }

  slides.style.transition = ''
  shiftSlides(index + (event.clientX < dragStart ? 1 : -1))
  dragStart = null
}

images.push(cloneImage(first, null))
images.unshift(cloneImage(last, first))
;[slides, ...images].forEach(disableNativeDragging)
prevButton.addEventListener('click', () => shiftSlides(index - 1))
nextButton.addEventListener('click', () => shiftSlides(index + 1))
slides.addEventListener('mousedown', startDragging)
slides.addEventListener('mousemove', doDragging)
slides.addEventListener('mouseleave', stopDragging)
slides.addEventListener('mouseup', stopDragging)
slides.addEventListener('transitionstart', () => toggleDisabled(true))
slides.addEventListener('transitionend', () => toggleDisabled(false))
slides.addEventListener('transitionend', withTransitionSuspended(fakeInfinity))
window.addEventListener('resize', withTransitionSuspended(shiftSlides))
window.dispatchEvent(new Event('resize'))

/*Code for CAROUSEL SLIDER END*/
