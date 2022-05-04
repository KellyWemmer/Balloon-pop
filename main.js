let clickCount = 0 //keep track of number of clicks
let height=120 //set height,width etc to int
let width=100
let inflationRate=20
let maxsize= 300

function inflate(){
    clickCount ++
    var balloonElement = document.getElementById("balloon")//gets div element id 'balloon'
    height += inflationRate
    width += inflationRate
    if(height >= maxsize){
        console.log("pop the balloon")
        height = 0
        width = 0        
    }
    balloonElement.style.height = height + "px"
    balloonElement.style.width = width +"px"

    

    var clickCountElem = document.getElementById("click-count")
    clickCountElem.innerText = clickCount.toString()
}