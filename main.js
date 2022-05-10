let startButton = document.getElementById("start-button")
let inflateButton = document.getElementById("inflate-button")

let clickCount = 0 //keep track of number of clicks
let height=120 //set height,width etc to int
let width=100
let inflationRate=20
let maxSize= 300
let popCount = 0
let gameLength = 5000
let clockId = 0
let timeRemaining = 0

function startGame(){

    startButton.setAttribute('disabled', "true")
    inflateButton.removeAttribute("disabled")
    startClock()
    setTimeout(stopGame, gameLength)
}  
function startClock(){
    timeRemaining = gameLength
    drawClock()
    clockId = setInterval(drawClock, 1000)
} 
function stopClock(){
    clearInterval(clockId)//stops clock from counting
}

function drawClock(){
    let countdownElem = document.getElementById("countdown")
    countdownElem.innerText = (timeRemaining / 1000).toString()
    timeRemaining -= 1000
}


function inflate(){
    clickCount ++
    height += inflationRate
    width += inflationRate
    
    if(height >= maxSize){
        console.log("pop the balloon")
        popCount++
        height = 0
        width = 0
    } 
    draw()//Once inflate function is updated, it will draw the below items into screen
}

function draw(){
    let balloonElement = document.getElementById("balloon")//gets div element id 'balloon'
    let clickCountElem = document.getElementById("click-count")
    let popCountElem = document.getElementById("pop-count")
    
    balloonElement.style.height = height + "px"
    balloonElement.style.width = width +"px"
    
    clickCountElem.innerText = clickCount.toString()
    popCountElem.innerText = popCount.toString()    
}

function stopGame(){
    console.log("The game is over")

    inflateButton.setAttribute('disabled', "true")//After 3 seconds, run these lines of code
    startButton.removeAttribute("disabled")  
    
    clickCount = 0
    height = 120
    width = 100
    stopClock()

    draw()//Calls draw function after resetting clickCount and height/width
}