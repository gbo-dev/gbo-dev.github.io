// Credit: Tech no Kami, Codepen
///* Store the element in el */
let el = document.getElementById('profile_card_id')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', (e) => {

  // Get position of mouse cursor with respect to the element on mouseover 
  const x = e.layerX
  const y = e.layerY
  
  /*
   * Calculate rotation valuee along the Y-axis
   */
  const yRotation = 25 * ((x - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -25 * ((y - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1.0) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
});

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

///* Add listener for mousedown event, to simulate click */
//el.addEventListener('mousedown', function() {
//  el.style.transform = 'perspective(500px) scale(0.98) rotateX(0) rotateY(0)'
//})

/* Add listener for mouseup, simulate release of mouse click */
//el.addEventListener('mouseup', function() {
//  el.style.transform = 'perspective(500px) scale(1.0) rotateX(0) rotateY(0)'
//})
