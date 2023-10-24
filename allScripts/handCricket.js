const start_btn = document.getElementById('start')
const game_page = document.getElementById('game')
const right = document.getElementById('right')
const left =  document.getElementById('left')
const center = document.getElementById('center')
let toss = false
let tossWon = '';
let tossVal = ''
let total = 0;
let totalNa = 0
let scoreRight = 0
let scoreLeft = 0
let you = ''
const scoreDiv = document.createElement('div')
scoreDiv.className = 'score-div'
function start(){
  start_btn.style.display = 'none'
  game_page.style.display = 'block'
}

if(!toss){
  const showDiv = document.createElement('div')
  showDiv.id = 'show-div'
  showDiv.classList.add('center')
  const tossDiv = document.createElement('div')
  tossDiv.className = 'center'
  tossDiv.id = 'toss-div'
  const tossBtn = document.createElement('button')
  tossBtn.innerText = 'TOSS'
  tossDiv.appendChild(tossBtn)
  center.appendChild(showDiv)
  center.appendChild(tossDiv)
  tossBtn.onclick = function fun(){
    tossBtn.style.display = 'none'
    const odd = document.createElement('button')
    const even = document.createElement('button')
    odd.innerText = 'odd'
    
    even.innerText = 'even'
    odd.className = 'oddeven'
    even.className = 'oddeven'

   
    tossDiv.appendChild(odd)
    tossDiv.appendChild(even)

    const oddeven = document.getElementsByClassName('oddeven')
    
    for(i = 0;i<oddeven.length;i++){
      oddeven[i].addEventListener('click',clickfn)
    }
  } 
}

const clickfn = function (e) {
  
  tossVal = e.target.innerText
  const oddeven = document.getElementsByClassName('oddeven')
  for(i = 0;i<oddeven.length;i++){
    oddeven[i].style.display = 'none'
  }
  const showDiv = document.getElementById('show-div')
  showDiv.innerText = tossVal

  if(tossVal){
    const base_panel = document.getElementById('base')
    for(i = 1;i<7;i++){
      const click_btn = document.createElement('div')
      click_btn.className = 'click-btn'
      click_btn.id = i
      click_btn.innerText = i
      base_panel.appendChild(click_btn)
    }    
    const all_btns = document.querySelectorAll('.click-btn')

    for(i = 0;i<all_btns.length;i++){
      all_btns[i].addEventListener('click',clickFn)
    }
  }
}
const clickFn =(e)=>{
    const random = Math.floor(1+Math.random()*6)
    const click = Number(e.target.id)
    right.innerText = click
    scoreRight += click
   
    left.innerText = random 
    
    total = random+click
    if(total%2 === 0){
      totalNa = 'even'
    }else{
      totalNa = 'odd'
    }
    if(tossVal === totalNa){
      tossWon ='won'
    }else{
      tossWon = 'loose'
    }

   tossStart()
   mainStart()
  }
function mainStart(){
    const mStart = document.getElementById('start-game')
    center.appendChild(scoreDiv)
    mStart.addEventListener('click',()=>{
        if(you === 'batting'){
            const all_btns = document.querySelectorAll('.click-btn')
            all_btns.forEach(k=>{
                k.addEventListener('click',()=>{
                    
                })
            })
        }else{
    
        }
    })
}
function tossStart(){    
    const base_panel = document.getElementById('base')
    base_panel.style.display = 'none'
 
    const showDiv = document.getElementById('show-div')
    showDiv.innerText = `Toss ${tossWon}`
    if(tossWon === 'won'){
        const wrap_select = document.createElement('div')

        const batting = document.createElement('button')
        const bowling = document.createElement('button')
        batting.innerText ='batting'
        batting.className = 'select-toss'
        bowling.innerText = 'bowling'
        bowling.className = 'select-toss'
        showDiv.appendChild(wrap_select)
       wrap_select.appendChild(batting)
       wrap_select.appendChild(bowling)
      const selectToss = document.getElementsByClassName('select-toss')
      
      for(i =0;i<selectToss.length;i++){
        selectToss[i].addEventListener('click',(e)=>{
            you = e.target.innerText
            showDiv.innerText=you
            const mStart = document.createElement('button')
            mStart.innerText = "start game"
            mStart.id = 'start-game'
            showDiv.appendChild(mStart)
            mainStart()
        })
      }
      }else{
        const computerChooseRandom = Math.floor(Math.random()*2)
        console.log(computerChooseRandom)
        const batOrBowl = ['batting','bowling']
        const notifyPlayer = document.createElement('div')
        notifyPlayer.className = 'white'
        if(batOrBowl[computerChooseRandom] === 'batting'){
            notifyPlayer.innerText = 'You Bat'
            you = 'batting'
        }else{
            notifyPlayer.innerText = 'You Bowl'
            you = 'bowling'
        }
        const mStart = document.createElement('button')
        mStart.innerText = "start game"
        mStart.id = 'start-game'
        showDiv.appendChild(mStart)
        showDiv.appendChild(notifyPlayer)
        mainStart()
      }  
}