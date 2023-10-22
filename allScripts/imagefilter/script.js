const body = document.getElementById("body");
const d = document.getElementById('idd')

const img = document.createElement("img");
const controls = document.getElementById('controls')
const controls1= document.getElementById('controls1')
const handleImage = (e) => {
  const reader = new FileReader();
  if(e.target.files[0]){
    reader.onload = (e)=>{
        img.src = reader.result
    }
    reader.readAsDataURL(e.target.files[0])
    d.style.display = 'none'
    controls.style.display ='block'
    controls1.style.display ='block'
  }

  body.appendChild(img);
};
function handleChange(e){
    if(e.target.id === 'blur'){
        img.style.filter = `${e.target.id}(${e.target.value}px)`
    }
    if(e.target.id === 'saturate'){
        img.style.filter = `${e.target.id}(${e.target.value})`
    }else{
        img.style.filter = `${e.target.id}(${e.target.value}%)`
    }
    
}