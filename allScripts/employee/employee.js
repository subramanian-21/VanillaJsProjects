

const left = document.getElementById('left')
const right = document.getElementById("right")
const addBtn = document.getElementById("add")
const form = document.getElementById('form')

const dataForm = document.querySelector(".add-form")
const submitBtn = document.querySelector(".submit-form")

let selectedEmployeeId = null;
let selectedEmployee = null;
window.onload =async ()=>{
   let empData = await fetchData();
    
    selectedEmployee = empData[0]
    selectedEmployeeId = empData[0].id
    renderData(empData)
    addBtn.addEventListener('click',(e)=>{
        form.style.display = 'flex'
    })
    form.addEventListener('click',(e)=>{
        if(e.target.className == "form")
            e.target.style.display= 'none'
    })

    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault()

        let formD = new FormData(dataForm)
        let val = [...formD.entries()]
        let addObj = {};
        let count  = 0;
        for(let k of val){
            if(k[1] =="") {
                alert("Enter All Fields");
                break;
            }
            addObj[k[0]] = k[1];
            count++;
        }
        
           
        if(count == 4){
            empData = [...empData ,addObj]
            renderData(empData)
            form.style.display = "none"
        }
        
    })
    left.addEventListener('click',(e)=>{
        if(e.target.tagName === 'SPAN' ){
           if(selectedEmployeeId !== e.target.id){
            selectedEmployeeId = e.target.id;
            renderData(empData);
           }
        }
    })
}

async function fetchData(){
    let data =await fetch("../allScripts/employee/data.json");
    let json = await data.json();
    return json;
}

function renderData(empData){
    left.innerHTML = ""
    empData.forEach((k,i)=>{
        let wrapper  = document.createElement('span')
        wrapper.className = 'emp-wrapper'
        if(selectedEmployeeId == k.id){
            wrapper.classList.add("sel")
            selectedEmployee = k;
        }
        wrapper.innerHTML = k.name;
        wrapper.id = k.id;
        left.appendChild(wrapper);
    })   
    renderRight(selectedEmployee)
}

function renderRight (obj) {
    right.innerHTML = ""
    right.innerHTML = `<div class="ef">
    <div >Employee Name : ${obj.name}</div>
  </div>
  <div class="ef">
    <div >Joining Date : ${obj.date}</div>
    <div id="date"></div>
  </div>
  <div class="ef">
    <div >Employee Title : ${obj.title}</div>

    <div id="profession"></div>
  </div>`
}