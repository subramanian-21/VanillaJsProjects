const hrs = document.querySelector(".hrs");
    const min = document.querySelector(".min")
    const sec = document.querySelector(".sec");
    const startBtn = document.querySelector('.green')
    const stopBtn = document.querySelector(".red")
    const reset = document.querySelector(".blue");

(function(){
    hrs.focus()
    let setTimer = null;
    startBtn.addEventListener('click',()=>{
        if(hrs.value == 0 && min.value == 0 && sec.value == 0) return;
        runTimer()
        function runTimer(){
            startBtn.style.display ="none"
            stopBtn.style.display ="initial"
            setTimer = setInterval(()=>{
                timer()
            },1000);
        }
        function stopTimer(){
            clearTimeout(setTimer)
        }

        function timer(){
            if(sec.value > 60){
                min.value +=1;
                sec.value = sec.value - 60;
            }
            if(min.value >60){
                hrs.value++;
                min.value = min.value - 60
            }
            if(hrs.value == 0 && min.value == 0 && sec.value == 0){
                hrs.value = ""
                min.value = ""
                sec.value = ""
                stopTimer()
            }else if(sec.value != 0){
                sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`
            }
            else if(min.value > 0 && sec.value ==0){
            min.value =  `${min.value <= 10 ? "0" : ""}${min.value - 1}`
            sec.value = 59;
            }else if(hrs.value >0 && min.value == 0 && sec.value == 0){
                hrs.value =  `${hrs.value <= 10 ? "0" : ""}${hrs.value - 1}`
                min.value = 59;
                sec.value = 59;
            }
        }
       
    })
    stopBtn.addEventListener('click',()=>{
        startBtn.style.display ="initial"
        stopBtn.style.display ="none"
        clearTimeout(setTimer)
    })
    reset.addEventListener('click',()=>{
        clearTimeout(setTimer)
        hrs.value = ""
        min.value = ""
        sec.value = ""
    })
})()

hrs.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13){
        min.focus();
    }
    if(String(hrs.value).length === 2){
        min.focus()
    }
})
min.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
        sec.focus();
    }
    if(e.keyCode === 8 && String(min.value).length === 0){
        hrs.focus();
    }
    if(String(min.value).length === 2){
        sec.focus()
    }

})
sec.addEventListener('keydown',(e)=>{
    if(e.keyCode === 8 && String(sec.value).length === 0){
        min.focus();
    }
})