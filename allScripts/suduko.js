const body = document.getElementById("body")
let selectedOption = null
let selectedBox = null
window.onload = function (){
    const gameBox = document.createElement("div")
    const optBox = document.createElement("div")

    gameBox.classList.add("game-box")
    optBox.classList.add("option-box")
    gameBox.id ="game-box"
    optBox.id = "option-box"
    body.appendChild(gameBox)
    body.appendChild(optBox)
    optionContent()
    gameContent()
}

function gameContent(){
    const gameBoxDiv = document.getElementById('game-box')
    for(let i = 0;i<9;i++){
        for(let j = 0;j<9;j++){
            const tile = document.createElement("div")
          
            if(i === 2 || i === 5){
                tile.classList.add("border-bottom")
            }
            if(j === 2 || j === 5){
                tile.classList.add("border-right")
            }
            tile.classList.add("tile")
            gameBoxDiv.appendChild(tile)
            tile.addEventListener("click",setTile)
        }
    }
}
function setTile(){
    if(selectedOption){
        this.innerHTML = selectedOption.id
    }else{
        alert("please select any number to place")
    }
    
}

function optionContent(){
    const optBoxDiv  = document.getElementById("option-box")
    for( let i = 1;i<=9;i++){
        const optionBox = document.createElement("div")
        optionBox.innerHTML = i
        optionBox.id = i
        optionBox.classList.add('options')
        optBoxDiv.appendChild(optionBox)

        optionBox.addEventListener('click',selectedOptionFn)

    }
}

function selectedOptionFn (){
    if(selectedOption!=null){
        selectedOption.classList.remove("clicked-option-box")
    }
    selectedOption = this
    selectedOption.classList.add("clicked-option-box")
}
