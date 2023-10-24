const image = document.querySelectorAll('.image')

image.forEach(div=>{
    div.addEventListener('click',handleClick)
})

function handleClick(e){
    this.classList.toggle('clicked')
}