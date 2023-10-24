const root = document.getElementById("root");
const main = document.createElement("div");
const pattern = [
  [1,2,3],[4,5,6],[7,8,9],
  [1,4,7],[2,5,8],[3,6,9],
  [1,5,9],[3,5,7]
]
const comp = document.getElementById('ab')
const xArr = []
const oArr = []
main.classList.add("grid-container");
for (i = 1; i < 10; i++) {
  const div = document.createElement("div");
  div.className = "grid-item";
  div.id = i;
  main.appendChild(div);
}

root.appendChild(main);
let found = false
function validate (pattern,arr) {
return pattern.some(s => s.every(k=> arr.includes(k)))
}

let count = 0;
const click = (e) => {
  const clicked = e.target;
  const err = document.getElementById("err");
  if(count === 8){
    showWin('Match Draw...')
  }else{
   
    if (count % 2 === 0) {
        if (clicked.innerText === "X" || clicked.innerText === "O") {
          err.classList.add('red')
          err.innerText = "Place Somewhere";
        } else {
          err.innerText = "";
          clicked.innerText = "X";
          xArr.push(Number(clicked.id))
         
          clicked.classList.add("red");
          const x = validate(pattern,xArr)
       
          count++;
          if(x){
           
            showWin('X wins...')
            
          }
        }
      } else {
        if (clicked.innerText === "X" || clicked.innerText === "O") {
          err.classList.add('red')
          err.innerText = "Place Somewhere";
        } else {
          err.innerText = "";
          clicked.classList.add("blue");
          oArr.push(Number(clicked.id))
          
          clicked.innerText = "O";
          const o = validate(pattern,oArr)
    
          if(o){
           showWin('O wins...')
          }
          count++;
        }
      }
  }
 
};
const grid = document.getElementsByClassName("grid-item");
for (i = 0; i < grid.length; i++) {
  grid[i].addEventListener("click", click);
}
const body = document.getElementsByTagName('body')
const showWin =(p)=>{
  const div= document.createElement('div')
  div.className = 'abs'
  const innerDiv = document.createElement('div')
  innerDiv.className = 'abs-in'
  innerDiv.innerHTML = p
  const reload = document.createElement('div')
  reload.className = 'reload-btn'
  reload.innerText = 'Replay'
  
  innerDiv.appendChild(reload)
  div.appendChild(innerDiv)
  body[0].appendChild(div)

  reload.addEventListener('click',()=>{
    window.location.reload()
  })
}