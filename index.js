/*
37 = left
38 = up
39 = right
40 = down
*/

function moveDodgerLeft() {
  var dodger = document.getElementById("dodger")
  var leftNumbers = dodger.style.left.replace("px", "")
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var dodger = document.getElementById("dodger")
  var leftNumbers = dodger.style.left.replace("px", "")
  var left = parseInt(leftNumbers, 10)
  if (left < 400-40) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerUp() {
  var dodger = document.getElementById("dodger")
  var bottomNumbers = dodger.style.bottom.replace("px", "")
  var bottom = parseInt(bottomNumbers, 10)
  if (bottom < 400-20) {
    dodger.style.bottom = `${bottom + 1}px`
  }
}

function moveDodgerDown() {
  var dodger = document.getElementById("dodger")
  var bottomNumbers = dodger.style.bottom.replace("px", "")
  var bottom = parseInt(bottomNumbers, 10)
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`
  }
}


document.addEventListener("keydown", function(e) {
  if (e.which === 37) {moveDodgerLeft()}
  if (e.which === 39) {moveDodgerRight()}
  if (e.which === 38) {moveDodgerUp()}
  if (e.which === 40) {moveDodgerDown()}
})
