(function(){
    const stars = document.querySelector('.stars');
    const star = document.querySelectorAll('.star');
    let rating = 0;
    stars.addEventListener("click",(e)=>{
        if(e.target.tagName === 'SPAN'){
            let index = e.target.dataset.index;
            for(let i = 0;i<5;i++){
                star[i].classList.remove('yellow')
            }
            for(let i = 0;i<index;i++){
                star[i].classList.add('yellow')
            }
            rating = index;

            document.getElementById('out').innerText = `Rating count : ${rating}`
        }
    })
    stars.addEventListener("mouseover",(e)=>{
        if(e.target.tagName === 'SPAN'){
            let index = e.target.dataset.index;
            for(let i = 0;i<5;i++){
                star[i].classList.remove('yellow')
            }
            for(let i = 0;i<index;i++){
                star[i].classList.add('yellow')
            }
        }
    })
    function starFn(){
        let n = Number(this.getAttribute("data-index"))

        for(let i = 0;i<n;i++){
            this.classList.add("yellow");
        }
    }
    
    


})()