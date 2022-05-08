let startButton = document.getElementById("start-button")
let inflateButton = document.getElementById("inflate-button")

let clickCount = 0 //keep track of number of clicks
let height=120 //set height,width etc to int
let width=100
let inflationRate=20
let maxSize= 300
let popCount = 0

function startGame(){

    startButton.setAttribute('disabled', "true")
    inflateButton.removeAttribute("disabled")

    setTimeout(() => {
        console.log("it's been 3 seconds")

        inflateButton.setAttribute('disabled', "true")//After 3 seconds, run these lines of code
        startButton.removeAttribute("disabled")  
        
        clickCount = 0
        height = 120
        width = 100

        draw()

    }, 3000) //button runs for 3 seconds
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