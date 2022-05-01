let clickCount = 0 //keep track of number of clicks

function inflate(){
    clickCount ++
    var balloonElement = document.getElementById("balloon")//gets div element id 'balloon'
    balloonElement.style.height = "400px"
    balloonElement.style.width = "300px"

    var clickCountElem = document.getElementById("click-count")
    clickCountElem.innerText = clickCount.toString()
}