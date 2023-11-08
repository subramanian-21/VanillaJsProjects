const gameDiv = document.getElementById("game");
const body = document.getElementById("body");
const dice = document.getElementById("dice");
const player1 = document.getElementById("p1");
let player1Inital = 0;
let player1Final = 0;
let player1Swap = 0
const player2 = document.getElementById("p2");
let player2Initial = 0;
let player2Final = 0;
let player2Swap = 0
let val1, val2;
const move1 = { left: 0, right: 0, bottom: 0 ,player:val1};
const move2 = { left: 0, right: 0, bottom: 0 ,player:val2};

window.onload = () => {
  inputPlayers();
};
let you = 0;
function gameDesign(prompt) {

    
  for (i = 0; i < 100; i++) {
    const gameBox = document.createElement("div");
    gameBox.classList.add("box");
    gameDiv.appendChild(gameBox);
  }
}
function inputPlayers() {
  const bodyWrapper = document.createElement("div");
  bodyWrapper.classList.add("body-wrapper");

  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("input-wrapper");

  const inp1 = document.createElement("input");
  inp1.type = "text";
  inp1.placeholder = "Enter player 1";
  const inp2 = document.createElement("input");
  inp2.placeholder = "Enter player 2";
  inp2.type = "text";

  const startBtn = document.createElement("button");
  startBtn.innerHTML = "Start Game";
  startBtn.classList.add("start-btn");
  inputWrapper.appendChild(inp1);
  inputWrapper.appendChild(inp2);
  inputWrapper.appendChild(startBtn);
  bodyWrapper.appendChild(inputWrapper);

    body.appendChild(bodyWrapper);
  startBtn.addEventListener("click", () => startFn(inp1, inp2, bodyWrapper));
}
function startFn(i1, i2, wrapper) {
  val1 = i1.value;
  val2 = i2.value;
  move1.player = i1.value;
  move2.player  = i2.value

  if (!val1 || !val2) {
    alert("Enter Players");
  } else {
    wrapper.style.display = "none";
    gameDesign();
    startGame();
  }
}

function startGame() {
  const wrapper = document.createElement("div");
  const chance = document.createElement("div");
  chance.classList.add("change");
  const trial = document.createElement("div");
  trial.classList.add("trial");
  const rollDice = document.createElement("button");
  rollDice.innerText = "Run...";
  wrapper.appendChild(chance);
  wrapper.appendChild(trial);
  dice.appendChild(wrapper);
  dice.appendChild(rollDice);
  chance.innerHTML = "";
  trial.innerHTML = "";
  rollDice.addEventListener("click", () => rollDiceFn(chance, trial));
}
function rollDiceFn(c, t) {
    const random = Math.floor(1 + Math.random() * 6);
    t.innerText = random;
  if (you % 2 === 0) {
    c.innerText = val1 + "'s chance";
    c.style.color = "red";
    player1Inital = player1Final
    player1Final = player1Inital + random
    const dim = CalcTopLeft(player1Inital,player1Final,move1);
    if(dim.right){
        player1.style.bottom = `${dim.bottom}px`
        player1.style.right = `${dim.right}px`
    }else{
        player1.style.bottom = `${dim.bottom}px`
        player1.style.left = `${dim.left}px`
    }    
  } else {
    c.innerText = val2 + "'s chance";
    c.style.color = "green";
    player2Initial = player2Final
    player2Swap = player2Final
    player2Final = player2Initial + random
    const dim = CalcTopLeft(player2Initial,player2Final,move2);
    if(dim.right){
        player2.style.bottom = `${dim.bottom}px`
        player2.style.right = `${dim.right}px`
    }else{
        player2.style.bottom = `${dim.bottom}px`
        player2.style.left = `${dim.left}px`
    }
  }
  you++;
}
function CalcTopLeft(i, f ,move) {
  if (
    (i <= 10 && f <= 10) ||
    (i > 20 && f <= 30) ||
    (i > 40 && f <= 50) ||
    (i > 60 && i <= 70) ||
    (i > 80 && f <= 90)
  ) {
    if((move.left + (f - i) * 50)<500){
        move.left = move.left + (f - i) * 50 ;
    }else{
        move.left = (f - i) * 50 ;
    }
    
    
    console.log(move)
    return move;
  }
  if (
    (i > 10 && i <= 20 && f <= 20) ||
    (i > 30 && f <= 40) ||
    (i > 50 && f <= 60) ||
    (i > 70 && f <= 80) ||
    (i > 90 && f <= 100)
  ) {
    if((move.right + (f - i) * 50)<500){
        move.right = move.right + (f - i) * 50 ;
    }else{
        move.right = (f - i) * 50 ;
    }
    console.log(move)
    return move;
  }
  if (
    (i <= 10 && f <= 20) ||
    (i >= 21 && i <= 30 && f >= 31 && f <= 40) ||
    (i >= 41 && i <= 50 && f >= 51 && f <= 60) ||
    (i >= 61 && i <= 70 && f >= 71 && f <= 80) ||
    (i >= 81  && f >= 91)
  ) {
    move.left = (Math.abs((Math.ceil(i/10)*10)-i)) * 50
    move.bottom = move.bottom + 50;
    move.right = (Math.abs(f - (Math.floor(f/10)*10) +1)) * 50;
    if(move.bottom >550){
        showWin(move.player)
      }
    
    console.log(move)

    return move;
  }
  if (
    (i > 10 && i >= 11 && i <= 20 && f >= 21 && f <= 30) ||
    (i >= 31 && i <= 40 && f >= 41 && f <= 50) ||
    (i >= 51 && i <= 60 && f >= 61 && f <= 70) ||
    (i >= 71 && i <= 80 && f >= 81 && f <= 90)
  ) {
    move.right = (Math.abs((Math.ceil(i/10)*10)-i)) * 50
    move.bottom = move.bottom + 50;
    move.left = (Math.abs(f - (Math.floor(f/10)*10) +1)) * 50;
    if(move.bottom >550){
        showWin(move.player)
      }
    return move;
  }

}

function showWin(p){
    const bodyWrapper =document.createElement("div")
    const inputWrapper = document.createElement("div");
    const btn = document.createElement("button")
    btn.classList.add("reload")
    inputWrapper.classList.add("input-wrapper");
    bodyWrapper.classList.add("body-wrapper")
    inputWrapper.innerText = p+" Wins"
    btn.innerHTML = "play again"
    
    inputWrapper.appendChild(btn)
    bodyWrapper.appendChild(inputWrapper)
    body.appendChild(bodyWrapper)
    btn.addEventListener("click",()=>window.location.reload())
}