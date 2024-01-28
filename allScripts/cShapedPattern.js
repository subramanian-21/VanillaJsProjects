const box = document.querySelectorAll(".box");

const mbody = document.querySelector('.mbody')
const tarArr = []
mbody.addEventListener('click',(e)=>{
    if(e.target.classList.contains("box")){
        tarArr.push(e.target);
        e.target.classList.add('red')
        if(tarArr.length == box.length){
            let count = 0;
            while(count <=6){
                let element=  tarArr.shift()
                setTimeout(()=>{
                    element.classList.remove('red')
                },count*1000)
                count++
            }
        }
    }
})
