let show=document.querySelectorAll(".show");
fetch("https://api.frankfurter.app/currencies")
.then((res)=>(res.json()))
.then((msg)=>dropdisp(msg))
function dropdisp(msg){
    let val=Object.entries(msg);
    for(let i=0;i<val.length;i++){
    let opt=`<option val="${val[i][0]}">${val[i][0]}</option>`;
    show[0].innerHTML+=opt;
    show[1].innerHTML+=opt;
    }
}
let submit=document.getElementById("submit");
submit.addEventListener("click",take);
function take(){
   let from= show[0].options[show[0].selectedIndex].value;
   let to= show[1].options[show[1].selectedIndex].value;
   let ip1=document.getElementById("from").value;
   if(from===to){
    alert("Please enter differrent country")
   }
   else
   {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${ip1}&from=${from}&to=${to}`)
    .then(resp => resp.json())
    .then((data) => {
        let out=Object.entries(data.rates);
        document.getElementById("to").value=out[0][1];
  });
    
   }
}