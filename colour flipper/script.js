let sub=document.getElementById("submit");
let disp=document.getElementById("disp");
let wrap=document.getElementById("wrap");
let arr=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
function randomindex(){
    let ind=Math.floor(Math.random()*15);
    return arr[ind];
}
sub.addEventListener("click",flip);
function flip(){
    let code="#";
    
    for(i=0;i<6;i++)
    code =code + randomindex();
    console.log(code);
    wrap.style.backgroundColor=code;
    disp.innerHTML=code;
}
