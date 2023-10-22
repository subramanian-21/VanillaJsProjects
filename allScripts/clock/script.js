const min =  document.getElementById('min')
const sec =  document.getElementById('sec')

let degreeMin = 90
let degreeSec = 90
function changeMin(){
    if(degreeMin ===360){
        degreeMin =0
    }
    degreeMin += 0.1
    min.style.transform= `rotate(${degreeMin}deg)`
    setTimeout(changeMin,1000)
    console.log(degreeMin)
}
function changeSec(){
    if(degreeSec ===360){
        degreeSec =0
    }
    degreeSec += 0.6
    sec.style.transform = `rotate(${degreeSec}deg)`
   
    setTimeout(changeSec,100)
}

changeMin()
changeSec()