let clickCount = 0 //keep track of number of clicks
let height=120 //set height,width etc to int
let width=100
let inflationRate=20
let maxSize= 300
let popCount = 0

function inflate(){
    clickCount ++
    let balloonElement = document.getElementById("balloon")//gets div element id 'balloon'
    height += inflationRate
    width += inflationRate

    if(height >= maxSize){
        console.log("pop the balloon")
        popCount++
        height = 0
        width = 0
        document.getElementById("pop-count").innerText = popCount.toString()    
    }
    balloonElement.style.height = height + "px"
    balloonElement.style.width = width +"px"

    

    let clickCountElem = document.getElementById("click-count")
    clickCountElem.innerText = clickCount.toString()
}