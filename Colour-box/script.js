let box=document.getElementById("box");
let inputc=document.getElementById("inputc");
let inputb=document.getElementById("inputb");

inputc.addEventListener("input",()=>{box.style.backgroundColor=inputc.value;})
inputb.addEventListener("input",()=>{box.style.borderRadius=inputb.value;})