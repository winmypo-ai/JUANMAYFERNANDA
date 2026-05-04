let current=0;
const slides=document.querySelectorAll(".slide");
const music=document.getElementById("bg-music");
let started=false;

function show(i){
slides.forEach(s=>s.classList.remove("active"));
slides[i].classList.add("active");
}

document.addEventListener("click",(e)=>{
if(e.target.closest(".btn")) return;

if(current===0 && !started){
music.play().catch(()=>{});
started=true;
}

if(e.clientX > window.innerWidth/2){
if(current<slides.length-1) current++;
}else{
if(current>0) current--;
}

show(current);
});
