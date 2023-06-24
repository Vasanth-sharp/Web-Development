function call(){
let a=Number(document.getElementById("user").value);
let b=a/2.54;
let c=document.getElementById("result");
c.innerHTML=b.toFixed(2);
}