const min =  document.getElementById('min')
const sec =  document.getElementById('sec')
const startbtn = document.getElementById('start')
const stopbtn = document.getElementById('stop')
let secSet,minSet;

let degreeMin = 90
let degreeSec = 90
function changeMin(){
    if(degreeMin ===360){
        degreeMin =0
    }
    degreeMin += 0.1
    min.style.transform= `rotate(${degreeMin}deg)`
    minSet = setTimeout(changeMin,1000)
    console.log(degreeMin)
}
function changeSec(){
    if(degreeSec ===360){
        degreeSec =0
    }
    degreeSec += 0.6
    sec.style.transform = `rotate(${degreeSec}deg)`
   
   secSet = setTimeout(changeSec,100)
}
function start(){
    changeMin()
    changeSec()
    startbtn.style.display ='none'
    stopbtn.style.display = 'block'
    
}
function stops(){
    clearTimeout(secSet)
    clearTimeout(minSet)
  
    startbtn.style.display ='block'
    stopbtn.style.display = 'none'

}
startbtn.addEventListener('click',start)
stopbtn.addEventListener('click',stops)