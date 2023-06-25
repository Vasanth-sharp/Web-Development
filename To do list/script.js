const input=document.querySelector("input");
const result=document.querySelector(".result");
const btn=document.querySelector("#add");
let arr=[];
window.onload =()=>{
    arr=JSON.parse(localStorage.getItem("task")) || [];
    arr.forEach(val=>addto(val));
}
btn.addEventListener("click",()=>{
    arr.push(input.value);
    localStorage.setItem("task",JSON.stringify(arr));
    addto(input.value);
    input.value="";
})
function addto(val){
    let para=document.createElement("p");
    result.appendChild(para);
    para.innerHTML=val;
    para.addEventListener("click",()=>{
        para.style.textDecoration="line-through";
        remove(val);
    })
    para.addEventListener("dblclick",()=>{
        result.removeChild(para);
        remove(val);
    })
}
function remove(val)
{
    let index=arr.indexOf(val);
    if(index>-1){
        arr.splice(index,1);
    }   
        localStorage.setItem("task",JSON.stringify(arr));
}