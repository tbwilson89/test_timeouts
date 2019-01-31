var timer
var increment
var time
var hits = 0
var misses = 0
var glances = 0
var elapTime = 0
var clicked = false
var stopCheck = true
var circle = document.getElementById('circle')
var circleLower = document.getElementById('circle-lower')
var circleUpper = document.getElementById('circle-upper')

document.getElementById('btn').addEventListener('click', ()=>{
  var timeEle = document.getElementById('time').text
  increment = setInterval(()=>{elapTime += 1}, 100)
  timer = setTimeout(()=>{
    console.log('Time elapsed: ' + new Data().getMilliseconds)
    time += 1
  }, 10000)
})

document.getElementById('stop').addEventListener('click', ()=>{
  console.log(elapTime)
  clearTimeout(timer)
  clearTimeout(increment)
})

document.getElementById('btn1').addEventListener('click', () => setTiming(25,9,9))
document.getElementById('btn2').addEventListener('click', () => setTiming(50,25,24))

//function for "timing" buttons, creates circles and intervals to adjust sizes and accepts a second input to determine hits/misses/glances.
function setTiming(duration, upperLimit, lowerLimit){
  //if the interval isn't running AND the clear circles timeout isn't being waited on.
  if(!increment && stopCheck){
    increment = setInterval(()=>{
      if(elapTime == duration){
        stopCheck = !stopCheck
        elapTime = 0
        misses++
        clearCircles()
        updateScore()
        clearInterval(increment)
      } else {
        elapTime++
        console.log(elapTime + ' ' + duration)
        let newPer = ((duration - elapTime) / duration) * 100
        circle.style.width = newPer + '%'
        circle.style.height = newPer + '%'
      }
    }, 100)
    showCircles(duration, upperLimit, lowerLimit)

  } else if(stopCheck) {
    stopCheck = !stopCheck
    clearCircles()
    console.log(elapTime + ' ' + lowerLimit + ' ' + upperLimit)
    if(elapTime >= lowerLimit && elapTime <= upperLimit){
      hits++
    } else if (elapTime <= duration){
      glances++
    }
    elapTime = 0
    updateScore()
    clearInterval(increment)
  }
}

//Setup and display upper, lower, and initial circle locations
function showCircles(duration, upperLimit, lowerLimit){
  circleLower.style.width = (((duration - lowerLimit) / duration) * 100) + '%'
  circleLower.style.height = (((duration - lowerLimit) / duration) * 100) + '%'
  circleUpper.style.width = (((duration - upperLimit) / duration) * 100) + '%'
  circleUpper.style.height = (((duration - upperLimit) / duration) * 100) + '%'
  circle.style.width = '100%'
  circle.style.height = '100%'
  circleLower.style.display = 'block'
  circleUpper.style.display = 'block'
  circle.style.display = 'block'
}
function updateScore(){
  document.getElementById('hits').innerHTML = hits
  document.getElementById('miss').innerHTML = misses
  document.getElementById('glance').innerHTML = glances
}
function clearCircles(){
  setTimeout(()=>{
    circleLower.style.display = 'none'
    circleUpper.style.display = 'none'
    circle.style.display = 'none'
    clicked = !clicked
    stopCheck = !stopCheck
    increment = null
  }, 1000)
}
