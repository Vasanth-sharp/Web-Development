const menu=document.querySelector(".menu");
menu.addEventListener("click",()=>{
    const ul=document.querySelector("nav ul");
    ul.classList.toggle("showmenu")
});