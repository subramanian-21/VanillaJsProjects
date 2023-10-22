const min = document.getElementById("min");
const sec = document.getElementById("sec");
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
let secSet, minSet;
const angle = document.getElementById("angle");
let degreeMin = 90;
let degreeSec = 90;
function changeMin() {
  degreeMin += 0.1;
  min.style.transform = `rotate(${degreeMin}deg)`;
  minSet = setTimeout(changeMin, 1000);
  console.log(degreeMin);
}
function changeSec() {
  degreeSec += 0.6;
  sec.style.transform = `rotate(${degreeSec}deg)`;
  const degree = degreeSec - degreeMin;

  angle.innerText = Math.floor(degree);
  secSet = setTimeout(changeSec, 100);
}
function start() {
  changeMin();
  changeSec();
  startbtn.style.display = "none";
  stopbtn.style.display = "block";
}
function stops() {
  clearTimeout(secSet);
  clearTimeout(minSet);

  startbtn.style.display = "block";
  stopbtn.style.display = "none";
}
startbtn.addEventListener("click", start);
stopbtn.addEventListener("click", stops);
