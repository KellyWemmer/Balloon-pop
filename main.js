// #region GAME LOGIC AND DATA

let clickCount = 0 //keep track of number of clicks
let height=120 //set height,width etc to int
let width=100
let inflationRate=20
let maxSize= 300
let highestPopCount = 0
let currentPopCount = 0
let gameLength = 10000
let clockId = 0
let timeRemaining = 0
let currentPlayer = {}
let currentColor = "red"
let possibleColors = ["red", "green", "blue", "purple", "pink"]

function startGame(){
    document.getElementById("game-controls").classList.remove("hidden")
    document.getElementById("main-controls").classList.add("hidden")
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
    checkBalloonPop()    
    draw()//Once inflate function is updated, it will draw the below items into screen
}

function checkBalloonPop(){
    if(height >= maxSize){
        console.log("pop the balloon")
        let balloonElement = document.getElementById("balloon")
        balloonElement.classList.remove(currentColor)
        getRandomColor()
        balloonElement.classList.add(currentColor)

        document.getElementById("pop-sound").play()

        currentPopCount++
        height = 0
        width = 0
    } 
}

function getRandomColor(){
    let i = Math.floor(Math.random()*possibleColors.length);
    currentColor = possibleColors[i]

}


function draw(){
    let balloonElement = document.getElementById("balloon")//gets div element id 'balloon'
    let clickCountElem = document.getElementById("click-count")
    let popCountElem = document.getElementById("pop-count")
    let highPopCountElem = document.getElementById("high-pop-count")
    let playerNameElem = document.getElementById("player-name")
    
    balloonElement.style.height = height + "px"
    balloonElement.style.width = width +"px"
    
    clickCountElem.innerText = clickCount.toString()
    popCountElem.innerText = currentPopCount.toString() 
    highPopCountElem.innerText = currentPlayer.topScore.toString()

    playerNameElem.innerText = currentPlayer.name
}

function stopGame(){
    console.log("The game is over")

    document.getElementById("main-controls").classList.remove("hidden")
    document.getElementById("game-controls").classList.add("hidden")
    
    clickCount = 0
    height = 120
    width = 100

    if(currentPopCount > currentPlayer.topScore){
        currentPlayer.topScore = currentPopCount
        savePlayers()
    }
    currentPopCount = 0

    stopClock()
    draw()//Calls draw function after resetting clickCount and height/width
}


// #endregion

let players = []
loadPlayers()

function setPlayer(event){
    event.preventDefault()
    let form = event.target

    let playerName = form.playerName.value

    currentPlayer = players.find(player => player.name == playerName)

    if(!currentPlayer){
        currentPlayer = {name: playerName, topScore: 0}
        players.push(currentPlayer)
        savePlayers()
    }    

    form.reset()
    document.getElementById("game").classList.remove("hidden")
    form.classList.add("hidden")
    draw()
}

function changePlayer(){
    document.getElementById("player-form").classList.remove("hidden")
    document.getElementById("game").classList.add("hidden")
}

function savePlayers(){
    window.localStorage.setItem("players", JSON.stringify(players)) //Function needs string parameter-Use stringify instead of tostring to keep data
}

function loadPlayers(){
    let playersData = JSON.parse(window.localStorage.getItem("players")) //convert value of key back to object
    if(playersData){
        players = playersData
    }
}   
    
